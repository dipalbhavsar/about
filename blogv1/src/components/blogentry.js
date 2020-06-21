import React from "react";
import Moment from "react-moment";
import { Link,useStaticQuery, graphql  } from "gatsby";
import styled from '@emotion/styled';
import Image from '../components/Image';

const BlogEntry = ({ blogData }) => {
  return (
    <div className="blog-entry ftco-animate d-md-flex">
      <Link to={"/" + blogData.pageLink} className="img img-2">
        <Image alt="Gatsby in Space" filename= {blogData.pageImage} />
      </Link>
        <div className="text text-2 pl-md-4">
          <h3 className="mb-2">
            <Link to={"/" + blogData.pageLink}><PWrapper>{blogData.pageTitle}</PWrapper></Link>
          </h3>
          <div className="meta-wrap">
            <p key={"commentArea" + blogData.pageId} className="meta">
              <span key={"dateFormat" + blogData.pageId}>
                <Moment format="DD-MMM-YYYY" date={blogData.pageDate}></Moment>
              </span>
              <span key={"category" + blogData.pageId}>
                <a href={blogData.pageCategory.toLowerCase()}> <span>{blogData.pageCategory}</span> </a>
              </span>
              <span key={"comment" + blogData.pageId}>
                {blogData.pageCommentCount}
              </span>
            </p>
          </div>
          <p className="mb-4">{blogData.pageDescription}</p>
          <p>
            <Link to={ "/" + blogData.pageLink} activeClassName="btn-custom">
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

export default BlogEntry
