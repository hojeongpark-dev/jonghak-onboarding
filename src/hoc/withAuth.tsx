import { useNavigate } from "react-router-dom";
import useMyInfoQuery from "../apiHooks/myInfo/useMyInfoQuery";
import { useAppDispatch } from "../redux/store";
import { authActions } from "../redux/slice/auth";
import { URLS } from "../constants/urls";
import Home from "../page/Home";
import useDidMount from "../hooks/useDidMount";
import { Component } from "../types/hoc";
import { ErrorToast } from "../toast";
import Loading from "../components/common/Loading";

const withAuth = (Component: Component) => () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, refetch, loading } = useMyInfoQuery();

  const checkAuth = async () => {
    try {
      const { data: user } = await refetch();
      dispatch(authActions.setUser(user));
    } catch (e) {
      ErrorToast(e);
      dispatch(authActions.logout());
      navigate(URLS.LOGIN);
    }
  };

  useDidMount(checkAuth);

  if (loading) return <Loading />;

  if (error) return <Home />;

  return <Component />;
};

export default withAuth;
