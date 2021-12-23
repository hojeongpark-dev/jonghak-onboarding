import { Radio } from "antd";
import { CustomInputProps, RadioFormInfo, RadioInputProps } from "../../../types/form";
import { removeUnusedProperty } from "../../../util/form";

export default function RadioInput({
  keyAndName,
  handleChange,
  radios,
  ...radioFormProps
}: RadioInputProps & RadioFormInfo & CustomInputProps): JSX.Element {
  return (
    <Radio.Group
      key={keyAndName}
      name={keyAndName}
      onChange={handleChange}
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
