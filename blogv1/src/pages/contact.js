import React from "react";
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

const ContactPage = ({ location }) => {
// const { mdx } = data;

  return (
    <Layout location={location}>
      <SEO title="Home" description = "this is description"/>
      <h1>Hi Contact</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}><Image /></div>
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


export default ContactPage
