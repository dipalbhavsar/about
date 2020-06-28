import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BlogEntryNew from "./blogentrynew"

const IndexComponentNew = ({ BlogEntryType }) => {
  const allBlogs = graphql(`
    {
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
    }`);
  return (
    <div>
      {
        allBlogs.allMarkdownRemark.edges.map(({ node }) => (
          <BlogEntryNew blogData={node} key={node.id}></BlogEntryNew>
        ))
      }
    </div>  
  )
}

export default IndexComponentNew
