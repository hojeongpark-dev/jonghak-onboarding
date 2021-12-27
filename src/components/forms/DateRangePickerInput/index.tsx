import { DatePicker } from "antd";
import {
  CustomInputProps,
  DateRangePickerInputProps,
  RangeMoment,
} from "../../../types/form/inputProps";
import { DateRangePickerFormInfo } from "../../../types/form/formInfos";
import { removeUnusedProperty } from "../../../util/form";
import { DATE_TIME_PICKER_PLACEHOLDER } from "../../../constants/etc";
import { isBeforeDate } from "../../../util/date";

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

  function disabledDateTime(time: any) {
    console.log(time);
    return {
      disabledHours: () => [1, 2, 3],
      disabledMinutes: () => [1, 2, 3, 4],
      disabledSeconds: () => [55, 56],
    };
  }
  return (
    <DatePicker.RangePicker
      showTime={showTime}
      showSecond={showSecond}
      defaultValue={initialValue}
      disabledDate={fromNow ? isBeforeDate : undefined}
      disabledTime={disabledDateTime}
      onChange={(e) => handleEventPeriodChange(e as RangeMoment)}
      {...removeUnusedProperty(dateRangePickerProps)}
      placeholder={[timeFormat, timeFormat]}
      format={timeFormat}
      style={{ width: "100%" }}
    />
  );
}
