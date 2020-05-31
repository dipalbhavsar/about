import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const NavItem = ({ item }) => {
  return (
    <StyledNavItem>
      <NavItemLink to={item.url} activeClassName="is-active">
        {item.title}
      </NavItemLink>
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  padding: 0;
  list-style: none;
  font-size: 18px;
  font-weight: 500;
`;

const NavItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1.8rem 0.5rem 1.2rem;
  width: 100%;
  color: ${p => p.theme.colors.text};
  font-weight: 600;
  text-decoration: none;
  transition: color ${p => p.theme.transition};
  &:hover,
  &:focus,
  &.is-active {
    color: ${p => p.theme.colors.primary};
  }
`;
export default React.memo(NavItem);
