import React from "react";
import { Button } from "antd";
import { useFormik } from "formik";
import { string } from "yup";
import useSignIn from "../../apis/signin";
import Intro from "../../components/Intro";
import CenterLayout from "../../layout/styled/CenterLayout";
import { LoginFormWrapper } from "./style";
import { FormType } from "../../types/form";
import STRING from "../../constants/strings";
import useForm from "../../hooks/useForm";
import { getErrorDescription } from "../../network/error";

export default function Login(): JSX.Element {
  const { signIn, isLoading } = useSignIn();

  const loginForm = useForm({
    id: {
      type: FormType.TEXT,
      placeholder: "Email",
      style: { marginBottom: "0.5rem" },
      validator: string().email("invalid Email"),
    },
    password: {
      type: FormType.PASSWORD,
      placeholder: "Password",
      style: { marginBottom: "0.5rem" },
      validator: string().min(6),
    },
  });

  const initialValues = loginForm.getFormInitialValue();

  const formik = useFormik({
    initialValues,
    validationSchema: loginForm.getFormValidator(),
    onSubmit: async (input: typeof initialValues) => {
      try {
        const res = await signIn({
          variables: {
            input,
          },
        });
        // TODO accessToken
        console.log("res", res.data?.accessToken);
      } catch (e) {
        getErrorDescription(e);
      }
    },
  });

  const Forms = loginForm.formBuilder(formik.handleChange);

  return (
    <CenterLayout>
      <Intro />
      <LoginFormWrapper>
        <Forms />
        <Button
          type="primary"
          disabled={formik.isSubmitting && isLoading}
          onClick={formik.submitForm}
        >
          {STRING.LOGIN}
        </Button>
      </LoginFormWrapper>
    </CenterLayout>
  );
}
