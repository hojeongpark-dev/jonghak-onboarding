import { gql, useQuery } from "@apollo/client";
import { Member } from "../../graphql-types";

const MY_INFO = gql`
  query myInfo {
    myInfo {
      id
      name
    }
  }
`;

export default function useMyInfoQuery() {
  const {
    data: user,
    error,
    refetch,
    loading,
  } = useQuery<Member>(MY_INFO, {
    notifyOnNetworkStatusChange: true,
  });

  return {
    user,
    loading,
    error,
    refetch,
  };
}
