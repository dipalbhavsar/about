import React from "react";
import IndexComponent from "../components/indexcomponenet"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const AgilePage = ({ location }) => {
return (
  <Layout location={location}>
    <SEO title="Agile" description = "this is description"/>
    <IndexComponent BlogEntryType={"Agile"}></IndexComponent>
  </Layout>
);
};

export default AgilePage
