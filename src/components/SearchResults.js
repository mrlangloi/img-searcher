import React from 'react';
import { loadMore } from '../utils/search';
import ImageCard from './ImageCard';
import Placeholder from './Placeholder';

function SearchResults(props) {

  const photos = props.photos;

  if(photos === undefined) {
    return (
      <div className="search-results-div">
        <h3>No results found</h3>
      </div>
    )
  }
  else if(photos.length === 0) {
    return (
      <Placeholder />
    )
  }

  async function handleLoadMore(e) {
    e.preventDefault();
    const results = await loadMore();
    props.setPhotos(results);
  }

  return (
    <div className="search-results-div">
      <div className="search-results">
        {photos.map((photo) => {
          return (
            <ImageCard photo={photo} key={photo.id}/>
          )
        })}
      </div>
      <button id="load-more-btn" onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default SearchResults;