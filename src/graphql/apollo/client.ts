import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "../../util/token";

const endPointLink = createHttpLink({
  uri: process.env.REACT_APP_ENDPOINT_PATH,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      ...(token && { authorization: `Bearer ${token}` }),
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(endPointLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default apolloClient;
