import React, { useState } from 'react';

function ImageCard(props) {

  const { photo } = props;

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="img-card" key={photo.id}>
      <a href={photo.src.large} target="_blank" rel="noreferrer">
        <img src={photo.src.large} alt={photo.alt} />
        <p>{photo.alt}</p>
      </a>
    </div>
  )
}

export default ImageCard;