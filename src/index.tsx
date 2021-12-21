import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { store } from "./redux/store";
import App from "./app";

import "antd/dist/antd.css";
import {
  getGraphQlErrorDescription,
  getNetworkErrorDescription,
} from "./network/error";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_ENDPOINT_PATH,
});

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.forEach((error) => console.error(getGraphQlErrorDescription(error)));
//   }
//   if (networkError) getNetworkErrorDescription(networkError);
// });

const client = new ApolloClient({
  // link: from([errorLink, httpLink]),
  uri: process.env.REACT_APP_ENDPOINT_PATH,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

function Index(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  );
}

render(<Index />, document.getElementById("root"));
