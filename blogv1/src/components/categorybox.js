import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const CategoryBox = () => {
    const { edges } = FeaturedPostsQuery()
    const data = GetProperData(edges);
    return (
        <ul className="categories">
           {data.map((c, i) => {
            return (
              <li key={i}>
                <Link to= {"../../" + c.name.toLowerCase()}>
                <p>{c.name}
                  <span>({c.count})</span></p>
                </Link>
              </li>
            )
          })} 
        </ul>
      )

    function GetProperData(edges) {
        let jsonObj = [];
        edges.map((c,i)=>{
            let data = c.node.frontmatter.pageTags;
            for(let index=0;index<data.length;index++){
                let temp = jsonObj.find(e => e.name === data[index])
                if (temp != undefined) { 
                    temp.count += 1
                } else {
                    
                    let item = {}
                    item ["name"] = data[index];
                    item ["count"] = 1;
                    jsonObj.push(item);
                }
            }            
        })
        return jsonObj;
    }
}

export default CategoryBox

export const FeaturedPostsQuery = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query BlogTags {
            allMarkdownRemark (                
                sort: {order: DESC, fields: [frontmatter___date]}
            ) {                
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
    return allMarkdownRemark
}