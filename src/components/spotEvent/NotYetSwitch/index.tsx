import { Popover, Switch } from "antd";

// src/page 디렉토리 내부에도 components/ 디렉토리가 있어서 도메인과 관련된 components들은 page 에서 관리하면 될 거 같은데
// src/components 에는 도메인과 관련있는 컴포넌트를 여기에도 만드신 이유?
export default function NotYetSwitch(): JSX.Element {
  return (
    <Popover content={"이벤트 기간에 맞춰 자동으로 활성화됩니다."}>
      <Switch checked={false} />
    </Popover>
  );
}
