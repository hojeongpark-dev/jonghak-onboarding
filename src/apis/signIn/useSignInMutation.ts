import { gql, useMutation } from "@apollo/client";
import {
  SignInArgs,
  SignInMutation,
  SignInMutationVariables,
} from "../../graphql-types";
import { NullablePromise } from "../../types/response";
import { setToken } from "../../util/token";

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

  const signIn = async (signInArgs: SignInArgs): NullablePromise<SignInMutation> => {
    const { data } = await requestSignIn({
      variables: {
        input: signInArgs,
      },
    });

    if (data) setToken(data?.signIn.accessToken);
    return data;
  };

  return {
    signIn,
    data,
    loading,
    error,
  };
}
