import React from "react";
import BlogEntryNew from "../components/blogentrynew"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const ReactPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO title="React" description = "List of React posts will display here" keywords={[`coding`, `programming`, `Dipal Bhavsar`, `gatsbyJS`,`web development`,`React`,`web programming`, `React`]}/>
      {posts.map(({ node }) => {
        return <BlogEntryNew blogData={node} key={"_" + node.id}></BlogEntryNew>
      })}
    </Layout>
  );
};

export default ReactPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: { frontmatter:  { pageTags: { eq:"React"}}}
      ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
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
          id
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
  }
`

