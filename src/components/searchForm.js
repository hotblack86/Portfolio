import React from 'react';

const SearchForm = ({search, getSearch, updateSearch}) => {
  return(
    <div>
      <form onSubmit={getSearch} className="search-form">
       <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
       />
       <button className="title" type="submit">
         Search
       </button>
      </form>
    </div>
  )
}

export default SearchForm;     