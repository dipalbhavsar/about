import React from "react";
import IndexComponent from "../components/indexcomponenet"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SharePointPage = ({ location }) => {
return (
  <Layout location={location}>
    <SEO title="SharePoint" description = "this is description"/>
    <IndexComponent BlogEntryType={"SharePoint"}></IndexComponent>
  </Layout>
);
};

export default SharePointPage
