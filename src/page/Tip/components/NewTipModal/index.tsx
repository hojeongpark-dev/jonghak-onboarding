import { Descriptions, Modal, RadioChangeEvent } from "antd";
import { string } from "yup";
import React, { useState } from "react";
import { UploadChangeParam } from "antd/lib/upload/interface";
import { toast } from "react-toastify";
import useForm from "../../../../hooks/useForm";
import { FormType, SelectOptionItem } from "../../../../types/form";
import STRING from "../../../../constants/strings";
import { languageCategoriesKo } from "../../constants";
import useBlogForSearchQuery from "../../../../apis/blog/useBlogForSearchQuery";
import { DEFAULT_LIMIT_SIZE } from "../../../../constants/list";
import recordToArray from "../../../../util/record";
import { LanguageType } from "../../../../graphql-types";
import { useCreateTipMutation } from "../../../../apis/tip/useTipMutations";
import { getErrorDescription } from "../../../../network/error";
import { usePreSignedUrlForUploadQuery } from "../../../../apis/preSignedUrl/usePreSignedQueries";
import s3Upload from "../../../../network/s3Upload";

const languageRadios = recordToArray(languageCategoriesKo).map(
  ([key, label]) => ({ label, key })
);

const labelStyle = {
  width: 120,
};
const contentStyle = { maxWidth: 340, width: 340 };

interface NewTipModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCreate: () => void;
}
function NewTipModal({ isVisible, onClose, onCreate }: NewTipModalProps): JSX.Element {
  const [languageState, setLanguageState] = useState<LanguageType>("KOREAN");
  const { createTip } = useCreateTipMutation();
  const { getPreSignedUrl } = usePreSignedUrlForUploadQuery();
  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const [blogSearchKeyword, setBlogSearchKeyword] = useState("");
  const { blogs } = useBlogForSearchQuery({
    limit: DEFAULT_LIMIT_SIZE,
    page: 1,
    filter: {
      title: blogSearchKeyword,
      language: languageState,
    },
  });

  const blogOptions: SelectOptionItem[] | undefined = blogs?.map(
    ({ translations }) => ({
      value: `${translations?.at(0)?.code}`,
      label: `${translations?.at(0)?.title}`,
    })
  );

  const { formik, Form } = useForm({
    formInfo: {
      language: {
        description: "언어 선택*",
        formType: FormType.RADIO,
        initialValue: languageRadios[0].key,
      },
      title: {
        description: "제목*",
        formType: FormType.TEXT,
        validator: string().required().min(1),
        initialValue: "",
      },
      connectedBlog: {
        description: "블로그 연결*",
        formType: FormType.SELECT_SEARCH,
        validator: string().required(),
        initialValue: "",
      },
      image: {
        description: "메인 이미지*",
        formType: FormType.IMAGE_UPLOAD,
        validator: string().required(),
        initialValue: "",
      },
    },
    onSubmit: async ({
      title, connectedBlog, language, image: filename
    }) => {
      try {
        const preSignedUrl = await getPreSignedUrl({
          domain: "TIP",
          filename,
        });
        const imageUrl = await s3Upload({ preSignedUrl, file: uploadImage });
        await createTip({
          title,
          language,
          blogTransCode: Number(connectedBlog),
          imageUrl,
        });
        toast.success(STRING.CREATE_SUCCESS);
        onCreate();
        onClose();
      } catch (e) {
        toast.error(getErrorDescription(e));
      }
    },
  });

  const handleOptionClick = ({ value }: SelectOptionItem) => formik.handleChange("connectedBlog")(value);

  const onSearch = (keyword: string) => setBlogSearchKeyword(keyword);

  const handleLanguageChange = ({ target: { value } }: RadioChangeEvent) => {
    setLanguageState(value as LanguageType);
  };

  const handleImageChange = (info: UploadChangeParam) => {
    if (info.file.originFileObj) {
      formik.handleChange("image")(info.file.name);
      setUploadImage(info.file.originFileObj);
    }
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      title={STRING.OPEN_NEW_TIP_MODAL}
      okText={STRING.CREATE}
      okButtonProps={{ disabled: !formik.isValid }}
      cancelText={STRING.CANCEL}
      onOk={() => formik.handleSubmit()}
    >
      <Descriptions contentStyle={contentStyle}>
        <Descriptions.Item labelStyle={labelStyle} label="언어 선택*">
          <Form.language
            radios={languageRadios}
            handleChange={handleLanguageChange}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions contentStyle={contentStyle}>
        <Descriptions.Item labelStyle={labelStyle} label="제목*">
          <Form.title />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions contentStyle={contentStyle}>
        <Descriptions.Item labelStyle={labelStyle} label="블로그 연결*">
          <Form.connectedBlog
            onSearch={onSearch}
            onOptionClick={handleOptionClick}
            options={blogOptions}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions contentStyle={contentStyle}>
        <Descriptions.Item labelStyle={labelStyle} label="메인 이미지*">
          <Form.image onChange={handleImageChange} />
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}

export default NewTipModal;
