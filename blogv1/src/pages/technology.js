import React from "react";
import BlogEntryNew from "../components/blogentrynew"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TechnologyPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO title="Technology" description = "List of Technology posts will display here" keywords={[`coding`, `programming`, `Dipal Bhavsar`, `gatsbyJS`,`web development`,`React`,`web programming`, `Technology`]}/>
      {posts.map(({ node }) => {
        return <BlogEntryNew blogData={node} key={"_" + node.id}></BlogEntryNew>
      })}
    </Layout>
  );
};

export default TechnologyPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: { frontmatter:  { pageTags: { eq:"technology"}}}
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
