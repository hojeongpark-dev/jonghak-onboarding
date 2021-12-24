import { Radio } from "antd";
import { ModalProps } from "../../../../types/modal";
import CustomModal from "../../../../components/common/CustomModal";
import STRING from "../../../../constants/strings";
import RadioButtonGroup from "../../../../components/common/RadioButtonGroup";
import recordToArray from "../../../../util/record";
import { EVENT_TYPE_TO_KO } from "../../../../constants/enumToString";
import DescriptionRow from "../../../../components/forms/DescriptionRow";

export default function NewEventModal({
  onClose,
  isVisible,
}: ModalProps): JSX.Element {
  const handleTypeChange = (e: any) => {
    console.log(e);
  };
  return (
    <CustomModal
      title={"이벤트 생성하기"}
      okText={STRING.CREATE}
      visible={isVisible}
      onCancel={onClose}
    >
      <DescriptionRow label={`${STRING.EVNET_TYPE}*`}>
        <RadioButtonGroup
          addAll={false}
          onChange={handleTypeChange}
          defaultValue={"DISCOUNT"}
        >
          {recordToArray(EVENT_TYPE_TO_KO).map(([type, label], index) => (
            <Radio.Button key={type} value={type}>
              {label}
            </Radio.Button>
          ))}
        </RadioButtonGroup>
      </DescriptionRow>
    </CustomModal>
  );
}
