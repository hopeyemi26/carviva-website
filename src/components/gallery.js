import React from "react";

const Gallery = ({ images }) => (
  <div className="columns">
    {images.map(image => (
      <div className="column">
        <img src={image} alt="Gallery Photo" />
      </div>
    ))}
  </div>
);

export default Gallery;
