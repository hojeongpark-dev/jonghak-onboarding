import { RadioChangeEvent } from "antd/lib/radio/interface";
import { ChangeEventHandler } from "react";
import { UploadChangeParam } from "antd/es/upload";

export interface CustomInputProps {
  keyAndName: string;
}

export type RadioItem = { label: string; key: string };

export type SelectOptionItem = { label: string; value: string };

export interface TextInputProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface NumberInputProps {
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
