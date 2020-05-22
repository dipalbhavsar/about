import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryComponent from "../components/categorycomponenet"

const CategoryPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <CategoryComponent BlogEntryType={location}></CategoryComponent>
    </Layout>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
