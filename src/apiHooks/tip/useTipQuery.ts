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

export default function useTipQuery(code: number) {
  const { data, loading, error, refetch } = useQuery<Query, QueryTipArgs>(TIP, {
    variables: { code },
  });

  const tip = data?.tip;

  return {
    tip,
    loading,
    error,
    refetch,
  };
}
