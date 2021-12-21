// import { FormInfo, FormType } from "../types/form";
//
// export type InitialValue<Form extends FormInfo> = {
//   [Name in keyof Form]: Form[Name]["initialValue"];
// };
//
// export default function formInitialValue<F extends FormInfo>(
//   formInfo: F
// ): InitialValue<F> {
//   return Object.keys(formInfo).reduce((initialValue, key) => {
//     const form = formInfo[key];
//     let initial = null;
//     switch (form.type) {
//       case FormType.TEXT:
//         initial = form.defaultValue;
//         break;
//       default:
//     }
//     return { ...initialValue, [key]: initial };
//   }, {}) as InitialValue<F>;
// }
