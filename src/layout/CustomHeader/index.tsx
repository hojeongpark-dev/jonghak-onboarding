import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { URLS } from "../../constants/pages";
import { authActions } from "../../redux/slice/auth";
import STRING from "../../constants/strings";
import { HeaderContent } from "./style";

function LoginButton() {
  return (
    <Button>
      <NavLink to={URLS.LOGIN}>{STRING.LOGIN}</NavLink>
    </Button>
  );
}

function LogoutButton() {
  const dispatch = useAppDispatch();
  const handleClickLogoutButton = () => dispatch(authActions.logout());

  return (
    <Button>
      <NavLink to={URLS.LOGIN} onClick={handleClickLogoutButton}>
        {STRING.LOGOUT}
      </NavLink>
    </Button>
  );
}

export default function CustomHeader(): JSX.Element {
  const isLogin = useAppSelector((state) => state.auth.user);

  return (
    <Header>
      <HeaderContent>
        {isLogin ? <LogoutButton /> : <LoginButton />}
      </HeaderContent>
    </Header>
  );
}
