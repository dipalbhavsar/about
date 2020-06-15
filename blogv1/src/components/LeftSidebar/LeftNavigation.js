import styled from '@emotion/styled';
import React, { useState } from 'react';
import NavItem from './NavItem';
import sideBarData from "../../data/sidebarItems.json"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LeftNavigation = props => {
    const data = useStaticQuery(graphql`
    query {
        imageOne: file(relativePath: { eq: "Dipal.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

    const [treeData] = useState(() => {
        return sideBarData;
    });

    return ( 
     <>
        <center><Img style={{"border-radius": "50%", "width" : "100px" }} fluid={data.imageOne.childImageSharp.fluid} />
        <p style={{"font-size":"30px", "fontFamily":"Brush Script MT" }}>Dipal Bhavsar</p></center>
        <NavList>
            {treeData.map(item => (
                <NavItem key={item.link} item={item} />
            ))}
        </NavList>        
    </>
    );
};

const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Dipal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default React.memo(LeftNavigation);
