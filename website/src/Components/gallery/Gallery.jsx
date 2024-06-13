import React, { useState } from 'react';
import './gallery.css';

const Gallery = () => {
  const data = [
    {
      id: 1,
      title: "Hard Rock Cafe",
      image: "hrc.webp"
    },
    {
      id: 2,
      title: "Monolitheon",
      image: "bandphoto.webp"
    },
    {
      id: 3,
      title: "Wacken Metal Battle",
      image: "wmb.webp"
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(data[index].image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % data.length;
    setSelectedImage(data[nextIndex].image);
    setCurrentIndex(nextIndex);
  };

  const showPrevious = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setSelectedImage(data[prevIndex].image);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className='gallery_container'>
      <h1>Gallery</h1>
      <div className="card_container">
        {data.map((card, index) => (
          <div key={card.id} className="card" onClick={() => openModal(index)}>
            <img src={`/assets/${card.image}`} alt={card.title} />
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal_content" src={`/assets/${selectedImage}`} alt="Enlarged view" />
          <a className="prev" onClick={showPrevious}>&#10094;</a>
          <a className="next" onClick={showNext}>&#10095;</a>
        </div>
      )}
    </div>
  );
};

export default Gallery;
