import { Fragment, useMemo } from "react";
import { useFormik } from "formik";
import { object } from "yup";
import recordToArray from "../util/record";
import TextInput from "../components/forms/TextInput";
import RadioInput from "../components/forms/RadioInput";
import SelectSearchInput from "../components/forms/SelectSearchInput";
import ImageUploadInput from "../components/forms/ImageUploadInput";
import ToggleInput from "../components/forms/ToggleInput";
import {
  FormComponents,
  InitialValues,
  UseFormArgs,
  ValidatorType,
} from "../types/form/useFormType";
import { FormInfo } from "../types/form/formInfos";
import { FormType } from "../types/form/formType";
import {
  DateRangePickerInputProps,
  ImageUploadInputProps,
  NumberInputProps,
  RadioInputProps,
  SelectSearchInputProps,
  TextAreaInputProps,
  TextInputProps,
  ToggleInputProps,
} from "../types/form/inputProps";
import NumberInput from "../components/forms/NumberInput";
import DateRangePickerInput from "../components/forms/DateRangePickerInput";
import TextAreaInput from "../components/forms/TextAreaInput";

export default function useForm<F extends FormInfo>({
  formInfo,
  onSubmit,
}: UseFormArgs<F>) {
  const initialValues = useMemo(
    () =>
      recordToArray(formInfo).reduce(
        (initialBody, [key, { initialValue }]) => ({
          ...initialBody,
          [key]: initialValue,
        }),
        {} as InitialValues<F>
      ),
    []
  );

  const validationSchema = useMemo(
    () =>
      object().shape(
        recordToArray(formInfo).reduce(
          (schemaBody, [key, { validator }]) => ({
            ...schemaBody,
            ...(validator && { [key]: validator }),
          }),
          {} as ValidatorType<F>
        )
      ),
    []
  );

  const formik = useFormik({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: onSubmit || (() => {}),
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
  });

  const Form = useMemo(
    () =>
      recordToArray(formInfo).reduce((forms, form) => {
        const [name, formDetail] = form;
        const keyAndName = name.toString();
        let InputElement;

        switch (formDetail.formType) {
          case FormType.TEXT:
          case FormType.PASSWORD:
            InputElement = ({ onChange, ...props }: TextInputProps) => (
              <TextInput
                keyAndName={keyAndName}
                onChange={(e) => {
                  formik.handleChange(e);
                  onChange?.(e);
                }}
                {...props}
                {...formDetail}
              />
            );
            break;
          case FormType.TEXT_AREA:
            InputElement = ({ onChange, ...props }: TextAreaInputProps) => (
              <TextAreaInput
                keyAndName={keyAndName}
                onChange={(e) => {
                  formik.handleChange(e);
                  onChange?.(e);
                }}
                {...props}
                {...formDetail}
              />
            );
            break;
          case FormType.NUMBER:
            InputElement = ({ onChange, ...props }: NumberInputProps) => (
              <NumberInput
                keyAndName={keyAndName}
                onChange={(e) => {
                  formik.handleChange(e);
                  onChange?.(e);
                }}
                {...props}
                {...formDetail}
              />
            );
            break;
          case FormType.RADIO:
            InputElement = ({ onChange, ...props }: RadioInputProps) => (
              <RadioInput
                keyAndName={keyAndName}
                onChange={(e) => {
                  formik.handleChange(e);
                  onChange?.(e);
                }}
                {...props}
                {...formDetail}
              />
            );
            break;
          case FormType.SELECT_SEARCH:
            InputElement = ({
              onOptionClick,
              ...props
            }: SelectSearchInputProps) => (
              <SelectSearchInput
                keyAndName={keyAndName}
                onOptionClick={(target) => {
                  formik.setFieldValue(`${name}`, target);
                  onOptionClick?.(target);
                }}
                {...props}
                {...formDetail}
              />
            );
            break;
          case FormType.TOGGLE:
            InputElement = ({ onChange, ...props }: ToggleInputProps) => (
              <ToggleInput
                keyAndName={keyAndName}
                initialValue={!!formDetail.initialValue}
                onChange={(toggle) => {
                  formik.setFieldValue(`${name}`, toggle);
                  onChange?.(toggle);
                }}
                {...props}
                {...formDetail}
              />
            );
            break;
          case FormType.IMAGE_UPLOAD:
            InputElement = (props: ImageUploadInputProps) => (
              <ImageUploadInput
                keyAndName={keyAndName}
                {...props}
                {...formDetail}
              />
            );
            break;
          case FormType.DATE_RANGE_PICKER:
            InputElement = ({
              onChange,
              ...props
            }: DateRangePickerInputProps) => (
              <DateRangePickerInput
                keyAndName={keyAndName}
                onChange={(range) => {
                  formik.setFieldValue(`${name}`, range);
                  onChange?.(range);
                }}
                {...props}
                {...formDetail}
              />
            );
            break;
          default:
            InputElement = () => <Fragment key={keyAndName} />;
        }

        return { ...forms, [name]: InputElement };
      }, {}) as FormComponents<F>,
    []
  );

  return {
    formik,
    initialValues,
    Form,
  };
}
