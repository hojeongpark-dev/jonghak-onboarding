import { object } from "yup";
import { Fragment, useMemo } from "react";
import { useFormik } from "formik";
import recordToArray from "../util/record";
import TextInput from "../components/forms/TextInput";
import RadioInput from "../components/forms/RadioInput";
import SelectSearchInput from "../components/forms/SelectSearchInput";
import ImageUploadInput from "../components/forms/ImageUploadInput";
import ToggleInput from "../components/forms/ToggleInput";
import {
  FormComponents,
  InitialValue,
  UseFormArgs,
  ValidatorType,
} from "../types/form/useFormType";
import { FormInfo } from "../types/form/formInfos";
import { FormType } from "../types/form/formType";
import {
  ImageUploadInputProps,
  NumberInputProps,
  RadioInputProps,
  SelectSearchInputProps,
  TextInputProps,
  ToggleInputProps,
} from "../types/form/inputProps";
import NumberInput from "../components/forms/NumberInput";

export default function useForm<F extends FormInfo>({
  formInfo,
  onSubmit,
}: UseFormArgs<F>) {
  const initialValues = useMemo(
    () =>
      Object.keys(formInfo).reduce(
        (initials, key) => ({
          ...initials,
          [key]: formInfo[key].initialValue ?? "",
        }),
        {}
      ) as InitialValue<F>,
    []
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
  }, []);

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
          // case FormType.MULTILINE_TEXT:
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
                onOptionClick={(target) => {
                  formik.setFieldValue(`${name}`, target);
                  onOptionClick?.(target);
                }}
                keyAndName={keyAndName}
                {...props}
                {...formDetail}
              />
            );
            break;
          case FormType.TOGGLE:
            InputElement = ({ onChange, ...props }: ToggleInputProps) => (
              <ToggleInput
                keyAndName={keyAndName}
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
