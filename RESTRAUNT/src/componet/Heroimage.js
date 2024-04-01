import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import images1 from '../assets/images1.jpeg';
import images2 from '../assets/images2.jpeg';
import image5 from '../assets/image5.jpeg';

const slidesData = [
  { id: 1, image: images1, caption: 'Slide 1 Caption' },
  { id: 2, image: images2, caption: 'Slide 2 Caption' },
  { id: 3, image: image5, caption: 'Slide 3 Caption' }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slidesData.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component unmounts
  }, [currentSlide]); // Include currentSlide in the dependency array to ensure the interval is updated when currentSlide changes

  return (
    <div className="hero-slider">
      {slidesData.map((slide, index) => (
        <div key={slide.id} className={index === currentSlide ? 'slide active' : 'slide'}>
          <img src={slide.image} alt={`Slide ${slide.id}`} />
          <div className="caption">{slide.caption}</div>
        </div>
      ))}
      <button onClick={prevSlide} className="prev">Prev</button>
      <button onClick={nextSlide} className="next">Next</button>
    </div>
  );
};

export default HeroSlider;
