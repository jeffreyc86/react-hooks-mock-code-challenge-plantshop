import React from "react";

function Search({query, setQuery}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={query}
        placeholder="Type a name to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
