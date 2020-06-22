import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import mediaqueries from '../styles/media';
import IconButton from './icons/IconButton';
import Menu from './icons/Menu';
import ColorTheme from './ColorTheme';

const Header = ({ navOpen, setNavOpen }) => {  
  return (
    <StyledHeader navOpen={navOpen}>
      <HeaderSection>
        <NavIconButton>
          <IconButton
            label="Open Navigation"
            icon={<Menu />}
            size={30}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
        </NavIconButton>
        <ColorTheme/>
      </HeaderSection>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  // right: 63px;
  // position: absolute;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // padding: 1rem 1rem;
  // z-index: 5;
  // background: ${p => p.theme.colors.background};
  // transition: all 0.25s var(--ease-in-out-quad);
  // border-bottom: 1px solid ${p => p.theme.colors.borderColor};
  // transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
  ${mediaqueries.desktop_up`
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // padding: 1rem 1.2rem;
    // transform: translateX(0);
    // display:none;
  `};
`;

const NavIconButton = styled.div`
  right:20px;
  position:absolute;  
// display: flex;
  // margin-left: 1rem;
  // position: relative;
  // float: right;
  // top:10; 
  // right:10;
  ${mediaqueries.desktop_up`
    display: none;
  `};
`;

const HeaderSection = styled.div`
   display: flex;
   align-items: right;
   position: relative;
`;

Header.propTypes = {
  navOpen: PropTypes.bool,
  setNavOpen: PropTypes.func
};

export default Header;
