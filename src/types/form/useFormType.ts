import { AnySchema } from "yup/lib/schema";
import Reference from "yup/lib/Reference";
import {
  DateRangePickerInputProps,
  ImageUploadInputProps,
  NumberInputProps,
  RadioInputProps,
  RadioItem,
  RangeMoment,
  SelectOptionItem,
  SelectSearchInputProps,
  TextInputProps,
  ToggleInputProps,
} from "./inputProps";
import { FormInfo } from "./formInfos";
import { FormType } from "./formType";
import { Nullable } from "../null";

type TextComponent = (props: TextInputProps) => JSX.Element;
type RadioComponent = (props: RadioInputProps) => JSX.Element;
type ImageUploadComponent = (props: ImageUploadInputProps) => JSX.Element;
type ToggleComponent = (props: ToggleInputProps) => JSX.Element;
type NumberComponent = (props: NumberInputProps) => JSX.Element;
type SelectSearchComponent = (props: SelectSearchInputProps) => JSX.Element;
type DateRangePickerComponent = (
  props: DateRangePickerInputProps
) => JSX.Element;

type GetFormType<
  Form extends FormInfo,
  Key extends keyof Form
> = Form[Key]["formType"];

type GetInitialValue<
  Form extends FormInfo,
  Key extends keyof Form
> = Form[Key]["initialValue"];

export type FormComponents<F extends FormInfo> = {
  [K in keyof F]: GetFormType<F, K> extends FormType.RADIO
    ? RadioComponent
    : GetFormType<F, K> extends FormType.SELECT_SEARCH
    ? SelectSearchComponent
    : GetFormType<F, K> extends FormType.IMAGE_UPLOAD
    ? ImageUploadComponent
    : GetFormType<F, K> extends FormType.TOGGLE
    ? ToggleComponent
    : GetFormType<F, K> extends FormType.NUMBER
    ? NumberComponent
    : GetFormType<F, K> extends FormType.DATE_RANGE_PICKER
    ? DateRangePickerComponent
    : TextComponent;
};

export type ValidatorType<F extends FormInfo> = {
  [K in keyof F]: AnySchema | Reference;
};

export type InitialValues<F extends FormInfo> = {
  [K in keyof F]: GetInitialValue<F, K> &
    (GetFormType<F, K> extends FormType.RADIO
      ? RadioItem
      : GetFormType<F, K> extends FormType.SELECT_SEARCH
      ? SelectOptionItem
      : GetFormType<F, K> extends FormType.IMAGE_UPLOAD
      ? string
      : GetFormType<F, K> extends FormType.TOGGLE
      ? boolean
      : GetFormType<F, K> extends FormType.NUMBER
      ? number
      : GetFormType<F, K> extends FormType.DATE_RANGE_PICKER
      ? Nullable<RangeMoment>
      : string);
};

export interface UseFormArgs<F extends FormInfo> {
  formInfo: F;
  onSubmit?: (value: InitialValues<F>) => void;
}
