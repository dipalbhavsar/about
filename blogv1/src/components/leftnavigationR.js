import React from "react"
import NavigationItem from "./navigationItem"
import Image from "gatsby-image"
import Footer from "./footer"
// import $ from "jquery"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

export class LeftNavigationR extends React.Component { 
  
  constructor (props) {
    super(props);
   // this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false,
    };
  }

  addActiveClass(index) {
    const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
    
    var body = document.getElementsByTagName("BODY")[0];

    if(document.body.className == "offcanvas") {
      body.removeAttribute("class");
    } else {
      body.setAttribute("class", "offcanvas");
      body.classList.add("offcanvas");
    }

    this.setState({activeClasses});
  }

  render() {
    return (
      <>
        <Link href="#" className="js-dipal-nav-toggle dipal-nav-toggle"><i></i></Link>
        <aside id="dipal-aside" role="complementary">          
          <NavigationItem></NavigationItem>
          <Footer></Footer>
        </aside>
      </>
    );
  }
}
  