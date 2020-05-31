import styled from '@emotion/styled';
import React, { useState } from 'react';
import NavItem from './NavItem';
import sideBarData from "../../data/sidebarItems.json"

const LeftNavigation = () => {
    const [treeData] = useState(() => {
        return sideBarData;
    });

    return (        
        <NavList>
            {treeData.map(item => (
                <NavItem key={item.link} item={item} />
            ))}
        </NavList>        
    );
};


const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default React.memo(LeftNavigation);
