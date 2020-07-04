import React from "react";
import BlogEntryNew from "../components/blogentrynew"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AgilePage = ({ location, data }) => {
  const posts = data.pageData.edges
  return (
    <Layout location={location}>
      <SEO title="Agile" description = "List of Agile posts will display here" keywords={[`coding`, `programming`, `Dipal Bhavsar`, `gatsbyJS`,`web development`,`React`,`web programming`, `Agile`]}/>
      {posts.map(({ node }) => {
        return <BlogEntryNew blogData={node} key={"_" + node.id}></BlogEntryNew>
      })}
    </Layout>
  );
};

export default AgilePage

export const pageQuery = graphql`
  query {
    pageData:allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: { frontmatter:  { pageTags: { eq:"Agile"}}}
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
  }
`

