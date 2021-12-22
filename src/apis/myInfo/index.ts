import { gql, useQuery } from "@apollo/client";
import { Member } from "../../graphql-types";

const MY_INFO = gql`
  query MyInfo {
    myInfo {
      id
    }
  }
`;

export default function useMyInfo() {
  const {
    data: user, error, refetch, loading
  } = useQuery<Member>(MY_INFO);

  const updateUserInfo = async () => {
    const res = await refetch();
    return res.data;
  };

  return {
    user,
    loading,
    error,
    updateUserInfo,
  };
}
