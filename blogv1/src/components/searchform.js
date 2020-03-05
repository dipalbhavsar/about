import React from "react"

const SearchForm = () => {
  return (
    <div className="sidebar-box pt-md-4">
      <h3 className="sidebar-heading">Search Here...</h3>
      <div action="#" className="search-form">
        <div className="form-group">
          <span className="icon icon-search"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Type a keyword and hit enter"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchForm