import React, { useState } from "react";
import { beginSearch } from "../utils/search";

function SearchForm(props) {

  const [searchTxt, setSearchTxt] = useState("")

  async function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(`Searching for ${searchTxt}`);
    const results = await beginSearch(searchTxt);
    props.setPhotos(results);
  }
  
  function handleSearchTxtChange(e) {
    setSearchTxt(e.target.value);
  }

  return (

    <div className="search-form" onSubmit={handleSearchSubmit}>
      <form action="">
        <input type="text" id="search-txt" placeholder="Search images..." onChange={handleSearchTxtChange} value={searchTxt}/>
        <button type="submit" id="search-btn">Search</button>
      </form>
    </div>

  )
}

export default SearchForm;