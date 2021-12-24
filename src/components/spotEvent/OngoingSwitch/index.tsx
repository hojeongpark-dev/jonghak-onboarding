import { Popconfirm, Switch } from "antd";
import STRING from "../../../constants/strings";

export default function OngoingSwitch({
  onEventEnd,
  code,
}: {
  code: number;
  onEventEnd: (code: number) => void;
}) {
  return (
    <Popconfirm
      title={"해당 이벤트 전체가 종료됩니다. 정말 종료하시겠어요?"}
      onConfirm={() => onEventEnd(code)}
      okText={STRING.CONFIRM}
      cancelText={STRING.CANCEL}
    >
      <Switch key={code} checked />
    </Popconfirm>
  );
}
