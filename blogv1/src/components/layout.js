import React from "react"
// import { Link } from "gatsby"
// import { rhythm, scale } from "../utils/typography"
import LeftNavigation from "./leftnavigation"
import SearchForm from "./searchform"
import CategoryBox from "./categorybox"
import Archives from "./archives"
import PopularArticles from "./populararticle"
import TagControl from "./tagcontrol"
import NewsSubscription from "./newsSubscription"
import Declaration from "./declaration"
// import { graphql } from 'gatsby'

const Layout = ({ location, title, data, children }) => {
  // const siteCategory = data.site.siteMetadata.categories

  // const rootPath = `${__PATH_PREFIX__}/`
  // let header

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <div id="dipal-page">
      <LeftNavigation></LeftNavigation>
      <div id="dipal-main">
        <section className="ftco-section ftco-no-pt ftco-no-pb">
          <div className="container">
            <div className="row d-flex">
              {children}
              <div className="col-xl-4 sidebar ftco-animate bg-light pt-5">
                <SearchForm></SearchForm>
                {/* <CategoryBox data = {siteData.site.siteMetadata.categories}></CategoryBox> */}
                <CategoryBox></CategoryBox>
                <PopularArticles></PopularArticles>
                <TagControl></TagControl>
                <NewsSubscription></NewsSubscription>
                <Archives></Archives>
                <Declaration></Declaration>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


{/* <header>{header}</header> */ }
export default Layout
