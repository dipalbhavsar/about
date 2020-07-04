import React from "react"
// import data from "../data/categories.json"
import { Link, useStaticQuery } from "gatsby"
import styled from '@emotion/styled';
import {CategoriesQuery} from '../queries/categoryQuery';

const CategoryBox1 = () => {
//   const data = useStaticQuery(graphql`
//   query {
//     allMarkdownRemark(
//       limit: 3
//       filter: { frontmatter: { pageTags: { in: ["Agile","Azure","React","SharePoint", "IdentityServer", "CodeReview"] } } }
//     ) {
//       group(field: frontmatter___pageTags) {
//           name: fieldValue
//           totalCount
//       }      
//     }
//   }
// `);
const { categoryData } = CategoriesQuery();
alert(categoryData);
return (
  <ul className="categories">
    {categoryData.map((c, i) => {
      return (
        <li key={i}>
          <Link to={c.name.toLowerCase()}>
          <PStyle>{c.name}
            <span>({c.totalCount})</span></PStyle>
          </Link>
        </li>
      )
    })}
  </ul>
)

  // return (
  //   <StaticQuery
  //     query={graphql`
  //       query {
  //         allMarkdownRemark(
  //           filter: { frontmatter: { pageTags: { in: ["Agile","Azure","React","SharePoint", "IdentityServer", "CodeReview"] } } }
  //         ) {
  //           group(field: frontmatter___pageTags) {
  //               name: fieldValue
  //               totalCount
  //           }      
  //         }
  //       }
  //     `
  //   }
  //   render = {data => (
  //     <ul className="categories">
  //       {data.map((c, i) => {
  //         return (
  //           <li key={i}>
  //             <Link to={c.name.toLowerCase()}>
  //             <PStyle>{c.name}
  //               <span>({c.totalCount})</span></PStyle>
  //             </Link>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //     )}
  //   /> 
  // )
};

const PStyle = styled.p`
  color:${p => p.theme.colors.label};
`;

export default CategoryBox1
