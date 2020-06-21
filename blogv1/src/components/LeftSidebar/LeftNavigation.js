import styled from '@emotion/styled';
import React, { useState } from 'react';
import NavItem from './NavItem';
import sideBarData from "../../data/sidebarItems.json"
import Image from '../image';

const LeftNavigation = props => {
    const [treeData] = useState(() => {
        return sideBarData;
    });

    return ( 
     <>
        <center>
        <ImgWrapper><Image  alt="Dipal Bhavsar" filename="Dipal.jpg" /></ImgWrapper>
          {/* <Img style={{"borderRadius": "50%", "width" : "150px" }} fluid={data.imageOne.childImageSharp.fluid} /> */}
        <p style={{"fontSize":"30px", "fontFamily":"Brush Script MT" }}>Dipal Bhavsar</p></center>
        <NavList>
            {treeData.map(item => (
                <NavItem key={item.title} item={item} />
            ))}
        </NavList>        
    </>
    );
};

const ImgWrapper = styled.div`
width:120px;
`;
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default React.memo(LeftNavigation);
