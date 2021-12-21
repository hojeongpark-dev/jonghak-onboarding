// import { AnySchema } from "yup/lib/schema";
// import Reference from "yup/lib/Reference";
// import { object } from "yup";
// import { ChangeEventHandler } from "react";
// import { Input } from "antd";
// import { FormInfo, FormType } from "../types/form";
//
// export type InitialValue<Form extends FormInfo> = {
//   [Name in keyof Form]: Form[Name]["initialValue"];
// };
//
// export type ValidatorType = {
//   [key: string]: AnySchema | Reference;
// };
//
// class FormClass<F extends FormInfo> {
//   private readonly formInfo: F;
//
//   constructor(formInfo: F) {
//     this.formInfo = formInfo;
//   }
//
//   getFormInitialValue() {
//     return Object.keys(this.formInfo).reduce((initialValue, key) => {
//       const form = this.formInfo[key];
//       return { ...initialValue, [key]: form.initialValue || null };
//     }, {}) as InitialValue<F>;
//   }
//
//   getFormValidator() {
//     const schemaBody: ValidatorType = {};
//     Object.keys(this.formInfo).forEach((key) => {
//       const { validator } = this.formInfo[key];
//       if (validator) {
//         schemaBody[key] = validator;
//       }
//     });
//     const isEmpty = Object.keys(schemaBody).length === 0;
//     return isEmpty ? undefined : object().shape(schemaBody);
//   }
//
//   formBuilder(formikChangeEvent?: ChangeEventHandler) {
//     // eslint-disable-next-line react/display-name
//     return () => (
//       <>
//         {Object.keys(this.formInfo).map((key) => {
//           const { type, ...rest } = this.formInfo[key];
//           switch (type) {
//             case FormType.PASSWORD:
//               return (
//                 <Input
//                   key={key}
//                   name={key}
//                   allowClear
//                   type="password"
//                   onChange={formikChangeEvent}
//                   {...rest}
//                 />
//               );
//             case FormType.TEXT:
//               return (
//                 <Input
//                   key={key}
//                   name={key}
//                   allowClear
//                   onChange={formikChangeEvent}
//                   {...rest}
//                 />
//               );
//             case FormType.RADIO:
//             default:
//               return null;
//           }
//         })}
//       </>
//     );
//   }
// }
//
// export default FormClass;
