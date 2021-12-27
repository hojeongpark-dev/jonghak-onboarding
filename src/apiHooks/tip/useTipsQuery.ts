import { gql, NetworkStatus, useQuery } from "@apollo/client";
import { Query, QueryTipsArgs } from "../../graphql-types";
import { TipsFragment } from "../../graphql/fragments";

const TIPS = gql`
  ${TipsFragment}
  query tips($input: TipPageArgs!) {
    tips(input: $input) {
      ...TipTable_tips
    }
  }
`;

export default function useTipsQuery(args: QueryTipsArgs) {
  const {
    data,
    loading: queryLoading,
    error,
    refetch,
    networkStatus,
  } = useQuery<Query, QueryTipsArgs>(TIPS, {
    variables: args,
    notifyOnNetworkStatusChange: true,
  });

  const tips = data?.tips;

  const loading = queryLoading && networkStatus !== NetworkStatus.refetch;

  return {
    tips,
    loading,
    error,
    refetch,
  };
}
