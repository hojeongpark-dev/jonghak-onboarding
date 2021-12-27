import { Descriptions } from "antd";
import { CSSProperties, PropsWithChildren } from "react";

interface DescriptionRowProps {
  label: string;
  bordered?: boolean;
  labelStyle?: CSSProperties;
  contentStyle?: CSSProperties;
}

export default function DescriptionRow({
  label,
  children,
  bordered = true,
  labelStyle = { minWidth: 100, width: 100 },
  contentStyle,
}: PropsWithChildren<DescriptionRowProps>): JSX.Element {
  const borderContainer = bordered ? { background: "white" } : undefined;
  return (
    <Descriptions
      bordered={bordered}
      contentStyle={{ padding: bordered ? "10px" : "0", ...contentStyle }}
    >
      <Descriptions.Item
        labelStyle={{ padding: bordered ? "10px" : "0", ...labelStyle }}
        contentStyle={borderContainer}
        label={label}
      >
        {children}
      </Descriptions.Item>
    </Descriptions>
  );
}
