import { gql, useQuery } from "@apollo/client";
import {
  Query,
  QuerySpotArgs,
  SpotTranslationsArgs,
} from "../../graphql-types";
import {
  SpotEventProduct,
  SpotEventProductIndividualEvent,
} from "../../graphql/fragments";

const STOP_EVENT = gql`
  ${SpotEventProduct}
  ${SpotEventProductIndividualEvent}
  query SpotEvent($code: Int!, $language: LanguageType) {
    spotEvent(code: $code) {
      code
      type
      status
      baseValue
      subValue
      spot {
        code
        translations(language: $language) {
          code
          name
        }
        discountPrice
        originalPrice
        items {
          ...SpotEventProduct_product
        }
      }
      code
      start
      end
      manager {
        code
        name
        nickname
      }
      createdAt
      description
      individuals {
        ...SpotEventProduct_individualEvent
      }
    }
  }
`;

export default function useSpotEventQuery(code: number) {
  const { data, error, loading, refetch } = useQuery<
    Query,
    QuerySpotArgs & SpotTranslationsArgs
  >(STOP_EVENT, {
    variables: { code, language: "KOREAN" },
  });

  const spotEvent = data?.spotEvent;

  return {
    spotEvent,
    error,
    loading,
    refetch,
  };
}
