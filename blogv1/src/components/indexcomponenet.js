import React from "react"
// import IndexPagination from "./indexpagination"
import BlogEntry from "./blogentry"
import BlogData from "../data/blogs.json"
// import styled from "@emotion/styled"

const IndexComponent = ({ BlogEntryType }) => {
  var filtered = [];
  if(BlogEntryType === "*" || BlogEntryType === "Technology" || BlogEntryType === "Agile") {
    filtered = BlogEntryType.length === 1 ? BlogData.blogs : BlogData.blogs.filter(r => r.pageMenu === BlogEntryType)
  }
  else if (BlogEntryType === "SharePoint" || BlogEntryType === "React" || BlogEntryType === "Angular"){
    for(var index=0; index<BlogData.blogs.length;index++) {
      var pageTags = BlogData.blogs[index].pageTags;
      for(var j=0;j<pageTags.length;j++) {
        if(pageTags[j].toLowerCase() === BlogEntryType.toLowerCase()) {
          filtered.push(BlogData.blogs[index]); 
          break;
        }
      }
    }
  }  
  return (
    <div>
      { 
      filtered
        .sort(a => a.pageDate)
        .map((d, i) => {
          return <BlogEntry blogData={d} key={"_" + i}></BlogEntry>
        })}
    </div>      
  )
}
export default IndexComponent
