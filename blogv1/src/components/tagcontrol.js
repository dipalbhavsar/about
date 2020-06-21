import React from "react";
import styled from '@emotion/styled';

const TagControl = () => {
  return (
    <ULWrapper>
      <Link href="#">cloud</Link>
      <Link href="#">aws</Link>
      <Link href="#">react</Link>
      <Link href="#">front-end</Link>
      <Link href="#">sharepoint</Link>
      <Link href="#">angular</Link>
      <Link href="#">travels</Link>
      <Link href="#">food</Link>
    </ULWrapper>
    );
}

const ULWrapper = styled.ul`

`;

const Link = styled.a`
  text-transform: uppercase;
  display: inline-block;
  padding: 4px 10px;
  margin-bottom: 3px;
  margin-left: 4px;
  border-radius: 10px;
  color: ${p => p.theme.colors.colors};
  transition: color ${p => p.theme.transition};
  &:hover {border: 1px solid ${p => p.theme.colors.primary};},
  &:focus {
    color: ${p => p.theme.colors.primary};
  }
  border: 1px solid ${p => p.theme.colors.primary};
  font-size: 10px;
`;


export default TagControl
