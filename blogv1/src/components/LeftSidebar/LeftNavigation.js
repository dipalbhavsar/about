import styled from '@emotion/styled';
import React, { useState } from 'react';
import NavItem from './NavItem';
import sideBarData from "../../data/sidebarItems.json"
import Image from '../image';
import SocialIcons from '../SocialIcons';
import ColorTheme from '../ColorTheme';

const LeftNavigation = props => {
    const [treeData] = useState(() => {
        return sideBarData;
    });

    return ( 
     <>
        <center>
        <ImgWrapper><Image  alt="Dipal Bhavsar" filename="Dipal.jpg" /></ImgWrapper>
        <p style={{"fontSize":"30px", "fontFamily":"Brush Script MT" }}>Dipal Bhavsar</p></center>
        <NavList>
            {treeData.map(item => (
                <NavItem key={item.title} item={item} />
            ))}
        </NavList>   
        <Footer>
            <Hr/>  
            <table><tbody><tr><td><SocialIcons/></td><td><ColorTheme/></td></tr></tbody></table>     
        </Footer>             
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

const Hr = styled.hr`
width: 100%;
background-color:red;
`;

const Footer = styled.footer`
    position: absolute; 
    bottom: 0;
    width: 100%;
    // background: ${p => p.theme.colors.text};
    color: ${p => p.theme.colors.colors};
    margin-bottom: 15px;
`;

export default React.memo(LeftNavigation);
