import React from "react"
import { Link } from "gatsby"
import $ from 'jquery';
import { rhythm, scale } from "../utils/typography"
import LeftNavigation from "./leftnavigation";
import SearchForm from "./searchform";
import CategoryBox from "./categorybox";
import Archives from "./archives";
import PopularArticles from "./populararticle";
import TagControl from "./tagcontrol";
import NewsSubscription from "./newsSubscription";
import Declaration from "./declaration";

const Layout = ({ location, title, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <div id="dipal-page">
        <a href="#" className="js-dipal-nav-toggle dipal-nav-toggle" onClick={js_dipal_nav_toggle_click(this)}><i></i></a>
        <header>{header}</header>
        <LeftNavigation></LeftNavigation>
        <div id="dipal-main">
          <section className="ftco-section ftco-no-pt ftco-no-pb">
            <div className="container">
              <div className="row d-flex">
                <div className="col-xl-8 py-5 px-md-5">
                  <div className="row pt-md-4">
                    <div className="col-md-12">
                      <main>{children}</main>
                    </div>
                  </div>
                </div>
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
    </div>
  )

}

function js_dipal_nav_toggle_click(e) {
  var $this = $(this);
  if ($('body').hasClass('offcanvas')) {
    $this.removeClass('active');
    $('body').removeClass('offcanvas');
  } else {
    $this.addClass('active');
    $('body').addClass('offcanvas');
  }
};

var mobileMenuOutsideClick = function () {
  $(document).click(function (e) {
    var container = $("#dipal-aside, .js-dipal-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-dipal-nav-toggle').removeClass('active');
      }
    }
  });

  $(window).scroll(function () {
    if ($('body').hasClass('offcanvas')) {
      $('body').removeClass('offcanvas');
      $('.js-dipal-nav-toggle').removeClass('active');
    }
  });
};

mobileMenuOutsideClick();
export default Layout
