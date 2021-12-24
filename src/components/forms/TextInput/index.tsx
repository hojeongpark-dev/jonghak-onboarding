import { Input } from "antd";
import { removeUnusedProperty } from "../../../util/form";
import {
  CustomInputProps,
  TextInputProps,
} from "../../../types/form/inputProps";
import { TextFormInfo } from "../../../types/form/formInfos";
import { FormType } from "../../../types/form/formType";

export default function TextInput({
  keyAndName,
  initialValue,
  onChange,
  ...inputFormProps
}: TextInputProps & TextFormInfo & CustomInputProps): JSX.Element {
  return (
    <Input
      key={keyAndName}
      name={keyAndName}
      type={inputFormProps.formType === FormType.PASSWORD ? "password" : "text"}
      allowClear
      defaultValue={initialValue}
      onChange={onChange}
      {...removeUnusedProperty(inputFormProps)}
    />
  );
}
