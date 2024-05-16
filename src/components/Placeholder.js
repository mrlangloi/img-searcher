import React from "react";
import ImageCard from "./ImageCard";

function Placeholder() {

  const photos = [
    {
      id: 1,
      src: {
        large: "https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg",
      },
      alt: "Top View Of Noodle soup",
      title: "Top View Photo Of Noodle Soup"
    },
    {
      id: 2,
      src: {
        large: "https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg",
      },
      alt: "Pink and Black Nintendo DS",
      title: "Pink And Black Nintendo DS"
    },
    {
      id: 3,
      src: {
        large: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg",
      },
      alt: "Orange Tabby Cat Near Window",
      title: "Orange Tabby Cat Near Window"
    }
  ]

  return (
    <div className="search-results">
      {photos.map((photo) => {
        return (
          <ImageCard photo={photo} key={photo.id} />
        )
      })}
    </div>
  )
}

export default Placeholder;