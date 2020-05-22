import React from "react"
import { Link } from "gatsby"
import data from "../data/sidebarItems.json"

const NavigationItem = () => {
  return (
    <nav id="dipal-main-menu" role="navigation">
      <ul>
        {data.map((d, i) => {
          return (
            <li key={d.label}>
              <Link to={d.link} activeClassName={"dipal-active"} onClick={menuClicked(d.label)}>
                {d.label}
              </Link>
            </li>
          )
          // if(i==0)
          //   return <li key={d.label} className="dipal-active"><Link to={d.link}>{d.label}</Link></li>
          // else
          //     return <li key={d.label}><Link to={d.link}>{d.label}</Link></li>
        })}
      </ul>
    </nav>
  )
}

function menuClicked(e) {
// debugger;

// var body = document.getElementsByTagName("BODY")[0];
//   if(document.body.className == "offcanvas") {
//     body.removeAttribute("class");
//   } else {
//    // body.setAttribute("class", "offcanvas");
//   }  
}

export default NavigationItem
