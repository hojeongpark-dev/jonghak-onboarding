import React from "react";
import { AnySchema } from "yup/lib/schema";

export enum FormType {
  RADIO,
  TEXT,
  PASSWORD,
  MULTI_TEXT,
  NUMBER,
  DATE_PICKER,
  TOGGLE,
  DROPDOWN,
  IMAGE,
}

type FormValidatorScheme = {
  initialValue?: unknown;
  validator?: AnySchema;
};

type TextFormInfo = FormValidatorScheme & {
  formType: FormType.TEXT | FormType.PASSWORD;
  placeholder?: string;
  initialValue?: string;
  allowClear?: boolean;
  style?: React.CSSProperties;
};

type RadioFormInfo = FormValidatorScheme & {
  formType: FormType.RADIO;
  defaultKey: string;
  radios: Array<{ label: string; key: string }>;
};

export type FormProperty = TextFormInfo | RadioFormInfo;

export type FormInfo = {
  [K: string]: FormProperty;
};
