import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactElement } from "react";
import PageRouter from "./router";
import CustomHeader from "./components/layout/CustomHeader";
import CustomSideNav from "./components/layout/CustomSideNav";
import CustomContent from "./components/layout/CustomContent";

export default function App(): ReactElement {
  return (
    <Router>
      <CustomHeader />
      <Layout hasSider>
        <CustomSideNav />
        <Layout>
          <CustomContent>
            <PageRouter />
          </CustomContent>
        </Layout>
      </Layout>
    </Router>
  );
}
