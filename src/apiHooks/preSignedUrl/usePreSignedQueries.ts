import { gql, useLazyQuery } from "@apollo/client";
import {
  PreSignedUrlArgs,
  Query,
  QueryPreSignedUrlForUploadArgs,
} from "../../graphql-types";

const PRE_SIGNED_URL_FOR_UPLOAD = gql`
  query preSignedUrlForUpload($input: PreSignedUrlArgs!) {
    preSignedUrlForUpload(input: $input) {
      url
      headers {
        name
        value
      }
    }
  }
`;

function usePreSignedUrlForUploadQuery() {
  const [getUrl, { loading, error, data }] = useLazyQuery<
    Query,
    QueryPreSignedUrlForUploadArgs
  >(PRE_SIGNED_URL_FOR_UPLOAD);

  const getPreSignedUrl = async (input: PreSignedUrlArgs) => {
    const { data } = await getUrl({ variables: { input } });
    const preSignedUrl = data?.preSignedUrlForUpload.url;
    if (!preSignedUrl) {
      throw new Error("Not Found preSignedUrl");
    }
    return data?.preSignedUrlForUpload.url;
  };

  return {
    getPreSignedUrl,
    data,
    loading,
    error,
  };
}

// eslint-disable-next-line import/prefer-default-export
export { usePreSignedUrlForUploadQuery };
