import React, { useEffect } from "react"
import Helmet from 'react-helmet'
import { Link } from "gatsby"

export class NavButton extends React.Component { 
    constructor (props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = {          
          width: 0
        };
      }
      addActiveClass() { 
          var body = document.getElementsByTagName("BODY")[0];
          if(window.innerWidth > 996) {
            if(document.body.className === "offcanvas") {
              body.removeAttribute("class");
            }
          } else {
            body.setAttribute("class", "offcanvas");
          }
      }
      listenToScroll = () => {
        var body = document.getElementsByTagName("BODY")[0];
        if(document.body.className === "offcanvas") {
          body.removeAttribute("class");
        }
        var navToogle = document.getElementsByClassName('js-dipal-nav-toggle');
        if(navToogle!= null && navToogle.classList != null && navToogle.classList.length > 0) {
          navToogle.classList.remove("active");
        }
      }
      handleLoad() {
        if(window.innerWidth > 996) {
          this.addActiveClass();
        }  
      }
      componentDidMount() {
        this.updateWindowDimensions();
        this.addActiveClass();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.listenToScroll)
        window.addEventListener('load', this.handleLoad);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.listenToScroll)
        window.removeEventListener('load', this.handleLoad)  
      }
      updateWindowDimensions() {
        console.log('Width: ' + window.innerWidth + ', Height: ' + window.innerHeight); 
        var testarray = document.getElementsByClassName('js-fullheight');
        for(var i = 0; i < testarray.length; i++)
        {
            testarray[i].style.height = window.innerHeight;
        }
        if(window.innerWidth > 996) {
          this.setState({ width: window.innerWidth });
        }
      }
      render() {
        return (
            <Link to="#" className="js-dipal-nav-toggle dipal-nav-toggle" onClick = {this.addActiveClass()} ><i></i></Link>
        );
      }
}