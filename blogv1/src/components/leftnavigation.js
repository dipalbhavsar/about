import React from 'react'
import NavigationItem from "./navigationItem";
import Footer from "./footer";
import './style.css';

class LeftNavigation extends React.Component {
    render() {
        return (
            <aside id="dipal-aside" role="complementary" className="js-fullheight">
				<h1 id="dipal-logo" className ="mb-4">Dipal <span>Bhavsar</span></h1>
			    <NavigationItem></NavigationItem>
                {/* <Footer></Footer> */}
        	</aside>
        )
    }
}

export default LeftNavigation;