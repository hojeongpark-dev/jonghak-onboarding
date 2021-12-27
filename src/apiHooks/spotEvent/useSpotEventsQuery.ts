import { gql, NetworkStatus, useQuery } from "@apollo/client";
import { SpotEventFragment } from "../../graphql/fragments";
import {
  Query,
  QuerySpotEventsArgs,
  SpotTranslationsArgs,
} from "../../graphql-types";

const SpotEvents = gql`
  query spotEvents($input: SpotEventPageArgs!, $language: LanguageType!) {
    spotEvents(input: $input) {
      totalCount
      edges {
        ...SpotEventTable_spotEvent
      }
    }
  }
  ${SpotEventFragment}
`;

export default function useSpotEventsQuery(
  variables: QuerySpotEventsArgs & SpotTranslationsArgs
) {
  const {
    data,
    loading: queryLoading,
    error,
    refetch,
    networkStatus,
  } = useQuery<Query, QuerySpotEventsArgs & SpotTranslationsArgs>(SpotEvents, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const events = data?.spotEvents;

  const loading = queryLoading && networkStatus !== NetworkStatus.refetch;

  return { events, loading, error, refetch };
}
