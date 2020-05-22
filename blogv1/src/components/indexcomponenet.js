import React from "react"
import IndexPagination from "./indexpagination"
import BlogEntry from "./blogentry"
import BlogData from "../data/blogs.json"

const IndexComponent = ({ BlogEntryType }) => {
  var filtered = [];
  console.log("BlogEntryType" + BlogEntryType);
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
    <div className="col-xl-8 py-5 px-md-5">
      <div className="row pt-md-4">
        <div className="col-md-12">
          { 
          filtered
            .sort(a => a.pageDate)
            .map((d, i) => {
              return <BlogEntry blogData={d} key={"_" + i}></BlogEntry>
            })}
        </div>
      </div>
      <IndexPagination selectedIndex={10}></IndexPagination>
    </div>
  )
}
export default IndexComponent
