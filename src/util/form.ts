import { FormInfos } from "../types/form/formInfos";

// eslint-disable-next-line import/prefer-default-export
export function removeUnusedProperty(form: FormInfos) {
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
}
