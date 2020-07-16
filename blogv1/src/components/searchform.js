import React from "react"

const SearchForm = ({data}) => {  
  const handleInputChange = event => {
    debugger;
    const query = event.target.value
  }

  return (
    <div action="#" className="search-form">
      <div className="form-group">
        <span className="icon icon-search"></span>
        <input
          type="text"
          className="form-control"
          placeholder="Type a keyword and hit enter"
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default SearchForm
