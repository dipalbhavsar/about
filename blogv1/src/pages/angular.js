import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexComponent from "../components/indexcomponenet"

const Angular = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <IndexComponent BlogEntryType={"Angular"}></IndexComponent>
    </Layout>
  )
}

export default Angular

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
