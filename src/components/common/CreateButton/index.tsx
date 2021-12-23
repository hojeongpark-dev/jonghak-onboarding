import { Button } from "antd";
import React from "react";
import { ButtonProps } from "antd/lib/button/button";

interface CreateButtonProps extends ButtonProps {
  label: string;
}

export default function CreateButton({
  label,
  ...rest
}: CreateButtonProps): JSX.Element {
  return (
    <Button {...rest} style={{ marginLeft: "auto" }}>
      {label}
    </Button>
  );
}
