import React from "react";
import IndexComponent from "../components/indexcomponenet"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ReactPage = ({ location }) => {
return (
  <Layout location={location}>
    <SEO title="React" description = "this is description"/>
    <IndexComponent BlogEntryType={"React"}></IndexComponent>
  </Layout>
);
};
export default ReactPage
