import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Styled } from 'theme-ui';
import { globalStyles } from '../styles';
import mediaqueries from '../styles/media';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
//import RightSidebar from './RightSidebar';

import SearchForm from "./searchform";
import CategoryBox from "./categorybox";
import TagControl from "./tagcontrol"
import NewsSubscription from "./newsSubscription";
import Archives from "./archives";
import Declaration from "./declaration";

const Layout = ({ children, location, isLeftSideDisplay=true }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Styled.root>     
      <Global styles={globalStyles} />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <SiteWrapper>
        <LeftSidebar navOpen={navOpen} />
         <SiteContentWrapper>
          <SiteContent navOpen={navOpen}>
            <div className="col-xl-12">
              <div className="row pt-md-4">
                <div className={isLeftSideDisplay ? "col-md-8" : "col-md-12"}>
                  {children}
                </div>
                {isLeftSideDisplay ?
                <div className="col-md-4">
                  <SideBarBox className="pt-md-4" >                    
                    <SideBarHeading>
                        Search Here...
                    </SideBarHeading>
                    <SearchForm></SearchForm>
                  </SideBarBox> 
                  <SideBarBox className="pt-md-4">
                    <SideBarHeading>
                      Categories
                    </SideBarHeading>
                    <CategoryBox></CategoryBox>
                  </SideBarBox>
                  <SideBarBox className="pt-md-4">
                    <SideBarHeading>
                      Tag Cloud
                    </SideBarHeading>
                    <TagControl></TagControl>
                  </SideBarBox>
                  <NewsSubscription></NewsSubscription>
                  <SideBarBox className="pt-md-4">
                    <SideBarHeading>
                      Archives
                    </SideBarHeading>
                    <Archives></Archives>
                  </SideBarBox>
                  <SideBarBox className="pt-md-4">
                    <SideBarHeading>
                      Declaration
                    </SideBarHeading>
                    <Declaration></Declaration>
                  </SideBarBox>
                </div>
                : ''
                }
              </div>
            </div> 
          </SiteContent>
        </SiteContentWrapper>
      </SiteWrapper>      
    </Styled.root>
  );
};

const SiteWrapper = styled.div`
  display: flex;
  // min-height: 100vh;
  overflow-x: hidden;
  background: ${p => p.theme.colors.background};
  transition: background 0.25s var(--ease-in-out-quad);
`;

const SiteContentWrapper = styled.div`
  flex-grow: 1;
  min-width: 20rem;
`;

const SiteContent = styled.main`
  // padding: 2rem 1rem 2rem;
  transition: 0.25s var(--ease-in-out-quad);
  opacity: ${p => (p.navOpen ? 0.3 : 1)};
  transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
  ${mediaqueries.desktop_up`
    transform: translateX(0);
    opacity: 1;
  `};
`;

const SideBarBox = styled.div`
  margin-bottom: 40px;
  padding: 0 25px;
  font-size: 15px;
  width: 100%;
`;

const SideBarHeading = styled.p`
  font-size: 20px;
  font-weight: normal;
  font-style: italic;
  margin-bottom: 30px;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
