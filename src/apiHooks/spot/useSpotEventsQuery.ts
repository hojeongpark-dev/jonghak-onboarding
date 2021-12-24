import { gql, useQuery } from "@apollo/client";
import { SpotEventFragment, SpotFragment } from "../../graphql/fragments";
import {
  LanguageType,
  Query,
  QuerySpotEventsArgs,
  QuerySpotsArgs,
  SpotPageArgs,
  SpotTranslationsArgs,
} from "../../graphql-types";
import { DEFAULT_LIMIT_SIZE } from "../../constants/list";

const SpotEvents = gql`
  query Spots($input: SpotEventPageArgs!, $language: LanguageType!) {
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
