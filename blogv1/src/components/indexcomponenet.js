import React from 'react'
import IndexPagination from './indexpagination'
import BlogEntry from './blogentry';
import BlogData from '../data/blogs.json';
// import { graphql } from 'gatsby';

const IndexComponent = () => {
    return (
        <div className="col-xl-8 py-5 px-md-5">           
            <div className="row pt-md-4">
                <div className="col-md-12">
                    { 
                        BlogData.blogs.map((d, i) => {
                            return <BlogEntry blogData = {d} key={'_'+i}></BlogEntry>
                        })
                    }            
                </div>
            </div>
            <IndexPagination selectedIndex={10}></IndexPagination>
        </div>
    )
}
export default IndexComponent

// export const pageQuery = graphql`
//   query {
//     allDataJson {
//         edges {
//             node {
//                 blogs {
//                     pageId
//                     pageTitle
//                     pageDescription    
//                 }
//             }
//         }
//     }
//   }
// `

