import { object } from "yup";
import { ChangeEventHandler, useCallback } from "react";
import { Input } from "antd";
import { AnySchema } from "yup/lib/schema";
import Reference from "yup/lib/Reference";
import { FormInfo, FormType } from "../types/form";

export type InitialValue<Form extends FormInfo> = {
  [Name in keyof Form]: Form[Name]["initialValue"];
};

export type ValidatorType = {
  [key: string]: AnySchema | Reference;
};

export default function useForm<F extends FormInfo>(formInfo: F) {
  const getFormInitialValue = () => Object.keys(formInfo).reduce(
    (initialValue, key) => ({
      ...initialValue,
      [key]: formInfo[key].initialValue || null,
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
    // eslint-disable-next-line react/display-name
    () => (
        <>
          {Object.keys(formInfo).map((key) => {
            const { type, ...rest } = formInfo[key];
            switch (type) {
              case FormType.PASSWORD:
                return (
                  <Input
                    key={key}
                    name={key}
                    allowClear
                    type="password"
                    onChange={formikChangeEvent}
                    {...rest}
                  />
                );
              case FormType.TEXT:
                return (
                  <Input
                    key={key}
                    name={key}
                    allowClear
                    onChange={formikChangeEvent}
                    {...rest}
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
