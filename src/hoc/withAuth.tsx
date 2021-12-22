import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { toast } from "react-toastify";
import useMyInfo from "../apis/myInfo";
import { useAppDispatch } from "../redux/store";
import { authActions } from "../redux/slice/auth";
import { getErrorDescription } from "../network/error";
import { URLS } from "../constants/urls";
import Home from "../page/Home";
import CenterLayout from "../components/layout/styled/CenterLayout";
import useDidMount from "../hooks/useDidMount";

const withAuth = (Component: () => JSX.Element) => () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const { loading, error, updateUserInfo } = useMyInfo();

  const checkAuth = async () => {
    try {
      setPending(true);
      const user = await updateUserInfo();
      dispatch(authActions.setUser(user));
    } catch (e) {
      toast.error(getErrorDescription(e));
      navigate(URLS.LOGIN);
    } finally {
      setPending(false);
    }
  };

  useDidMount(checkAuth);

  if (loading || pending) {
    return (
      <CenterLayout>
        <Spin />
      </CenterLayout>
    );
  }

  if (error) return <Home />;

  return <Component />;
};

export default withAuth;
