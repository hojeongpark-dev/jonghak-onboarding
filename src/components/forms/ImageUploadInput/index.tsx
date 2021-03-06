import { Upload } from "antd";
import { RcFile } from "antd/lib/upload/interface";
import { useState } from "react";
import styled from "styled-components";
import { removeUnusedProperty } from "../../../util/form";
import Flex from "../../layout/styled/Flex";
import {
  CustomInputProps,
  ImageUploadInputProps,
} from "../../../types/form/inputProps";
import { ImageFormInfo } from "../../../types/form/formInfos";

const ImageFilePreview = styled.img`
  width: 200px;
  height: 200px;
`;

export default function ImageUploadInput({
  keyAndName,
  onChange,
  srcUrl,
  ...imageUploadInputProps
}: ImageUploadInputProps & ImageFormInfo & CustomInputProps): JSX.Element {
  const [previewImageUrl, setPreviewImageUrl] = useState(srcUrl);

  const makePreviewImage = (file?: RcFile) =>
    setPreviewImageUrl(file && URL.createObjectURL(file));

  // eslint-disable-next-line @typescript-eslint/no-empty-function,no-underscore-dangle
  const _unUsedRequest = () => {};

  return (
    <Upload.Dragger
      key={keyAndName}
      name={keyAndName}
      multiple={false}
      accept={"image/*"}
      showUploadList={false}
      customRequest={_unUsedRequest}
      onChange={(e) => {
        makePreviewImage(e.file?.originFileObj);
        onChange?.(e);
      }}
      {...removeUnusedProperty(imageUploadInputProps)}
    >
      <Flex p={32} flexDirection={"column"}>
        {previewImageUrl && (
          <ImageFilePreview src={previewImageUrl} alt={"previewImageUrl"} />
        )}
        <p>Click or drag file to this area to upload</p>
      </Flex>
    </Upload.Dragger>
  );
}
