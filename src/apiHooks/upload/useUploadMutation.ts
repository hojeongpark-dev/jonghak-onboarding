import { gql, useMutation } from "@apollo/client";
import {
  CreateTipArgs, Mutation, MutationCreateTipArgs, QueryPreSignedUrlForUploadArgs
} from "../../graphql-types";

const UPLOAD = gql`
    mutation createTip($input: CreateTipArgs!) {
        createTip(input: $input) {
            code
            title
            createdAt
            isActive
        }
    }
`;

export default function useUploadMutation() {
  const [upload, { data, loading, error }] = useMutation<
    Mutation,
    QueryPreSignedUrlForUploadArgs
    >(UPLOAD);
  //
  // const createTip = (input: CreateTipArgs) => create({
  //   variables: {
  //     input,
  //   },
  // });

  return {
    upload,
    data,
    loading,
    error,
  };
}
