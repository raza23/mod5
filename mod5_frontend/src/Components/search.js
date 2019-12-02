import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder= {props.searchby}
        onChange={props.handleSearch}
      />
    </div>
  );
}

export default Search;
