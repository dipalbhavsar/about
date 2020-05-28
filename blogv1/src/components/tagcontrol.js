import React from "react";
import styled from '@emotion/styled';

const TagControl = () => {
  return (
    <ulWrapper>
      <Link href="#">cloud</Link>
      <Link href="#">aws</Link>
      <Link href="#">react</Link>
      <Link href="#">front-end</Link>
      <Link href="#">sharepoint</Link>
      <Link href="#">angular</Link>
      <Link href="#">travels</Link>
      <Link href="#">food</Link>
    </ulWrapper>
    );
}

const ulWrapper = styled.ul`
`;

const Link = styled.a`
  text-transform: uppercase;
  display: inline-block;
  padding: 4px 10px;
  margin-bottom: 7px;
  margin-right: 4px;
  border-radius: 4px;
  color: ${p => p.theme.colors.colors};
  transition: color ${p => p.theme.transition};
  &:hover {border: 1px solid ${p => p.theme.colors.primary};},
  &:focus {
    color: ${p => p.theme.colors.primary};
  }
  border: 1px solid ${p => p.theme.colors.primary};
  font-size: 11px;
`;


export default TagControl
