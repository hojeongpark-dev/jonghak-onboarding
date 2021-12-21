import { gql, useMutation, useQuery } from "@apollo/client";

const MY_INFO = gql`
  query MyInfo {
    myInfo {
      id
    }
  }
`;

export default function useMyInfo() {
  const { data, error } = useQuery(MY_INFO);
  // console.log(error, data);
  const isLoading = !error && !data;
  return {
    //   signIn,
    data,
    isLoading,
    error,
  };
}
