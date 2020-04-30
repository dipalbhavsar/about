import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexComponent from "../components/indexcomponenet";

const SharePoint= ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title; 
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />       
      <IndexComponent BlogEntryType = {"SharePoint"}></IndexComponent>
    </Layout>
  )
}

export default SharePoint

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
