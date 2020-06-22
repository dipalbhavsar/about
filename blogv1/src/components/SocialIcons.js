import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Github from './icons/Github';
import Facebook from './icons/Facebook';
import LinkedIn from './icons/LinkedIn';
import Icon from './icons/Icon';
import Twitter from './icons/Twitter';

const socialQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            social {
              name
              url
            }
          }
        }
      }
    }
  }
`;

const icons = {
  twitter: <Twitter />,
  github: <Github />,
  facebook: <Facebook />,
  linkedin: <LinkedIn />
};

const SocialIcons = () => {
  const result = useStaticQuery(socialQuery);
  const socialOptions = result.allSite.edges[0].node.siteMetadata.social;
  return (
    <StyledSocialIcons>
      {socialOptions.map(option => (
        <SocialLinks key={option.name} href={option.url}>
          <Icon icon={icons[option.name]} size={22} />
        </SocialLinks>
      ))}
    </StyledSocialIcons>
  );
};

const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  opacity: 0.7;
`;

const SocialLinks = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
`;

export default SocialIcons;
