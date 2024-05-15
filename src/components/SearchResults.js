import React from 'react';

function SearchResults(props) {

  const photos = props.photos;



  return (
    <div className="search-results-div">

      <div className="search-results">

        {photos.map((photo) => {
          return (
            <div className="search-result" key={photo.id}>
              <a href={photo.src.large} target="_blank">
                <img src={photo.src.large} alt={photo.alt} />
                <p>{photo.alt}</p>
              </a>
            </div>
          )
        })}



        {/* <div className="search-result">
        <a href="https://www.pexels.com/photo/top-view-photo-of-ramen-soup-2591594/" target="_blank">
          <img src="https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Noodle soup" />
          Noodle Soup
        </a>
      </div>
      <div className="search-result">
        <a href="https://www.pexels.com/photo/top-view-photo-of-ramen-soup-2591594/" target="_blank">
          <img src="https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Noodle soup" />
          Noodle Soup
        </a>
      </div>
      <div className="search-result">
        <a href="https://www.pexels.com/photo/top-view-photo-of-ramen-soup-2591594/" target="_blank">
          <img src="https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Noodle soup" />
          Noodle Soup
        </a>
      </div> */}
      </div>

      <button id="load-more-btn">Load More</button>
    </div>
  );
}

export default SearchResults;