import { Button } from "antd";
import React from "react";
import STRING from "../../../constants/strings";

interface Props {
  onClick: () => void;
}

export default function NewTipButton(props: Props): JSX.Element {
  const { onClick } = props;
  return (
    <Button style={{ marginLeft: "auto" }} onClick={onClick}>
      {STRING.NEW_TIP}
    </Button>
  );
}
