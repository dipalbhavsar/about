import React from "react";
import styled from '@emotion/styled';
import IndexComponent from "../components/indexcomponenet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AzurePage = ({ location }) => {
return (
  <Layout location={location}>
    <SEO title="Azure" description = "this is description"/>
    <IndexComponent BlogEntryType={"Azure"}></IndexComponent>
  </Layout>
);
};

const Heading = styled.h1`
  padding-top: 0;
  margin-top: 0;
  &::before {
    display: none !important;
  }
`;


export default AzurePage
