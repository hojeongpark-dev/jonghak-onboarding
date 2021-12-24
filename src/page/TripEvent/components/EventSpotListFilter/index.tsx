import { DatePicker, Radio, RadioChangeEvent } from "antd";
import moment from "moment-es6";
import Flex from "../../../../components/layout/styled/Flex";
import DescriptionRow from "../../../../components/forms/DescriptionRow";
import recordToArray from "../../../../util/record";
import {
  EVENT_STATUS_TO_KO,
  EVENT_TYPE_TO_KO,
} from "../../../../constants/enumToString";
import RadioButtonGroup from "../../../../components/common/RadioButtonGroup";
import { SpotEventStatusType, SpotEventType } from "../../../../graphql-types";
import STRING from "../../../../constants/strings";

type RangeMoment = [moment.Moment, moment.Moment];

const DATE_PICKER_PLACEHOLDER = "YYYY-MM-DD";

interface EventSpotListFilterProps {
  onStatusChange: (status: SpotEventStatusType) => void;
  onTypeChange: (type: SpotEventType) => void;
  onPeriodChange: (period: { start: string; end: string } | null) => void;
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
      const start = range[0].format("yyyy-MM-DDT00:00");
      const end = range[1].format("yyyy-MM-DDT00:00");
      period = { start, end };
    }
    onPeriodChange(period);
  };

  return (
    <Flex flexDirection={"column"} pt={20} pl={1}>
      <DescriptionRow label={STRING.EVNET_TYPE}>
        <RadioButtonGroup onChange={handleEventTypeChange}>
          {recordToArray(EVENT_TYPE_TO_KO).map(([type, label]) => (
            <Radio.Button key={type} value={type}>
              {label}
            </Radio.Button>
          ))}
        </RadioButtonGroup>
      </DescriptionRow>
      <DescriptionRow label={STRING.EVNET_PERIOD}>
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
