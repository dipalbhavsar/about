import React from 'react'
import IndexPagination from './indexpagination'
import BlogEntry from './blogentry';
import BlogData from '../data/blogs.json';

const IndexComponent = ({BlogEntryType}) => {
    const filtered = BlogEntryType.length == 1 ? BlogData.blogs : BlogData.blogs.filter(r=>r.pageMenu===BlogEntryType);
    return (
        <div className="col-xl-8 py-5 px-md-5">           
            <div className="row pt-md-4">
                <div className="col-md-12">
                    {
                        // blogData = this.BlogEntryType.length > 0 ? BlogData.blogs.filter(r=>r.pageMenu===this.BlogEntryType):BlogData.blogs;
                        filtered.sort(a=>a.pageDate).map((d, i) => {
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

