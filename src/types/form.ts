import React, { ChangeEventHandler } from "react";
import { AnySchema } from "yup/lib/schema";
import { RadioChangeEvent } from "antd/lib/radio/interface";
import { UploadChangeParam } from "antd/lib/upload/interface";

export enum FormType {
  RADIO,
  TEXT,
  PASSWORD,
  MULTI_TEXT,
  NUMBER,
  DATE_PICKER,
  TOGGLE,
  SELECT_SEARCH,
  IMAGE_UPLOAD,
}

export interface CustomInputProps {
  keyAndName: string;
}

export type FormSharedInfo = {
  description?: string;
  initialValue?: unknown;
  validator?: AnySchema;
};

export type TextFormInfo = FormSharedInfo & {
  formType: FormType.TEXT | FormType.PASSWORD;
  placeholder?: string;
  initialValue?: string;
  allowClear?: boolean;
  style?: React.CSSProperties;
};
export interface TextInputProps {
  handleChange?: ChangeEventHandler<HTMLInputElement>;
}

export type RadioItem = { label: string; key: string };
export type RadioFormInfo = FormSharedInfo & {
  formType: FormType.RADIO;
};
export interface RadioInputProps {
  handleChange?: (e: RadioChangeEvent) => void;
  radios: RadioItem[];
}

export type SelectOptionItem = { label: string; value: string };
export type SelectSearchFormInfo = FormSharedInfo & {
  formType: FormType.SELECT_SEARCH;
};
export interface SelectSearchInputProps {
  onOptionClick: (target: SelectOptionItem) => void;
  onSearch: (keyword:string) => void;
  options?: Array<SelectOptionItem>;
}

export type ImageFormInfo = FormSharedInfo & {
  formType: FormType.IMAGE_UPLOAD;
};
export interface ImageUploadInputProps {
  onChange?: (info: UploadChangeParam) => void;
}

export type FormProperty =
  | TextFormInfo
  | RadioFormInfo
  | ImageFormInfo
  | SelectSearchFormInfo;

export type FormInfo = {
  [K: string]: FormProperty;
};
