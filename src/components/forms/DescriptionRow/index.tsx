import { Descriptions } from "antd";
import { CSSProperties, PropsWithChildren } from "react";

interface DescriptionRowProps {
  label: string;
  labelStyle?: CSSProperties;
  contentStyle?: CSSProperties;
}

export default function DescriptionRow({
  label,
  children,
  labelStyle = { minWidth: 120 },
  contentStyle,
}: PropsWithChildren<DescriptionRowProps>): JSX.Element {
  return (
    <Descriptions contentStyle={contentStyle}>
      <Descriptions.Item labelStyle={labelStyle} label={label}>
        {children}
      </Descriptions.Item>
    </Descriptions>
  );
}
