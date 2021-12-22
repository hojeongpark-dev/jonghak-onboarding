import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import STRING from "../../../constants/strings";
import { HeaderContent } from "./style";
import { URLS } from "../../../constants/urls";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { authActions } from "../../../redux/slice/auth";

function LoginButton() {
  return (
    <Button>
      <NavLink to={URLS.LOGIN}>{STRING.LOGIN}</NavLink>
    </Button>
  );
}

function LogoutButton({ handleLogout }: { handleLogout: () => void }) {
  return (
    <Button>
      <NavLink to={URLS.LOGIN} onClick={handleLogout}>
        {STRING.LOGOUT}
      </NavLink>
    </Button>
  );
}

export default function CustomHeader(): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = async () => dispatch(authActions.logout());

  return (
    <Header>
      <HeaderContent>
        {user ? <LogoutButton handleLogout={handleLogout} /> : <LoginButton />}
      </HeaderContent>
    </Header>
  );
}
