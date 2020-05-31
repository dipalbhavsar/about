import React from "react"
import data from "../data/categories.json"
import { Link } from "gatsby"
import styled from '@emotion/styled';

const CategoryBox = () => {
  return (
    <ul className="categories">
      {data.map((c, i) => {
        return (
          <li key={i}>
            <Link to={c.link}>
            <PStyle>{c.label}
              <span>({c.count})</span></PStyle>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
const ULCategory = styled.ul`

`;

const PStyle = styled.p`
  color:${p => p.theme.colors.label};
`;
const LabelStyle = styled.a`
  color: ${p => p.theme.colors.label};
  // position: relative;
  // margin-bottom: 10px;
  // padding-bottom: 10px;
  // border-bottom: 1px solid #dee2e6;
  list-style: none;
`;

export default CategoryBox
