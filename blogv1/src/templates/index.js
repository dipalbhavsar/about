import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
          <div className="col-md-12">
            <nav>
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            <header>
              <Para>{post.frontmatter.title}</Para>
              <ParaDate>{post.frontmatter.date}</ParaDate>
              <ParaHR></ParaHR>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: 1,
              }}
            />
            <footer>
             
            </footer>
          </div>
    </Layout>
  )
}

const ParaHR = styled.hr`
  color: ${p => p.theme.colors.colors};
  backgroundColor: ${p => p.theme.colors.colors};
  transition: color ${p => p.theme.transition};
  border:5;
  height: 1px;
  border-color :  ${p => p.theme.colors.text};  
`;


const ParaDate = styled.p`
  color: ${p => p.theme.colors.colors};
  transition: color ${p => p.theme.transition};
  font-size: 8;
  marginTop: -2;
  marginBottom: 10,
`;

const Para = styled.p`
  color: ${p => p.theme.colors.colors};
  transition: color ${p => p.theme.transition};
  font-size: 2rem;
  marginTop: 0,
  marginBottom: 0,
`;
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }    
  }
`
