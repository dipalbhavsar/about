import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoWrapper = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledLogoWrapper>
    <LogoLink to="/">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </LogoLink>
  </StyledLogoWrapper>
  );
};

const StyledLogoWrapper = styled.div`
  p {
    margin: 0;
    font-size: 1.6rem;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  transition: color ${p => p.theme.transition};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
  }
`;

export default LogoWrapper;
