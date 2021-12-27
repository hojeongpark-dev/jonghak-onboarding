import { render } from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";

import App from "./app";
import "antd/dist/antd.css";

import apolloClient from "./graphql/apollo/client";
import "react-toastify/dist/ReactToastify.css";
import { toastOptions } from "./toast";

function Index(): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer {...toastOptions} />
    </ApolloProvider>
  );
}

render(<Index />, document.getElementById("root"));
