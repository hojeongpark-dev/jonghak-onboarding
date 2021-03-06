import { DatePicker } from "antd";
// @ts-ignore
import { DisabledTimes, EventValue } from "rc-picker/lib/interface";
import moment from "moment-es6";
import {
  CustomInputProps,
  DateRangePickerInputProps,
  RangeMoment,
} from "../../../types/form/inputProps";
import { DateRangePickerFormInfo } from "../../../types/form/formInfos";
import { removeUnusedProperty } from "../../../util/form";
import { DATE_TIME_PICKER_PLACEHOLDER } from "../../../constants/etc";
import { isBeforeDate } from "../../../util/date";

function disabledDateTime(date: EventValue<moment.Moment>): DisabledTimes {
  if (date && date.isSameOrBefore()) {
    const current = new Date();
    return {
      disabledHours: () => [...Array(current.getHours()).keys()],
      disabledMinutes: () => [...Array(current.getMinutes()).keys()],
    };
  }
  return {};
}

export default function DateRangePickerInput({
  onChange,
  fromNow = true,
  showTime = true,
  showSecond = false,
  initialValue,
  timeFormat = DATE_TIME_PICKER_PLACEHOLDER,
  ...dateRangePickerProps
}: DateRangePickerInputProps &
  CustomInputProps &
  DateRangePickerFormInfo): JSX.Element {
  const handleEventPeriodChange = (range: RangeMoment | null) => {
    onChange?.(range);
  };

  return (
    <DatePicker.RangePicker
      showTime={showTime}
      showSecond={showSecond}
      defaultValue={initialValue}
      disabledDate={fromNow ? isBeforeDate : undefined}
      disabledTime={fromNow ? disabledDateTime : undefined}
      onChange={(e) => handleEventPeriodChange(e as RangeMoment)}
      {...removeUnusedProperty(dateRangePickerProps)}
      placeholder={[timeFormat, timeFormat]}
      format={timeFormat}
      style={{ width: "100%" }}
    />
  );
}
