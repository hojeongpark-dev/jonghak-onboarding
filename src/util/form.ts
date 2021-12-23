import { FormProperty } from "../types/form";

// eslint-disable-next-line import/prefer-default-export
export function removeUnusedProperty(form: FormProperty) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initialValue, formType, validator,
    ...rest
  } = form;
  return rest;
}
