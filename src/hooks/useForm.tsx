import { object } from "yup";
import React, { useMemo } from "react";
import { AnySchema } from "yup/lib/schema";
import Reference from "yup/lib/Reference";
import { useFormik } from "formik";
import {
  FormInfo,
  FormType,
  ImageUploadInputProps,
  RadioInputProps,
  RadioItem,
  SelectOptionItem,
  SelectSearchInputProps,
} from "../types/form";
import recordToArray from "../util/record";
import TextInput from "../components/forms/TextInput";
import RadioInput from "../components/forms/RadioInput";
import SelectSearchInput from "../components/forms/SelectSearchInput";
import ImageUploadInput from "../components/forms/ImageUploadInput";

type TextComponent = () => JSX.Element;
type RadioComponent = (props: RadioInputProps) => JSX.Element;
type SelectSearchComponent = (
  props: Omit<SelectSearchInputProps, "handleChange">
) => JSX.Element;
type ImageUploadComponent = (props: ImageUploadInputProps) => JSX.Element;

export type FormComponents<Form extends FormInfo> = {
  [Name in keyof Form]: Form[Name]["formType"] extends FormType.RADIO
    ? RadioComponent
    : Form[Name]["formType"] extends FormType.SELECT_SEARCH
    ? SelectSearchComponent
    : Form[Name]["formType"] extends FormType.IMAGE_UPLOAD
    ? ImageUploadComponent
    : TextComponent;
};

export type ValidatorType = {
  [key: string]: AnySchema | Reference;
};

export type InitialValue<Form extends FormInfo> = {
  [Name in keyof Form]: Form[Name]["initialValue"];
};

interface UseFormArgs<F extends FormInfo> {
  formInfo: F;
  onSubmit: (value: InitialValue<F>) => void;
}

export default function useForm<F extends FormInfo>({
  formInfo,
  onSubmit,
}: UseFormArgs<F>) {
  const initialValues = useMemo(
    () => Object.keys(formInfo).reduce(
      (initialValue, key) => ({
        ...initialValue,
        [key]: formInfo[key].initialValue || "",
      }),
      {}
    ) as InitialValue<F>,
    [formInfo]
  );

  const validationSchema = useMemo(() => {
    const schemaBody: ValidatorType = {};
    Object.keys(formInfo).forEach((key) => {
      const { validator } = formInfo[key];
      if (validator) {
        schemaBody[key] = validator;
      }
    });
    const isEmpty = Object.keys(schemaBody).length === 0;
    return isEmpty ? undefined : object().shape(schemaBody);
  }, [formInfo]);

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
  });

  const Form = useMemo(
    () => recordToArray(formInfo).reduce((forms, form) => {
      const [name, formDetail] = form;
      const keyAndName = name.toString();
      let InputElement;

      switch (formDetail.formType) {
        case FormType.TEXT:
        case FormType.PASSWORD:
          InputElement = () => (
              <TextInput
                keyAndName={keyAndName}
                handleChange={formik.handleChange}
                {...formDetail}
              />
          );
          break;
        case FormType.RADIO:
          InputElement = ({ radios, handleChange }: RadioInputProps) => (
              <RadioInput
                handleChange={(e) => {
                  formik.handleChange(e);
                  if (handleChange) handleChange(e);
                }}
                radios={radios}
                keyAndName={keyAndName}
                {...formDetail}
              />
          );
          break;
        case FormType.SELECT_SEARCH:
          InputElement = ({
            options,
            onSearch,
            onOptionClick,
          }: SelectSearchInputProps) => (
              <SelectSearchInput
                keyAndName={keyAndName}
                onOptionClick={onOptionClick}
                onSearch={onSearch}
                options={options}
                {...formDetail}
              />
          );
          break;
        case FormType.IMAGE_UPLOAD:
          InputElement = ({ onChange }: ImageUploadInputProps) => (
              <ImageUploadInput
                keyAndName={keyAndName}
                onChange={onChange}
                {...formDetail}
              />
          );
          break;
        default:
          InputElement = () => <React.Fragment key={keyAndName} />;
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
