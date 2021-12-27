import { Input } from "antd";
import { removeUnusedProperty } from "../../../util/form";
import {
  CustomInputProps,
  NumberInputProps,
} from "../../../types/form/inputProps";
import { NumberFormInfo } from "../../../types/form/formInfos";

export default function NumberInput({
  keyAndName,
  initialValue,
  onChange,
  placeholder,
  allowClear = true,
  ...numberFormProps
}: NumberInputProps & NumberFormInfo & CustomInputProps): JSX.Element {
  return (
    <Input
      key={keyAndName}
      name={keyAndName}
      placeholder={placeholder}
      type={"number"}
      allowClear={allowClear}
      defaultValue={initialValue}
      onChange={onChange}
      {...removeUnusedProperty(numberFormProps)}
    />
  );
}
