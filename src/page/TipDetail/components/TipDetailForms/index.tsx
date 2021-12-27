import styled from "styled-components";
import { bool, object, string } from "yup";
import { UploadChangeParam } from "antd/es/upload";
import DescriptionRow from "../../../../components/forms/DescriptionRow";
import STRING from "../../../../constants/strings";
import useForm from "../../../../hooks/useForm";
import { Tip } from "../../../../graphql-types";
import RightButton from "../../../../components/common/RightButton";
import Flex from "../../../../components/layout/styled/Flex";
import { SelectOptionItem } from "../../../../types/form/inputProps";
import { FormType } from "../../../../types/form/formType";
import s3Upload from "../../../../network/s3Upload";
import { useTipUpdateMutation } from "../../../../apiHooks/tip/useTipMutations";
import { usePreSignedUrlForUploadLazyQuery } from "../../../../apiHooks/preSignedUrl/usePreSignedQueries";
import { ErrorToast, SuccessToast } from "../../../../toast";

function getAfterValueWhenDiff<T>(before: T, after: T): T | undefined {
  return before === after ? undefined : after;
}

const FormLayout = styled.section`
  max-width: 800px;
  width: 720px;
`;

interface TipDetailFormsProps {
  tip: Tip;
  blogOptions?: SelectOptionItem[];
  onBlogSearch: (keyword: string) => void;
  onUpdate: () => void;
}

export default function TipDetailForms({
  tip,
  blogOptions,
  onBlogSearch,
  onUpdate,
}: TipDetailFormsProps): JSX.Element {
  const { updateTip, loading } = useTipUpdateMutation();
  const { getPreSignedUrl } = usePreSignedUrlForUploadLazyQuery();

  const connectedBlog = {
    label: `${tip.blogTrans.title}`,
    value: `${tip.blogTrans.code}`,
  };

  const { formik, Form } = useForm({
    formInfo: {
      title: {
        formType: FormType.TEXT,
        initialValue: tip.title,
        validator: string().required(),
      },
      isActive: {
        formType: FormType.TOGGLE,
        initialValue: tip.isActive,
        validator: bool().required(),
      },
      connectedBlog: {
        formType: FormType.SELECT_SEARCH,
        validator: object().pick(["value"]).required(),
        initialValue: connectedBlog,
      },
      image: {
        formType: FormType.IMAGE_UPLOAD,
        validator: string().required(),
        initialValue: tip.imageUrl,
      },
    },
    onSubmit: async ({ title, connectedBlog: blogTrans, isActive, image }) => {
      try {
        await updateTip({
          code: tip.code,
          title: getAfterValueWhenDiff(tip.title, title),
          blogTransCode: getAfterValueWhenDiff(
            Number(connectedBlog.value),
            Number(blogTrans.value)
          ),
          toggleActive: getAfterValueWhenDiff(tip.isActive, isActive),
          imageUrl: getAfterValueWhenDiff(tip.imageUrl, image),
        });
        SuccessToast(STRING.UPDATE_SUCCESS);
        onUpdate();
      } catch (e) {
        ErrorToast(e);
      }
    },
  });

  const handleImageChange = async ({ file }: UploadChangeParam) => {
    if (file.originFileObj) {
      try {
        const filename = file.name;
        const uploadImage = file.originFileObj;
        const preSignedUrl = await getPreSignedUrl({
          domain: "TIP",
          filename,
        });
        const imageUrl = await s3Upload({ preSignedUrl, file: uploadImage });
        await formik.setFieldValue("image", imageUrl);
        SuccessToast(STRING.IMAGE_UPLOAD_SUCCESS);
      } catch (e) {
        ErrorToast(e);
      }
    }
  };

  return (
    <Flex flexDirection={"row-reverse"} mt={20}>
      <RightButton
        disabled={!formik.isValid || loading}
        label={STRING.SAVE}
        onClick={formik.submitForm}
      />
      <FormLayout>
        <DescriptionRow label={STRING.TITLE}>
          <Form.title value={formik.values.title} />
        </DescriptionRow>
        <DescriptionRow label={STRING.IS_ACTIVE}>
          <Form.isActive />
        </DescriptionRow>
        <DescriptionRow label={STRING.MANAGER}>
          {tip.manager?.nickname}
        </DescriptionRow>
        <DescriptionRow label={STRING.CREATED_AT}>
          {tip.createdAt}
        </DescriptionRow>
        <DescriptionRow label={STRING.CONNECTED_BLOG_LABEL}>
          <Form.connectedBlog onSearch={onBlogSearch} options={blogOptions} />
        </DescriptionRow>
        <DescriptionRow label={STRING.MAIN_IMAGE_LABEL}>
          <Form.image srcUrl={tip.imageUrl} onChange={handleImageChange} />
        </DescriptionRow>
      </FormLayout>
    </Flex>
  );
}
