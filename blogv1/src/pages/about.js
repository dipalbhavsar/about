import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about'
const AboutPage = ({ location }) => {

  return (
    <Layout location={location} isLeftSideDisplay={false}>
      <SEO title="About" description = "This is all about me, my adventure and exprerience with the world"/>
      <About />
    </Layout>
  );
};

export default AboutPage
