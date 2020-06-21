import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location }) => {

  return (
    <Layout location={location} isLeftSideDisplay={false}>
      <SEO title="About" description = "this is description"/>
    </Layout>
  );
};

export default AboutPage
