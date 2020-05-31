import React from "react";
import IndexComponent from "../components/indexcomponenet"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AzurePage = ({ location }) => {
return (
  <Layout location={location}>
    <SEO title="Azure" description = "this is description"/>
    <IndexComponent BlogEntryType={"Azure"}></IndexComponent>
  </Layout>
);
};
export default AzurePage
