import React from "react";

function Placeholder() {
  return (
    <div className="search-results">
      <div className="search-result">
        <a href="https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg" target="_blank">
          <img src="https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Noodle soup" />
          <p>Noodle Soup</p>
        </a>
      </div>
      <div className="search-result">
        <a href="https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank">
          <img src="https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg" alt="Pink and Black Nintendo DS" />
          <p>Pink And Black Nintendo DS</p>
        </a>
      </div>
      <div className="search-result">
        <a href="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank">
          <img src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg" alt="Orange Tabby Cat Near Window" />
          <p>Orange Tabby Cat Near Window</p>
        </a>
      </div>
    </div>
  )
}

export default Placeholder;