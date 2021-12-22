import { object } from "yup";
import { ChangeEventHandler, useCallback } from "react";
import { Input } from "antd";
import { AnySchema } from "yup/lib/schema";
import Reference from "yup/lib/Reference";
import { FormInfo, FormProperty, FormType } from "../types/form";

export type InitialValue<Form extends FormInfo> = {
  [Name in keyof Form]: Form[Name]["initialValue"];
};

export type ValidatorType = {
  [key: string]: AnySchema | Reference;
};

function removeUnusedProperty(form: FormProperty) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initialValue, formType, validator, ...rest
  } = form;
  return rest;
}

export default function useForm<F extends FormInfo>(formInfo: F) {
  const getFormInitialValue = () => Object.keys(formInfo).reduce(
    (initialValue, key) => ({
      ...initialValue,
      [key]: formInfo[key].initialValue || "",
    }),
    {}
  ) as InitialValue<F>;

  const getFormValidator = () => {
    const schemaBody: ValidatorType = {};
    Object.keys(formInfo).forEach((key) => {
      const { validator } = formInfo[key];
      if (validator) {
        schemaBody[key] = validator;
      }
    });
    const isEmpty = Object.keys(schemaBody).length === 0;
    return isEmpty ? undefined : object().shape(schemaBody);
  };

  const formBuilder = (formikChangeEvent?: ChangeEventHandler) => useCallback(
    () => (
        <>
          {Object.keys(formInfo).map((name) => {
            const form = formInfo[name];
            switch (form.formType) {
              case FormType.PASSWORD:
                return (
                  <Input
                    key={name}
                    name={name}
                    allowClear
                    type="password"
                    defaultValue={form.initialValue}
                    onChange={formikChangeEvent}
                    {...removeUnusedProperty(form)}
                  />
                );
              case FormType.TEXT:
                return (
                  <Input
                    key={name}
                    name={name}
                    allowClear
                    defaultValue={form.initialValue}
                    onChange={formikChangeEvent}
                    {...removeUnusedProperty(form)}
                  />
                );
              case FormType.RADIO:
              default:
                return null;
            }
          })}
        </>
    ),
    []
  );

  return { getFormInitialValue, getFormValidator, formBuilder };
}
