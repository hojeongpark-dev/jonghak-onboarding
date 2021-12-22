import { Content } from "antd/es/layout/layout";
import { PropsWithChildren } from "react";
import { CustomContentLayout } from "./style";

export default function CustomContent({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  return (
    <Content>
      <CustomContentLayout>{children}</CustomContentLayout>
    </Content>
  );
}
