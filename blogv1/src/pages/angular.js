import React from "react";
import IndexComponent from "../components/indexcomponenet"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AngularPage = ({ location }) => {
return (
  <Layout location={location}>
    <SEO title="Angular" description = "this is description"/>
    <IndexComponent BlogEntryType={"Angular"}></IndexComponent>
  </Layout>
);
};
export default AngularPage
