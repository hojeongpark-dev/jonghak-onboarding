import { Popover, Switch } from "antd";

export default function NotYetSwitch(): JSX.Element {
  return (
    <Popover content={"이벤트 기간에 맞춰 자동으로 활성화됩니다."}>
      <Switch checked={false} />
    </Popover>
  );
}
