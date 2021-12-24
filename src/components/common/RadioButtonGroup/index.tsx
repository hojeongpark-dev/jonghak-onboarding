import { Radio, RadioProps } from "antd";
import { PropsWithChildren } from "react";
import STRING from "../../../constants/strings";

interface RadioButtonGroupProps extends RadioProps {
  addAll?: boolean;
  defaultValue?: string;
}

export default function RadioButtonGroup({
  addAll = true,
  children,
  defaultValue,
  ...radioProps
}: PropsWithChildren<RadioButtonGroupProps>): JSX.Element {
  return (
    <Radio.Group defaultValue={defaultValue || undefined} {...radioProps}>
      {addAll && <Radio.Button value={undefined}>{STRING.ALL}</Radio.Button>}
      {children}
    </Radio.Group>
  );
}
