import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import PageRouter from "./router";
import CustomHeader from "./layout/CustomHeader";
import CustomSideNav from "./layout/CustomSideNav";
import CustomContent from "./layout/CustomContent";

export default function App(): React.ReactElement {
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
