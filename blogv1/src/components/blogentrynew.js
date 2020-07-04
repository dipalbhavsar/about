import React from "react";
import Moment from "react-moment";
import { Link } from "gatsby";
import styled from '@emotion/styled';
import Image from '../components/Image';
import { CommentCount } from 'gatsby-plugin-disqus'

const BlogEntryNew = ({ blogData }) => {
  let pageurl = "https://www.dipalbhavsar.com/" + blogData.pageLink;
  let disqusConfig = {
    url: {pageurl},
    identifier: blogData.id,
    title: blogData.pageTitle,
  }
  return (
    <div className="blog-entry d-md-flex">
      <Link to={blogData.fields.slug} className="img img-2">
        <Image alt={blogData.frontmatter.title} filename= {blogData.frontmatter.pageImage} />
      </Link>
        <div className="text text-1 pl-md-4">
          <Link to={blogData.fields.slug}><PWrapper style={{"fontSize": "22px"}}>{blogData.frontmatter.title}</PWrapper></Link>
          <div className="meta-wrap">
            <p key={"commentArea_" + blogData.id} className="meta">
              <span key={"dateFormat_" + blogData.id}>
                <Moment format="DD-MMM-YYYY" date={blogData.frontmatter.date}></Moment>
              </span>
              <span key={"category_" + blogData.id}>
                <a href={blogData.frontmatter.pageCategory.toLowerCase()}> <span>{blogData.frontmatter.pageCategory}</span> </a>
              </span>
              <span key={"comment_" + blogData.id}>
                <CommentCount config={disqusConfig} placeholder={'0 Comment'} />
              </span>
            </p>
          </div>
          <div className="meta-wrap">
            <p>{blogData.frontmatter.description}</p>
          </div>
          <p>
            <Link to={blogData.fields.slug} activeClassName="btn-custom">
              Read More<span className="ion-ios-arrow-forward"></span>
            </Link>
          </p>
        </div>
    </div>
  )
}

const PWrapper = styled.p`
  color: ${p => p.theme.colors.colors};
  transition: background 0.25s var(--ease-in-out-quad);
`;

export default BlogEntryNew
