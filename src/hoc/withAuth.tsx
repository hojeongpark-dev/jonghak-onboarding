import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useMyInfoQuery from "../apiHooks/myInfo/useMyInfoQuery";
import { useAppDispatch } from "../redux/store";
import { authActions } from "../redux/slice/auth";
import { getErrorDescription } from "../network/error";
import { URLS } from "../constants/urls";
import Home from "../page/Home";
import CenterLayout from "../components/layout/styled/CenterLayout";
import useDidMount from "../hooks/useDidMount";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { Component } from "../types/hoc";
import { ErrorToast } from "../toast";

const withAuth = (Component: Component) => () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const { loading, error, updateUserInfo } = useMyInfoQuery();

  const checkAuth = async () => {
    try {
      setPending(true);
      const user = await updateUserInfo();
      dispatch(authActions.setUser(user));
    } catch (e) {
      ErrorToast(e);
      navigate(URLS.LOGIN);
    } finally {
      setPending(false);
    }
  };

  useDidMount(checkAuth);

  if (loading || pending) {
    return (
      <CenterLayout>
        <LoadingSpinner />
      </CenterLayout>
    );
  }

  if (error) return <Home />;

  return <Component />;
};

export default withAuth;
