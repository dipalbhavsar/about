import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexComponent from "../components/indexcomponenet";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
 
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />       
      <IndexComponent></IndexComponent>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
