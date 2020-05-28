import React from "react";
import styled from '@emotion/styled';
import IndexComponent from "../components/indexcomponenet"
import Layout from "../components/layout"
import SEO from "../components/seo"
const TechnologyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Technology" description = "this is description"/>
      <IndexComponent BlogEntryType={"Technology"}></IndexComponent>
    </Layout>
  );
};

export default TechnologyPage
