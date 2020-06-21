import React from "react";
import IndexComponent from "../components/indexcomponenet"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location, children }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" description = "this is description"/>
        <IndexComponent BlogEntryType={"*"}></IndexComponent>        
    </Layout>
  );
};

export default IndexPage
