import React from "react"
import NavigationItem from "./navigationItem"
import Footer from "./footer"
import $ from "jquery"

const LeftNavigation = () => {
  return (
    <>
      <a
        href="./"
        className="js-dipal-nav-toggle dipal-nav-toggle"
        onClick={js_dipal_nav_toggle_click(this)}
      >
        <i></i>
      </a>
      <aside id="dipal-aside" role="complementary" className="js-fullheight">
        <h1 id="dipal-logo" className="mb-4">
          Dipal <span>Bhavsar</span>
        </h1>
        <NavigationItem></NavigationItem>
        {/* <Footer></Footer> */}
      </aside>
    </>
  )
}

function js_dipal_nav_toggle_click(e) {
  // var $this = $(this);
  // if ($('body').hasClass('offcanvas')) {
  //   $this.removeClass('active');
  //   $('body').removeClass('offcanvas');
  // } else {
  //   $this.addClass('active');
  //   $('body').addClass('offcanvas');
  // }
  // mobileMenuOutsideClick();
  // // contentWayPoint();
  // fullHeight();
  // loader();
  // burgerMenu();
}

var mobileMenuOutsideClick = function() {
  $(document).click(function(e) {
    var container = $("#dipal-aside, .js-dipal-nav-toggle")
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas")
        $(".js-dipal-nav-toggle").removeClass("active")
      }
    }
  })

  $(window).scroll(function() {
    if ($("body").hasClass("offcanvas")) {
      $("body").removeClass("offcanvas")
      $(".js-dipal-nav-toggle").removeClass("active")
    }
  })
}

var contentWayPoint = function() {
  var i = 0
  $(".ftco-animate").waypoint(
    function(direction) {
      if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
        i++

        $(this.element).addClass("item-animate")
        setTimeout(function() {
          $("body .ftco-animate.item-animate").each(function(k) {
            var el = $(this)
            setTimeout(
              function() {
                var effect = el.data("animate-effect")
                if (effect === "fadeIn") {
                  el.addClass("fadeIn ftco-animated")
                } else if (effect === "fadeInLeft") {
                  el.addClass("fadeInLeft ftco-animated")
                } else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight ftco-animated")
                } else {
                  el.addClass("fadeInUp ftco-animated")
                }
                el.removeClass("item-animate")
              },
              k * 50,
              "easeInOutExpo"
            )
          })
        }, 100)
      }
    },
    { offset: "95%" }
  )
}

// $(window).stellar({
//   responsive: true,
//   parallaxBackgrounds: true,
//   parallaxElements: true,
//   horizontalScrolling: false,
//   hideDistantElements: false,
//   scrollProperty: 'scroll'
// });

var fullHeight = function() {
  $(".js-fullheight").css("height", $(window).height())
  $(window).resize(function() {
    $(".js-fullheight").css("height", $(window).height())
  })
}

// loader
var loader = function() {
  setTimeout(function() {
    if ($("#ftco-loader").length > 0) {
      $("#ftco-loader").removeClass("show")
    }
  }, 1)
}

var burgerMenu = function() {
  $(".js-dipal-nav-toggle").on("click", function(event) {
    event.preventDefault()
    var $this = $(this)

    if ($("body").hasClass("offcanvas")) {
      $this.removeClass("active")
      $("body").removeClass("offcanvas")
    } else {
      $this.addClass("active")
      $("body").addClass("offcanvas")
    }
  })
}

export default LeftNavigation
