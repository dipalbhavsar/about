import React from "react"
import LeftNavigation from "./leftnavigation"
import SearchForm from "./searchform"
import CategoryBox from "./categorybox"
import Archives from "./archives"
import PopularArticles from "./populararticle"
import TagControl from "./tagcontrol"
import NewsSubscription from "./newsSubscription"
import Declaration from "./declaration"

const Layout = ({ location, title, data, children }) => {
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

export default Layout
