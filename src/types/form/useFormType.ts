import { AnySchema } from "yup/lib/schema";
import Reference from "yup/lib/Reference";
import {
  ImageUploadInputProps,
  NumberInputProps,
  RadioInputProps,
  SelectSearchInputProps,
  TextInputProps,
  ToggleInputProps,
} from "./inputProps";
import { FormInfo } from "./formInfos";
import { FormType } from "./formType";

type TextComponent = (props: TextInputProps) => JSX.Element;
type RadioComponent = (props: RadioInputProps) => JSX.Element;
type ImageUploadComponent = (props: ImageUploadInputProps) => JSX.Element;
type ToggleComponent = (props: ToggleInputProps) => JSX.Element;
type NumberComponent = (props: NumberInputProps) => JSX.Element;
type SelectSearchComponent = (props: SelectSearchInputProps) => JSX.Element;

export type FormComponents<Form extends FormInfo> = {
  [Name in keyof Form]: Form[Name]["formType"] extends FormType.RADIO
    ? RadioComponent
    : Form[Name]["formType"] extends FormType.SELECT_SEARCH
    ? SelectSearchComponent
    : Form[Name]["formType"] extends FormType.IMAGE_UPLOAD
    ? ImageUploadComponent
    : Form[Name]["formType"] extends FormType.TOGGLE
    ? ToggleComponent
    : Form[Name]["formType"] extends FormType.NUMBER
    ? NumberComponent
    : TextComponent;
};

export type ValidatorType = {
  [key: string]: AnySchema | Reference;
};

export type InitialValue<Form extends FormInfo> = {
  [Name in keyof Form]: Form[Name]["initialValue"];
};

export interface UseFormArgs<F extends FormInfo> {
  formInfo: F;
  onSubmit?: (value: InitialValue<F>) => void;
}
