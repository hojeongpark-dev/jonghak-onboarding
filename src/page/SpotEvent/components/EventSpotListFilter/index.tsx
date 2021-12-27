import { DatePicker, Radio, RadioChangeEvent } from "antd";
import Flex from "../../../../components/layout/styled/Flex";
import DescriptionRow from "../../../../components/forms/DescriptionRow";
import recordToArray from "../../../../util/record";
import {
  EVENT_STATUS_TO_KO,
  EVENT_TYPE_TO_KO,
} from "../../../../constants/enumToString";
import RadioButtonGroup from "../../../../components/common/RadioButtonGroup";
import {
  PeriodArgs,
  SpotEventStatusType,
  SpotEventType,
} from "../../../../graphql-types";
import STRING from "../../../../constants/strings";
import { RangeMoment } from "../../../../types/form/inputProps";
import { DATE_PICKER_PLACEHOLDER } from "../../../../constants/etc";
import { dateTimeFormat } from "../../../../util/date";

interface EventSpotListFilterProps {
  onStatusChange: (status: SpotEventStatusType) => void;
  onTypeChange: (type: SpotEventType) => void;
  onPeriodChange: (period: PeriodArgs | null) => void;
}

export default function EventSpotListFilter({
  onPeriodChange,
  onTypeChange,
  onStatusChange,
}: EventSpotListFilterProps): JSX.Element {
  const handleEventStatusChange = ({ target: { value } }: RadioChangeEvent) => {
    onStatusChange(value);
  };

  const handleEventTypeChange = ({ target: { value } }: RadioChangeEvent) => {
    onTypeChange(value);
  };

  const handleEventPeriodChange = (range: RangeMoment | null) => {
    let period = null;
    if (range) {
      const [from, to] = range;
      period = {
        start: dateTimeFormat(from, "start"),
        end: dateTimeFormat(to, "end"),
      };
    }
    onPeriodChange(period);
  };

  return (
    <Flex flexDirection={"column"} pt={20} pl={1}>
      <DescriptionRow bordered={false} label={STRING.EVENT_TYPE}>
        <RadioButtonGroup onChange={handleEventTypeChange}>
          {recordToArray(EVENT_TYPE_TO_KO).map(([type, label]) => (
            <Radio.Button key={type} value={type}>
              {label}
            </Radio.Button>
          ))}
        </RadioButtonGroup>
      </DescriptionRow>
      <DescriptionRow bordered={false} label={STRING.EVNET_PERIOD}>
        <DatePicker.RangePicker
          placeholder={[DATE_PICKER_PLACEHOLDER, DATE_PICKER_PLACEHOLDER]}
          onChange={(e) => handleEventPeriodChange(e as RangeMoment)}
        />
        <Flex pl={10} />
        <RadioButtonGroup onChange={handleEventStatusChange}>
          {recordToArray(EVENT_STATUS_TO_KO).map(([type, label]) => (
            <Radio.Button key={type} value={type}>
              {label}
            </Radio.Button>
          ))}
        </RadioButtonGroup>
      </DescriptionRow>
    </Flex>
  );
}
