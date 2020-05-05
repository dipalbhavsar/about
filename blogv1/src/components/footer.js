import React from "react"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { useStaticQuery, graphql } from "gatsby"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query SocialImages {
      facebook: file(
        absolutePath: { regex: "img/social-facebook-blue-icon.png/" }
      ) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(
        absolutePath: { regex: "img/social-twitter-box-blue-icon.png/" }
      ) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(absolutePath: { regex: "img/github-icon.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      email: file(absolutePath: { regex: "img/email-2-icon.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div id="footer" className="dipal-footer pfooter">
      <div className="inner">
        <ul className="social-network social-circle">
          <li>
            {" "}
            <a href="https://www.facebook.com/dipal_bhavsar/">
              <Image
                fixed={data.facebook.childImageSharp.fixed}
                alt="facebook"
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 15,
                  minHeight: 15,
                  borderRadius: `50%`,
                }}
                imgStyle={{
                  borderRadius: `100%`,
                }}
                className="img img-2"
              />{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.twitter.com/dipal_bhavsar/">
              <Image
                fixed={data.twitter.childImageSharp.fixed}
                alt="twitter"
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 15,
                  minHeight: 15,
                  borderRadius: `50%`,
                }}
                imgStyle={{
                  borderRadius: `100%`,
                }}
                className="img img-2"
              />
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.github.com/dipalbhavsar/">
              <Image
                fixed={data.github.childImageSharp.fixed}
                alt="github"
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 15,
                  minHeight: 15,
                  borderRadius: `50%`,
                }}
                imgStyle={{
                  borderRadius: `100%`,
                }}
                className="img img-2"
              />
            </a>
          </li>
          <li>
            {" "}
            <a href="mailto:dipal.bhavsar@gmail.com">
              <Image
                fixed={data.email.childImageSharp.fixed}
                alt="email"
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 15,
                  minHeight: 15,
                  borderRadius: `50%`,
                }}
                imgStyle={{
                  borderRadius: `100%`,
                }}
                className="img img-2"
              />
            </a>
          </li>
        </ul>
        <span>
          <p>&copy; Dipal BHavsar</p>
        </span>
        <span>
          <p>Powered by GatsBy and hosted in GitHub Page</p>
        </span>
      </div>
    </div>
  )
}

export default Footer
