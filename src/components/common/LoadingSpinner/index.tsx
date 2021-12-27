import { Spin } from "antd";
import Flex from "../../layout/styled/Flex";

export default function LoadingSpinner(): JSX.Element {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spin />
    </Flex>
  );
}
