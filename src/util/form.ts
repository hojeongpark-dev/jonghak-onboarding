import { FormInfos } from "../types/form/formInfos";

// eslint-disable-next-line import/prefer-default-export
export const removeUnusedProperty = (
  form: FormInfos
): Omit<FormInfos, "initialValue" | "formType" | "validator"> => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initialValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formType,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validator,
    ...rest
  } = form;
  return rest;
};
