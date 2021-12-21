import { gql, useMutation } from "@apollo/client";
import { SignInResult } from "../../graphql-types";

const SIGN_IN = gql`
  mutation SignIn($input: SignInArgs!) {
    signIn(input: $input) {
      accessToken
    }
  }
`;

export default function useSignIn() {
  const [signIn, { error, data }] = useMutation<SignInResult>(SIGN_IN);

  const isLoading = !error && !data;

  return {
    signIn,
    data,
    isLoading,
    error,
  };
}
