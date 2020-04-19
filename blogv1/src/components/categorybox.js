import React from 'react'
import data from '../data/categories.json';


const CategoryBox = () => {
    return (
        <div className="sidebar-box ftco-animate">
            <h3 className="sidebar-heading">Categories</h3>
            <ul className="categories">
                {
                   data.map((c,i)=>{
                        return <li key={i}><a href={c.link}>{c.label}<span>({c.count})</span></a></li>
                   })
                }
            </ul>
        </div>
    )
}

export default CategoryBox