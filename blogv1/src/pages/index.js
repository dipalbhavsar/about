import React, { useState } from "react";
import BlogEntryNew from "../components/blogentrynew"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const IndexPage = ({ location, data }) => {
    const posts = data.pageData.edges
  return (
    <Layout location={location}>
      <SEO title="Home" description = "List of all available post." keywords={[`coding`, `programming`, `Dipal Bhavsar`, `gatsbyJS`,`web development`,`React`,`web programming`]}/>
      {posts.map(({ node }) => {
        return <BlogEntryNew blogData={node} key={"_" + node.id}></BlogEntryNew>
      })}
    </Layout>
  );
};

export default IndexPage

export const pageQuery = graphql`
query {
  pageData: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    ) {      
    totalCount
    edges {
      node {
        id
        tableOfContents
        timeToRead
        fields {
          slug
        }
        wordCount {
          paragraphs
          sentences
          words
        }
        frontmatter {                  
          title
          description
          pageImage
          date(formatString: "YYYYMMDD")
          pageAuthor
          pageCategory
          pageMenu
          pageTags
        }                
      }
    }
  }
  categories:allMarkdownRemark(
    filter: { frontmatter: { pageTags: { in: ["Agile","Azure","React","SharePoint", "IdentityServer", "CodeReview"] } } }
  ) {
  group(field: frontmatter___pageTags) {
        name: fieldValue
        totalCount
    }      
  }
}
`
