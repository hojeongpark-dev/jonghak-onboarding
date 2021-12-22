import React, { useEffect } from "react";
import { Button } from "antd";
import { useFormik } from "formik";
import { string } from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Intro from "../../components/Intro";
import CenterLayout from "../../components/layout/styled/CenterLayout";
import { LoginFormWrapper } from "./style";
import { FormType } from "../../types/form";
import STRING from "../../constants/strings";
import useForm from "../../hooks/useForm";
import { getErrorDescription } from "../../network/error";
import useMyInfo from "../../apis/myInfo";
import useSignIn from "../../apis/signIn";
import { useAppDispatch } from "../../redux/store";
import { authActions } from "../../redux/slice/auth";
import { URLS } from "../../constants/urls";

export default function Login(): JSX.Element {
  const { updateUserInfo } = useMyInfo();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { signIn, loading } = useSignIn();

  const loginForm = useForm({
    id: {
      formType: FormType.TEXT,
      initialValue: STRING.EMPTY,
      placeholder: STRING.ID_PLACEHOLDER,
      style: { marginBottom: "0.5rem" },
      validator: string().email(),
    },
    password: {
      formType: FormType.PASSWORD,
      initialValue: STRING.EMPTY,
      placeholder: STRING.PASSWORD_PLACEHOLDER,
      style: { marginBottom: "0.5rem" },
      validator: string().min(6),
    },
  });

  const initialValues = loginForm.getFormInitialValue();
  const validationSchema = loginForm.getFormValidator();

  const setUserInfo = async () => {
    const user = await updateUserInfo();
    dispatch(authActions.setUser(user));
  };

  const requestSignIn = async ({ id, password }: typeof initialValues) => {
    try {
      const res = await signIn({
        id,
        password,
      });
      if (res?.signIn.accessToken) await setUserInfo();
      navigate(URLS.HOME);
    } catch (e) {
      toast.error(getErrorDescription(e));
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: requestSignIn,
  });

  const Forms = loginForm.formBuilder(formik.handleChange);

  return (
    <CenterLayout>
      <Intro />
      <LoginFormWrapper>
        <Forms />
        <Button
          type="primary"
          disabled={formik.isSubmitting && loading}
          onClick={formik.submitForm}
        >
          {STRING.LOGIN}
        </Button>
      </LoginFormWrapper>
    </CenterLayout>
  );
}
