import { Button } from "antd";
import { string } from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Intro from "../../components/common/Intro";
import CenterLayout from "../../components/layout/styled/CenterLayout";
import { LoginFormWrapper } from "./style";
import STRING from "../../constants/strings";
import useForm from "../../hooks/useForm";
import { getErrorDescription } from "../../network/error";
import useMyInfoQuery from "../../apis/myInfo/useMyInfoQuery";
import useSignInMutation from "../../apis/signIn/useSignInMutation";
import { useAppDispatch } from "../../redux/store";
import { authActions } from "../../redux/slice/auth";
import { URLS } from "../../constants/urls";
import { FormType } from "../../types/form/formType";

export default function Login(): JSX.Element {
  const { updateUserInfo } = useMyInfoQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { signIn, loading } = useSignInMutation();

  const setUserInfo = async () => {
    const user = await updateUserInfo();
    dispatch(authActions.setUser(user));
  };

  const { formik, Form } = useForm({
    formInfo: {
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
    },
    onSubmit: async ({ id, password }) => {
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
    },
  });

  return (
    <CenterLayout>
      <Intro />
      <LoginFormWrapper>
        <Form.id />
        <Form.password />
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
