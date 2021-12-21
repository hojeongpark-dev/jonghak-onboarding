// import { Input } from "antd";
// import { ChangeEventHandler, useCallback } from "react";
// import { FormInfo, FormType } from "../types/form";
//
// export default function formBuilder(
//   formInfo: FormInfo,
//   formikChangeEvent?: ChangeEventHandler
// ) {
//   return useCallback(
//     () => (
//       <>
//         {Object.keys(formInfo).map((key) => {
//           const { type, ...rest } = formInfo[key];
//           switch (type) {
//             case FormType.PASSWORD:
//               return (
//                 <Input
//                   allowClear
//                   type="password"
//                   {...rest}
//                   onChange={formikChangeEvent}
//                 />
//               );
//             case FormType.TEXT:
//               return (
//                 <Input allowClear {...rest} onChange={formikChangeEvent} />
//               );
//             case FormType.RADIO:
//             default:
//               return null;
//           }
//         })}
//       </>
//     ),
//     [formInfo]
//   );
// }
