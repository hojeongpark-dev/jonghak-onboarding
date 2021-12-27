import TextArea from "antd/es/input/TextArea";
import { removeUnusedProperty } from "../../../util/form";
import {
  CustomInputProps,
  TextAreaInputProps,
} from "../../../types/form/inputProps";
import { TextAreaFormInfo } from "../../../types/form/formInfos";

export default function TextAreaInput({
  keyAndName,
  initialValue,
  onChange,
  ...inputFormProps
}: TextAreaInputProps & TextAreaFormInfo & CustomInputProps): JSX.Element {
  return (
    <TextArea
      key={keyAndName}
      name={keyAndName}
      defaultValue={initialValue}
      onChange={onChange}
      {...removeUnusedProperty(inputFormProps)}
    />
  );
}
