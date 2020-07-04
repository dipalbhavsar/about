import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { groupBy } from "lodash"

const Featured = () => {
    const { edges } = FeaturedPostsQuery()
    const data = GetProperData(edges);
    console.log(data);
    return (
        <ul className="categories">
           {data.map((c, i) => {
            return (
              <li key={i}>
                <Link to={c.name.toLowerCase()}>
                <p>{c.name}
                  <span>({c.count})</span></p>
                </Link>
              </li>
            )
          })} 
        </ul>
      )

    function GetProperData(edges) {
        debugger;
        let jsonObj = [];
        edges.map((c,i)=>{
            let data = c.node.frontmatter.pageTags;
            for(let index=0;index<data.length;index++){
                debugger;
                let temp = jsonObj.find(e => e.name === data[index])
                if (temp != undefined) { // This is just for understanding. `undefined` inside `if` will give false. So you can use `if(!temp)`
                    temp.count += 1
                } else {
                    let item = {}
                    item ["name"] = data[index];
                    item ["count"] = 0;
                    jsonObj.push(item);
                }
                console.log(data[index])
            }
            debugger;
            console.log("pageTags " + c.node.frontmatter.pageTags);
        })
        return jsonObj;
    }
}


export default Featured

export const FeaturedPostsQuery = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query FeaturedBlogsport {
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