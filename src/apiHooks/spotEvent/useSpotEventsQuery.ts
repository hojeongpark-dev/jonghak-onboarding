import { gql, useQuery } from "@apollo/client";
import { SpotEventFragment } from "../../graphql/fragments";
import {
  Query,
  QuerySpotEventsArgs,
  SpotTranslationsArgs,
} from "../../graphql-types";

const SpotEvents = gql`
  query SpotEvents($input: SpotEventPageArgs!, $language: LanguageType!) {
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
  const { data, loading, error, refetch } = useQuery<
    Query,
    QuerySpotEventsArgs & SpotTranslationsArgs
  >(SpotEvents, {
    variables,
  });

  const events = data?.spotEvents;

  return { events, loading, error, refetch };
}
