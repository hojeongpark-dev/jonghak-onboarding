import { Switch } from "antd";
import {
  CustomInputProps,
  ToggleInputProps,
} from "../../../types/form/inputProps";
import { removeUnusedProperty } from "../../../util/form";
import { ToggleFormInfo } from "../../../types/form/formInfos";

export default function ToggleInput({
  keyAndName,
  onChange,
  initialValue,
  ...toggleInputProps
}: ToggleFormInfo & ToggleInputProps & CustomInputProps): JSX.Element {
  return (
    <Switch
      key={keyAndName}
      onChange={onChange}
      defaultChecked={initialValue}
      {...removeUnusedProperty(toggleInputProps)}
    />
  );
}
