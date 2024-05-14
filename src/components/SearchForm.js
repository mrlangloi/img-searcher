import React from "react";
import { handleSearchSubmit, handleSearchTxtChange } from "../utils/searchFunctions";

function SearchForm() {

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