import { Button } from "antd";
import { ButtonProps } from "antd/lib/button/button";
import { MouseEventHandler } from "react";

type VoidFunction = () => void;
interface RightButtonProps extends ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLElement> | VoidFunction;
}

export default function RightButton({
  label,
  onClick,
  ...rest
}: RightButtonProps): JSX.Element {
  return (
    <Button
      onClick={onClick}
      type={"primary"}
      {...rest}
      style={{ marginLeft: "auto" }}
    >
      {label}
    </Button>
  );
}
