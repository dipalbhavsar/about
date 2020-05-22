import React from "react"
import IndexPagination from "./indexpagination"
import BlogEntry from "./blogentry"
import BlogData from "../data/blogs.json"

const CategoryComponent = ({ BlogEntryType }) => {  
  function getNodes() {
    var finalData = [];
    for(var index=0; index<BlogData.blogs.length;index++) {
      var a = BlogData.blogs[index].pageTags.find(BlogEntryType);
      if(a!=null) finalData.push(BlogData.blogs[index]); 
    }
    return finalData;
  }
  const filtered = this.getNodes();
  
  console.log('total length = ' + filtered.length);
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
  );
}
export default CategoryComponent
