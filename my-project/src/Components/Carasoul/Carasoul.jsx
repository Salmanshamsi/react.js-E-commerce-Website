import React, { useState } from 'react';
import image1 from "../../assets/banner-images/image1.webp"

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
        <div className="relative mt-16">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Carousel Image ${index}`} className="object-cover w-full h-96" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
        <button
          className="text-white text-2xl  bg-opacity-50 px-3 py-1 rounded-full"
          onClick={handlePrev}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 text-gray-900  h12 font-bold6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </button>
        <button
          className="text-white text-2xl  bg-opacity-50 px-3 py-1 rounded-full"
          onClick={handleNext}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 text-gray-900 h-12 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </button>
      </div>
    </div>
    </>
  );
};

export default Carousel;


// 