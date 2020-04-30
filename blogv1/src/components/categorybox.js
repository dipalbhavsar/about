import React from 'react'
import data from '../data/categories.json';
import { Link } from "gatsby"

const CategoryBox = () => {
    return (
        <div className="sidebar-box ftco-animate">
            <h3 className="sidebar-heading">Categories</h3>
            <ul className="categories">
                {
                   data.map((c,i)=>{
                        return <li key={i}><Link to={c.link}>{c.label}<span>({c.count})</span></Link></li>
                   })
                }
            </ul>
        </div>
    )
}

export default CategoryBox