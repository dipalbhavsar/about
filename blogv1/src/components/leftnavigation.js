import React from "react"
import NavigationItem from "./navigationItem"
import Image from "gatsby-image"
import Footer from "./footer"
// import $ from "jquery"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
import { NavButton } from './navbutton'


const LeftNavigation1 = () => {
  const data = useStaticQuery(graphql`
    query BioAvatar1 {
      avatar: file(absolutePath: { regex: "/dipal.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <>
        <NavButton></NavButton>
        <aside id="dipal-aside" role="complementary">
        <center>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 150,
              minHeight: 150,
              borderRadius: `50%`,
            }}
            imgStyle={{
              borderRadius: `100%`,
            }}
          />
          <h1 id="dipal-logo" className="mb-4">
            {author}
          </h1>
        </center>
        <NavigationItem></NavigationItem>
        <Footer></Footer>
      </aside>
    </>
  )
}

/*
$(document).ready(function() {
  $(window).resize(function() {
    if ($(window).width() < 966) {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas")
      } else {
        $("body").addClass("offcanvas")
      }
    } else {
      $("body").removeClass("offcanvas")
    }
  })
  // counter();
  // contentWayPoint();
})



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

var counter = function() {
  $("#section-counter").waypoint(
    function(direction) {
      if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
          ","
        )
        $(".number").each(function() {
          var $this = $(this),
            num = $this.data("number")
          console.log(num)
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step,
            },
            7000
          )
        })
      }
    },
    { offset: "95%" }
  )
}
*/
export default LeftNavigation1
