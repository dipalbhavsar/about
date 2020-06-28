import React from "react";
import BlogEntryNew from "../components/blogentrynew"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges
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
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
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
