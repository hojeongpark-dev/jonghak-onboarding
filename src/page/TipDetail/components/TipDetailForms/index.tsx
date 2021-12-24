import styled from "styled-components";
import { bool, object, string } from "yup";
import { UploadChangeParam } from "antd/es/upload";
import { toast } from "react-toastify";
import DescriptionRow from "../../../../components/forms/DescriptionRow";
import STRING from "../../../../constants/strings";
import useForm from "../../../../hooks/useForm";
import { Tip } from "../../../../graphql-types";
import RightButton from "../../../../components/common/RightButton";
import Flex from "../../../../components/layout/styled/Flex";
import { SelectOptionItem } from "../../../../types/form/inputProps";
import { FormType } from "../../../../types/form/formType";
import s3Upload from "../../../../network/s3Upload";
import { getErrorDescription } from "../../../../network/error";
import { useTipUpdateMutation } from "../../../../apiHooks/tip/useTipMutations";
import { usePreSignedUrlForUploadQuery } from "../../../../apiHooks/preSignedUrl/usePreSignedQueries";

function getAfterValueWhenDiff<T>(before: T, after: T): T | undefined {
  return before === after ? undefined : after;
}

const FormLayout = styled.section`
  max-width: 800px;
`;

interface TipDetailFormsProps {
  tip: Tip;
  blogOptions?: SelectOptionItem[];
  onSearch: (keyword: string) => void;
  onUpdate: () => void;
}

export default function TipDetailForms({
  tip,
  blogOptions,
  onSearch,
  onUpdate,
}: TipDetailFormsProps): JSX.Element {
  const { updateTip } = useTipUpdateMutation();
  const { getPreSignedUrl } = usePreSignedUrlForUploadQuery();

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
        validator: object().required(),
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
        toast.success(STRING.UPDATE_SUCCESS);
        onUpdate();
      } catch (e) {
        toast.error(getErrorDescription(e));
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
        toast.success(STRING.IMAGE_UPLOAD_SUCCESS);
      } catch (e) {
        toast.error(getErrorDescription(e));
      }
    }
  };

  return (
    <Flex flexDirection={"row-reverse"} mt={20}>
      <RightButton label={STRING.SAVE} onClick={formik.handleSubmit} />
      <FormLayout>
        <DescriptionRow label={STRING.TITLE}>
          <Form.title value={formik.values.title} />
        </DescriptionRow>
        <DescriptionRow label={"공개여부"}>
          <Form.isActive />
        </DescriptionRow>
        <DescriptionRow label={"담당자"}>
          {tip.manager?.nickname}
        </DescriptionRow>
        <DescriptionRow label={"생성일자"}>{tip.createdAt}</DescriptionRow>
        <DescriptionRow label={STRING.CONNECTED_BLOG_LABEL}>
          <Form.connectedBlog onSearch={onSearch} options={blogOptions} />
        </DescriptionRow>
        <DescriptionRow label={STRING.MAIN_IMAGE_LABEL}>
          <Form.image srcUrl={tip.imageUrl} onChange={handleImageChange} />
        </DescriptionRow>
      </FormLayout>
    </Flex>
  );
}
