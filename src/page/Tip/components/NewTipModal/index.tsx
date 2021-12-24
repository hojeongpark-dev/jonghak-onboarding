import { RadioChangeEvent } from "antd";
import { object, string } from "yup";
import { useState } from "react";
import { UploadChangeParam } from "antd/lib/upload/interface";
import { toast } from "react-toastify";
import useForm from "../../../../hooks/useForm";
import STRING from "../../../../constants/strings";
import { languageCategoriesKo } from "../../constants";
import useBlogForSearchQuery from "../../../../apis/blog/useBlogForSearchQuery";
import recordToArray from "../../../../util/record";
import { LanguageType } from "../../../../graphql-types";
import { useCreateTipMutation } from "../../../../apis/tip/useTipMutations";
import { getErrorDescription } from "../../../../network/error";
import { usePreSignedUrlForUploadQuery } from "../../../../apis/preSignedUrl/usePreSignedQueries";
import s3Upload from "../../../../network/s3Upload";
import DescriptionRow from "../../../../components/forms/DescriptionRow";
import CustomModal from "../../../../components/common/CustomModal";
import { FormType } from "../../../../types/form/formType";

const languageRadios = recordToArray(languageCategoriesKo).map(
  ([key, label]) => ({ label, key })
);

interface NewTipModalProps {
  isVisible: boolean;
  onClose: () => void;
  afterCreate: () => void;
}

function NewTipModal({
  isVisible,
  onClose,
  afterCreate,
}: NewTipModalProps): JSX.Element {
  const [language, setLanguage] = useState<LanguageType>("KOREAN");
  const [uploadImage, setUploadImage] = useState<File | null>(null);

  const { createTip } = useCreateTipMutation();
  const { getPreSignedUrl } = usePreSignedUrlForUploadQuery();
  const { blogOptions, setBlogSearchKeyword } = useBlogForSearchQuery(language);

  const { formik, Form } = useForm({
    formInfo: {
      language: {
        formType: FormType.RADIO,
        initialValue: languageRadios[0],
      },
      title: {
        formType: FormType.TEXT,
        validator: string().required().min(1),
        initialValue: "",
      },
      connectedBlog: {
        formType: FormType.SELECT_SEARCH,
        validator: object().required(),
        initialValue: { label: "", value: "" },
      },
      image: {
        formType: FormType.IMAGE_UPLOAD,
        validator: string().required(),
        initialValue: "",
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
          language: language.key,
          blogTransCode: Number(connectedBlog.value),
          imageUrl,
        });
        toast.success(STRING.CREATE_SUCCESS);
        afterCreate();
        onClose();
      } catch (e) {
        toast.error(getErrorDescription(e));
      }
    },
  });

  const handleLanguageChange = ({ target: { value } }: RadioChangeEvent) => {
    setLanguage(value as LanguageType);
  };

  const handleImageChange = (info: UploadChangeParam) => {
    if (info.file.originFileObj) {
      formik.handleChange("image")(info.file.name);
      setUploadImage(info.file.originFileObj);
    }
  };

  return (
    <CustomModal
      visible={isVisible}
      onCancel={onClose}
      title={STRING.OPEN_NEW_TIP_MODAL}
      okText={STRING.CREATE}
      okButtonDisable={!formik.isValid}
      onOk={formik.handleSubmit}
    >
      <DescriptionRow label={STRING.SELECT_LANGUAGE_LABEL}>
        <Form.language
          radios={languageRadios}
          onChange={handleLanguageChange}
        />
      </DescriptionRow>
      <DescriptionRow label={STRING.TITLE_LABEL}>
        <Form.title />
      </DescriptionRow>
      <DescriptionRow label={STRING.CONNECTED_BLOG_LABEL}>
        <Form.connectedBlog
          onSearch={setBlogSearchKeyword}
          options={blogOptions}
        />
      </DescriptionRow>
      <DescriptionRow label={STRING.MAIN_IMAGE_LABEL}>
        <Form.image onChange={handleImageChange} />
      </DescriptionRow>
    </CustomModal>
  );
}

export default NewTipModal;
