import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

function SearchImages() {

  const [photos, setPhotos] = useState([]);

  return (
    <div className="search-images-div">
      <h1>Image Search</h1>

      <SearchForm setPhotos={setPhotos} />

      <SearchResults photos={photos} setPhotos={setPhotos} />
    </div>
  )
}

export default SearchImages;