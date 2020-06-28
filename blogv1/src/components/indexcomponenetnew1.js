import React from "react"
import BlogEntryNew from "./blogentrynew"

const IndexComponenetNew1 = ({ posts }) => {
  return (
    <div>
      {posts.map(({ node }) => {
        return <BlogEntryNew blogData={node} key={"_" + node.id}></BlogEntryNew>
      })}
    </div>
  )
}

export default IndexComponenetNew1