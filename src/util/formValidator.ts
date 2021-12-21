// import { object } from "yup";
// import { AnySchema } from "yup/lib/schema";
// import Reference from "yup/lib/Reference";
// import { FormInfo } from "../types/form";
//
// export default function formValidator(formInfo: FormInfo) {
//   const schemaBody: Record<keyof typeof formInfo, AnySchema | Reference> = {};
//   Object.keys(formInfo).forEach((key) => {
//     const { validator } = formInfo[key];
//     if (validator) {
//       schemaBody[key] = validator;
//     }
//   });
//   const isEmpty = Object.keys(schemaBody).length === 0;
//   return isEmpty ? undefined : object().shape(schemaBody);
// }
