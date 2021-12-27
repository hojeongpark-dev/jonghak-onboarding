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
  onChange,
  multiple,
  initialValue,
  ...inputFormProps
}: TextInputProps & TextFormInfo & CustomInputProps): JSX.Element {
  return (
    <Input
      key={keyAndName}
      allowClear
      name={keyAndName}
      onChange={onChange}
      multiple={multiple}
      defaultValue={initialValue}
      type={inputFormProps.formType === FormType.PASSWORD ? "password" : "text"}
      {...removeUnusedProperty(inputFormProps)}
    />
  );
}
