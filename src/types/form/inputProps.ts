import { RadioChangeEvent } from "antd/lib/radio/interface";
import { ChangeEventHandler } from "react";
import { UploadChangeParam } from "antd/es/upload";
import * as moment from "moment";

export interface CustomInputProps {
  keyAndName: string;
}

export type RadioItem = { label: string; key: string };

export type SelectOptionItem = { label: string; value: string };

export type RangeMoment = [moment.Moment, moment.Moment];

export interface TextInputProps {
  value?: string;
  multiple?: boolean;
  allowClear?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface NumberInputProps {
  value?: number;
  min?: number;
  max?: number;
  allowClear?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface TextAreaInputProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export interface RadioInputProps {
  radios: RadioItem[];
  onChange?: (e: RadioChangeEvent) => void;
}

export interface SelectSearchInputProps {
  onSearch: (keyword: string) => void;
  value?: SelectOptionItem;
  onOptionClick?: (target: SelectOptionItem) => void;
  options?: Array<SelectOptionItem>;
}

export interface ImageUploadInputProps {
  srcUrl?: string;
  onChange?: (info: UploadChangeParam) => void;
}

export interface ToggleInputProps {
  value?: boolean;
  onChange?: (toggle: boolean) => void;
}

export interface DateRangePickerInputProps {
  value?: RangeMoment | null;
  onChange?: (range: RangeMoment | null) => void;
  fromNow?: boolean;
  showTime?: boolean;
  showSecond?: boolean;
  timeFormat?: string;
}
