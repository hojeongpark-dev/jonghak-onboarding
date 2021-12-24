import { gql, useQuery } from "@apollo/client";
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
  const { data, loading, error, refetch } = useQuery<Query, QueryTipsArgs>(
    TIPS,
    {
      variables: args,
    }
  );

  const tips = data?.tips;

  return {
    tips,
    loading,
    error,
    refetch,
  };
}
