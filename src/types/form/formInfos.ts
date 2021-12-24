import { AnySchema } from "yup/lib/schema";
import { FormType } from "./formType";
import { RadioItem, SelectOptionItem } from "./inputProps";

export type SharedFormInfo = {
  description?: string;
  initialValue?: unknown;
  validator?: AnySchema;
};

export type TextFormInfo = SharedFormInfo & {
  formType: FormType.TEXT | FormType.PASSWORD;
  placeholder?: string;
  initialValue?: string;
  allowClear?: boolean;
  style?: React.CSSProperties;
};

export type RadioFormInfo = SharedFormInfo & {
  formType: FormType.RADIO;
  initialValue?: RadioItem;
};

export type SelectSearchFormInfo = SharedFormInfo & {
  formType: FormType.SELECT_SEARCH;
  initialValue?: SelectOptionItem;
};

export type ImageFormInfo = SharedFormInfo & {
  formType: FormType.IMAGE_UPLOAD;
  initialValue?: string;
};

export type ToggleFormInfo = SharedFormInfo & {
  formType: FormType.TOGGLE;
  initialValue?: boolean;
};

export type DatePickerFormInfo = SharedFormInfo & {
  formType: FormType.DATE_PICKER;
  // initialValue?: Date;
};

export type FormInfos =
  | TextFormInfo
  | SelectSearchFormInfo
  | RadioFormInfo
  | ImageFormInfo
  | ToggleFormInfo
  | DatePickerFormInfo;

export type FormInfo = {
  [K: string]: FormInfos;
};
