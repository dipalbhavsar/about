import React from 'react'
import Moment from 'react-moment';

const BlogEntry = ({ blogData }) => {
    return (
        <div className="blog-entry ftco-animate d-md-flex">
            <a href={blogData.pageLink} class="img img-2" style={{ backgroundImage: `url(` + blogData.pageImage + `)` }} target="_blank"></a>
            <div className="text text-2 pl-md-4">
                <h3 className="mb-2"><a href={blogData.pageLink} target="_blank">{blogData.pageTitle}</a></h3>
                <div className="meta-wrap">
					<p className="meta">                        
                        <span><Moment format="DD-MMM-YYYY" date={blogData.pageDate}></Moment></span>
                        <span><a href="single">{blogData.pageCategory}</a></span>
				    	<span>{blogData.pageCommentCount}</span>
				    </p>
			    </div>
                <p className="mb-4">{blogData.pageDescription}</p>
                <p><a href={blogData.pageLink} className="btn-custom" target="_blank">Read More <span className="ion-ios-arrow-forward"></span></a></p>
            </div>
        </div>
    )    
}

export default BlogEntry