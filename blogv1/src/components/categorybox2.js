import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const CategoryBox2 = () => {
    const { categoryData } = GetAllTags();
    return (
        <ul className="categories">
          {categoryData.map((c, i) => {
            return (
              <li key={i}>
                <Link to={c.fieldValue.toLowerCase()}>
                    <p>{c.fieldValue}<span>({c.totalCount})</span></p>
                </Link>
              </li>
            )
          })}
        </ul>
      )
}

export default CategoryBox2

export const GetAllTags = () => {
    const {allMarkDownRemark} = useStaticQuery(graphql`
    query {
     allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    pageTags
                }
            }
        }
      }
    }
 `)
 return allMarkDownRemark
}

// export const CategoryBoxQuery = () => {
//     const { allMarkdownRemark } = useStaticQuery(graphql`
//         query {
//             allMarkdownRemark {
//                 group(field: frontmatter___pageTags) {
//                   totalCount
//                   fieldValue
//                 }
//             }
//         }  
//     `)

//     return allMarkdownRemark
// }