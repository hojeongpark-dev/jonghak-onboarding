import { AnySchema } from "yup/lib/schema";
import React from "react";
import { FormType } from "./formType";
import { RangeMoment, SelectOptionItem } from "./inputProps";

export type SharedFormInfo = {
  description?: string;
  initialValue?: unknown;
  validator?: AnySchema;
};

export type TextFormInfo = {
  formType?: FormType.TEXT | FormType.PASSWORD;
  placeholder?: string;
  initialValue?: string;
  allowClear?: boolean;
  style?: React.CSSProperties;
};

export type TextAreaFormInfo = {
  formType?: FormType.TEXT_AREA;
  placeholder?: string;
  initialValue?: string;
  allowClear?: boolean;
  style?: React.CSSProperties;
};

export type NumberFormInfo = {
  formType?: FormType.NUMBER;
  placeholder?: string;
  initialValue?: number;
  style?: React.CSSProperties;
};

export type RadioFormInfo = {
  formType?: FormType.RADIO;
  initialValue?: string;
};

export type SelectSearchFormInfo = {
  formType?: FormType.SELECT_SEARCH;
  initialValue?: SelectOptionItem;
};

export type ImageFormInfo = {
  formType?: FormType.IMAGE_UPLOAD;
  initialValue?: string;
};

export type ToggleFormInfo = {
  formType?: FormType.TOGGLE;
  initialValue?: boolean;
};

export type DateRangePickerFormInfo = {
  formType?: FormType.DATE_RANGE_PICKER;
  initialValue?: null | RangeMoment;
};

export type FormInfos = SharedFormInfo &
  (
    | TextFormInfo
    | TextAreaFormInfo
    | NumberFormInfo
    | SelectSearchFormInfo
    | RadioFormInfo
    | ImageFormInfo
    | ToggleFormInfo
    | DateRangePickerFormInfo
  );

export type FormInfo = {
  [K: string]: FormInfos;
};
