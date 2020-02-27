import React from 'react'

class SearchForm extends React.Component {
    render() {
        return (
            <div className="sidebar-box pt-md-4">
                {/* <form action="#" className="search-form"> */}
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
                {/* </form> */}
            </div>
        )
    }
}

export default SearchForm