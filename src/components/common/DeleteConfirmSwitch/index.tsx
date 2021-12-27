import { Popconfirm, Switch } from "antd";
import STRING from "../../../constants/strings";

interface DeleteConfirmSwitchProps {
  onCheck?: () => void;
  onDelete?: () => void;
  disabled?: boolean;
  loading?: boolean;
  checked?: boolean;
}

export default function DeleteConfirmSwitch({
  onDelete,
  onCheck,
  disabled,
  loading,
  checked,
}: DeleteConfirmSwitchProps) {
  const handleChange = (checked: boolean) => {
    if (checked) onCheck?.();
  };
  return (
    <Popconfirm
      disabled={disabled || !checked}
      title={STRING.DELETE_CONFIRM}
      okText={STRING.CONFIRM}
      cancelText={STRING.CANCEL}
      onConfirm={onDelete}
    >
      <Switch checked={checked} loading={loading} onChange={handleChange} />
    </Popconfirm>
  );
}
