import React from 'react'
import { Link } from "gatsby"

class NavigationItem extends React.Component {
    render() {
        return (
            <nav id="dipal-main-menu" role="navigation">
				<ul>
					<li className="dipal-active"><Link to={`/`}>Home</Link></li>
					<li><Link to={`/`}>Fashion</Link></li>
					<li><Link to={`/`}>Travel</Link></li>
					<li><Link to={`/`}>About</Link></li>
					<li><Link to={`/`}>Contact</Link></li>					
				</ul>
			</nav>
        );
    }
}

export default NavigationItem;