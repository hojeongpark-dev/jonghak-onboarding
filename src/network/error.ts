import {
  GraphQLError,
  GraphQLErrorExtensions,
} from "graphql/error/GraphQLError";
import { NetworkError } from "@apollo/client/errors";
import { ApolloError } from "@apollo/client";

type ResponseWithDesc = {
  response?: {
    description?: string;
  };
};

interface ExtensionsWithDesc extends GraphQLErrorExtensions, ResponseWithDesc {
  exception?: ResponseWithDesc;
}

export const getGraphQlErrorDescription = (
  error: GraphQLError
): string | undefined => {
  const msg = error.message;
  const extensions = error.extensions as ExtensionsWithDesc;
  return (
    extensions?.response?.description ||
    extensions.exception?.response?.description ||
    msg
  );
};

export const getNetworkErrorDescription = (error: NetworkError) =>
  `${error?.message.toString() || error?.name.toString() || error?.toString()}`;

export const getErrorDescription = (error: unknown) => {
  const { graphQLErrors, networkError } = error as ApolloError;
  if (graphQLErrors.length > 0) {
    return graphQLErrors.map(getGraphQlErrorDescription).join("\n");
  }
  if (networkError) return getNetworkErrorDescription(networkError);
  return (error as Error).toString();
};
