import { Link } from "react-router-dom";

import useMyInfo from "../apis/myInfo";

export default function withAuth(component: () => JSX.Element) {
  const Component = component;
  const { data, isLoading, error } = useMyInfo();

  console.log(data);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return <Component />;
}
