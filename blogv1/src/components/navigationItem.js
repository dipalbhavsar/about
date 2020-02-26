import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

class NavigationItem extends React.Component {
    render() {
        return (
            <nav id="dipal-main-menu" role="navigation">
				<ul>
					<li className="dipal-active"><Link to={`/`}>Home</Link></li>
					<li><Link to={`/technology`}>Technology</Link></li>
					<li><Link to={`/agile`}>Agile</Link></li>
					<li><Link to={`/about`}>About</Link></li>
					<li><Link to={`/contact`}>Contact</Link></li>					
				</ul>
			</nav>
        );
    }
}

export default NavigationItem;