import { gql, useQuery } from "@apollo/client";
import { Query, QueryTipArgs } from "../../graphql-types";
import { TipFragment } from "../../graphql/fragments";

const TIP = gql`
  ${TipFragment}
  query tip($code: Int!) {
    tip(code: $code) {
      ...TipTable_tip
    }
  }
`;

export default function useTipQuery(args: QueryTipArgs) {
  const { data, loading, error, refetch } = useQuery<Query, QueryTipArgs>(TIP, {
    variables: args,
  });

  const tip = data?.tip;

  const refresh = (code: number) => refetch({ code });

  return {
    tip,
    loading,
    error,
    refresh,
  };
}
