import React, { ChangeEvent, ChangeEventHandler } from "react";
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
  initialValue?: string;
  validator?: AnySchema;
};

type TextFormInfo = {
  type: FormType.TEXT | FormType.PASSWORD;
  placeholder?: string;
  defaultValue?: string;
  allowClear?: boolean;
  style?: React.CSSProperties;
  // onChange?: ChangeEventHandler<HTMLInputElement>;
};

type RadioFormInfo = {
  type: FormType.RADIO;
  defaultKey: string;
  radios: Array<{ label: string; key: string }>;
  onChange?: (e: React.ChangeEvent) => void;
};

export type FormInfo = {
  [K: string]: FormValidatorScheme & (TextFormInfo | RadioFormInfo);
};
