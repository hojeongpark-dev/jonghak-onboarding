import { Button } from "antd";
import { string } from "yup";
import { useNavigate } from "react-router-dom";
import Intro from "../../components/common/Intro";
import CenterLayout from "../../components/layout/styled/CenterLayout";
import { LoginFormWrapper } from "./style";
import STRING from "../../constants/strings";
import useForm from "../../hooks/useForm";
import useMyInfoQuery from "../../apiHooks/myInfo/useMyInfoQuery";
import useSignInMutation from "../../apiHooks/signIn/useSignInMutation";
import { useAppDispatch } from "../../redux/store";
import { authActions } from "../../redux/slice/auth";
import { URLS } from "../../constants/urls";
import { FormType } from "../../types/form/formType";
import { ErrorToast } from "../../toast";
import { setToken } from "../../util/token";

export default function Login(): JSX.Element {
  const { refetch } = useMyInfoQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { signIn, loading } = useSignInMutation();

  const setUserInfo = async () => {
    const { data: user } = await refetch();
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
        const { data } = await signIn({
          id,
          password,
        });
        if (data?.signIn.accessToken) {
          setToken(data.signIn.accessToken);
          await setUserInfo();
          navigate(URLS.HOME);
        }
      } catch (e) {
        ErrorToast(e);
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
