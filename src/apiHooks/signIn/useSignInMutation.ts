import { gql, useMutation } from "@apollo/client";
import {
  SignInArgs,
  SignInMutation,
  SignInMutationVariables,
} from "../../graphql-types";

const SIGN_IN = gql`
  mutation signIn($input: SignInArgs!) {
    signIn(input: $input) {
      accessToken
    }
  }
`;

export default function useSignInMutation() {
  const [requestSignIn, { error, data, loading }] = useMutation<
    SignInMutation,
    SignInMutationVariables
  >(SIGN_IN);

  const signIn = async (signInArgs: SignInArgs) =>
    requestSignIn({
      variables: {
        input: signInArgs,
      },
    });

  return {
    signIn,
    data,
    loading,
    error,
  };
}
