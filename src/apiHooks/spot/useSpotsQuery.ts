import { gql, useQuery } from "@apollo/client";
import {
  Query,
  QuerySpotsArgs,
  SpotTranslationsArgs,
} from "../../graphql-types";

const STOPS = gql`
  query spots($input: SpotPageArgs!, $language: LanguageType) {
    spots(input: $input) {
      edges {
        code
        translations(language: $language) {
          name
        }
      }
    }
  }
`;

export default function useSpotsQuery(
  variables: QuerySpotsArgs & SpotTranslationsArgs
) {
  const { data, error, loading } = useQuery<
    Query,
    QuerySpotsArgs & SpotTranslationsArgs
  >(STOPS, {
    variables,
  });

  const spots = data?.spots;

  return {
    spots,
    error,
    loading,
  };
}
