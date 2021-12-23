import { Input } from "antd";
import React from "react";
import {
  CustomInputProps, FormType, TextFormInfo, TextInputProps
} from "../../../types/form";
import { removeUnusedProperty } from "../../../util/form";

export default function TextInput({
  keyAndName,
  initialValue,
  handleChange,
  ...inputFormProps
}: TextInputProps & TextFormInfo & CustomInputProps): JSX.Element {
  return (
    <Input
      key={keyAndName}
      name={keyAndName}
      type={inputFormProps.formType === FormType.PASSWORD ? "password" : "text"}
      allowClear
      defaultValue={initialValue}
      onChange={handleChange}
      {...removeUnusedProperty(inputFormProps)}
    />
  );
}
