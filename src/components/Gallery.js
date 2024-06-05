// Gallery.js

import React from 'react';
import Image1 from '../gallery/Image1.JPG';
import Image2 from '../gallery/Image2.JPG';
import Image3 from '../gallery/Image3.JPG';

import '../gallery.css'; // Import your stylesheet

function Gallery() {
  const galleryImages = [Image1, Image2, Image3];

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="image-gallery">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
