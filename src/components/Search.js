import React from "react";

function Search({query, updateQuery}) {
    return (
        <div className="search-bar">
            <label htmlFor="Search">
                <h3>Search</h3>
            </label>
            <input type="text" className="search-input"
            placeholder="Search Eboards Here By Spec..."
            onChange={updateQuery}
            value={query}
            />
        </div>
    )
}

export default Search;