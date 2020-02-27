import React from 'react'

class CategoryBox extends React.Component {
    render() {
        return (
            <div className="sidebar-box ftco-animate">
                <h3 className="sidebar-heading">Categories</h3>
                <ul className="categories">
                    <li>
                        {/* <a href="#">Fashion <span>(6)</span></a> */}
                        <button><span>(6)</span></button>
                    </li>
                    {/* <li>
                        <a href="#">Technology <span>(8)</span></a>
                    </li>
                    <li>
                        <a href="#">Travel <span>(2)</span></a>
                    </li>
                    <li>
                        <a href="#">Food <span>(2)</span></a>
                    </li>
                    <li>
                        <a href="#">Photography <span>(7)</span></a>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default CategoryBox