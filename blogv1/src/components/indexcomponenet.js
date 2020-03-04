import React from 'react'
import IndexPagination from './indexpagination'
const IndexComponent = () => {
    return (
        <div className="col-xl-8 py-5 px-md-5">           
            <div className="row pt-md-4">
                <div className="col-md-12">
                    <div className="blog-entry ftco-animate d-md-flex">                        
                        <div className="text text-2 pl-md-4">
                            <h3 className="mb-2">
                                <span>Conducting Effective Code Reviews</span></h3>
                            <p className="mb-4">Learn about the things to pay attention to, and what to
                                automate while reviewing code so that you can increase the speed and the
                                        quality of code reviews in your organization.</p>
                        </div>
                    </div>
                </div>
            </div>
            <IndexPagination selectedIndex={10}></IndexPagination>
        </div>
    )
}
export default IndexComponent