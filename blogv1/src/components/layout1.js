import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import { ThemeProvider } from 'styled-components';
import Header1 from "./header1"
import "./layout1.css"
// import FocusLock from 'react-focus-lock';

const Layout1 = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (    
      <>
        <Header1 siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>      
      </>    
  );
}

Layout1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout1
