import Radio from "antd/lib/radio";
import { removeUnusedProperty } from "../../../util/form";
import { RadioFormInfo } from "../../../types/form/formInfos";
import {
  CustomInputProps,
  RadioInputProps,
} from "../../../types/form/inputProps";

export default function RadioInput({
  keyAndName,
  onChange,
  radios,
  ...radioFormProps
}: RadioInputProps & RadioFormInfo & CustomInputProps): JSX.Element {
  return (
    <Radio.Group
      key={keyAndName}
      name={keyAndName}
      onChange={onChange}
      defaultValue={radioFormProps.initialValue}
      {...removeUnusedProperty(radioFormProps)}
    >
      {radios.map(({ label, key }) => (
        <Radio key={key} value={key}>
          {label}
        </Radio>
      ))}
    </Radio.Group>
  );
}
