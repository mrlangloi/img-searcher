import React, { useEffect, useState } from 'react';

function ImageCard(props) {

  const { photo } = props;

  const [loaded, setLoaded] = useState(false);

  // Waits for the image to load before setting the loaded state to true
  // Once loaded, the image will fade in using CSS
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    }
    img.src = photo.src.large;
  }, [photo.src.large]);

  return (
    <div className={`img-card ${loaded ? "loaded" : ""}`}>
      <a href={photo.src.large} target="_blank" rel="noreferrer">
        <img src={photo.src.large} alt={photo.alt} />
        <p>{photo.alt}</p>
      </a>
    </div>
  )
}

export default ImageCard;