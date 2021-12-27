import { RadioChangeEvent } from "antd";
import { object, string } from "yup";
import { useState } from "react";
import { UploadChangeParam } from "antd/lib/upload/interface";
import { toast } from "react-toastify";
import { useImmer } from "use-immer";
import useForm from "../../../../hooks/useForm";
import STRING from "../../../../constants/strings";
import { languageCategoriesKo } from "../../constants";
import useBlogForSearchQuery from "../../../../apiHooks/blog/useBlogForSearchQuery";
import recordToArray from "../../../../util/record";
import { useCreateTipMutation } from "../../../../apiHooks/tip/useTipMutations";
import { getErrorDescription } from "../../../../network/error";
import { usePreSignedUrlForUploadLazyQuery } from "../../../../apiHooks/preSignedUrl/usePreSignedQueries";
import s3Upload from "../../../../network/s3Upload";
import DescriptionRow from "../../../../components/forms/DescriptionRow";
import CustomModal from "../../../../components/common/CustomModal";
import { FormType } from "../../../../types/form/formType";
import { ModalProps } from "../../../../types/modal";
import {
  BlogTranslationsArgs,
  QueryBlogsArgs,
} from "../../../../graphql-types";
import {
  DEFAULT_LIMIT_SIZE,
  INITIAL_PAGE_INDEX,
} from "../../../../constants/list";
import useWhenUpdate from "../../../../hooks/useWhenUpdate";
import { ErrorToast, SuccessToast } from "../../../../toast";

const languageRadios = recordToArray(languageCategoriesKo).map(
  ([key, label]) => ({ label, key })
);

const initialArgs: QueryBlogsArgs & BlogTranslationsArgs = {
  input: {
    limit: DEFAULT_LIMIT_SIZE,
    page: INITIAL_PAGE_INDEX,
    filter: {
      title: STRING.EMPTY,
      language: "KOREAN",
    },
  },
  language: "KOREAN",
};

function NewTipModal({ isVisible, onClose, afterOk }: ModalProps): JSX.Element {
  const [uploadImage, setUploadImage] = useState<File | null>(null);

  const { createTip } = useCreateTipMutation();
  const { getPreSignedUrl } = usePreSignedUrlForUploadLazyQuery();
  const [blogQueryArgs, setBlogQueryArgs] = useImmer(initialArgs);
  const { blogOptions, refetch } = useBlogForSearchQuery(blogQueryArgs);

  const { formik, Form } = useForm({
    formInfo: {
      language: {
        formType: FormType.RADIO,
        initialValue: languageRadios[0].key,
      },
      title: {
        formType: FormType.TEXT,
        validator: string().required().min(1),
        initialValue: STRING.EMPTY,
      },
      connectedBlog: {
        formType: FormType.SELECT_SEARCH,
        validator: object().pick(["value"]).required(),
      },
      image: {
        formType: FormType.IMAGE_UPLOAD,
        validator: string().required(),
        initialValue: STRING.EMPTY,
      },
    },
    onSubmit: async ({ title, connectedBlog, language, image: filename }) => {
      try {
        const preSignedUrl = await getPreSignedUrl({
          domain: "TIP",
          filename,
        });
        const imageUrl = await s3Upload({ preSignedUrl, file: uploadImage });
        await createTip({
          title,
          language,
          blogTransCode: Number(connectedBlog?.value),
          imageUrl,
        });
        SuccessToast(STRING.CREATE_SUCCESS);
        afterOk?.();
        onClose();
      } catch (e) {
        ErrorToast(e);
      }
    },
  });

  const handleBlogSearchKeywordChange = (keyword: string) => {
    setBlogQueryArgs((prev) => {
      prev.input.filter.title = keyword;
    });
  };

  useWhenUpdate(() => {
    refetch(blogQueryArgs).catch(ErrorToast);
  }, [blogQueryArgs]);

  const handleLanguageChange = ({
    target: { value: language },
  }: RadioChangeEvent) => {
    setBlogQueryArgs((prev) => {
      prev.language = language;
      prev.input.filter.language = language;
    });
  };

  const handleImageChange = ({ file }: UploadChangeParam) => {
    if (file.originFileObj) {
      formik.handleChange("image")(file.name);
      setUploadImage(file.originFileObj);
    }
  };

  return (
    <CustomModal
      visible={isVisible}
      onCancel={onClose}
      title={STRING.OPEN_NEW_TIP_MODAL}
      okText={STRING.CREATE}
      okButtonDisable={!formik.isValid}
      onOk={formik.submitForm}
    >
      <DescriptionRow label={`${STRING.SELECT_LANGUAGE_LABEL}*`}>
        <Form.language
          radios={languageRadios}
          onChange={handleLanguageChange}
        />
      </DescriptionRow>
      <DescriptionRow label={`${STRING.TITLE_LABEL}*`}>
        <Form.title />
      </DescriptionRow>
      <DescriptionRow label={`${STRING.CONNECTED_BLOG_LABEL}*`}>
        <Form.connectedBlog
          onSearch={handleBlogSearchKeywordChange}
          options={blogOptions}
        />
      </DescriptionRow>
      <DescriptionRow label={`${STRING.MAIN_IMAGE_LABEL}*`}>
        <Form.image onChange={handleImageChange} />
      </DescriptionRow>
    </CustomModal>
  );
}

export default NewTipModal;
