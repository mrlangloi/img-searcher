import React, { useState } from "react";
import { beginSearch } from "../utils/search";

function SearchForm() {

  const [searchTxt, setSearchTxt] = useState("")

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(`Searching for ${searchTxt}`);
    beginSearch(searchTxt);
  }
  
  function handleSearchTxtChange(e) {
    setSearchTxt(e.target.value);
  }

  return (

    <div className="search-form" onSubmit={handleSearchSubmit}>
      <form action="">
        <input type="text" id="search-txt" placeholder="Search images..." onChange={handleSearchTxtChange}/>
        <button type="submit" id="search-btn">Search</button>
      </form>
    </div>

  )
}

export default SearchForm;