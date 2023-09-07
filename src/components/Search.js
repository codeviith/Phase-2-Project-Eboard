import React from "react";

function Search({query, updateQuery}) {
    return (
        <div className="search-bar">
            <label htmlFor="Search"></label>
            <h3>Search</h3>
            <input type="text" id="search-input"
            placeholder="Search Eboard Here By Spec..."
            onChange={updateQuery}
            value={query}
            />
        </div>
    )
}

export default Search;