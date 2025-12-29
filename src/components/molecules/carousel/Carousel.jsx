import { useState } from "react";

export function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Go to next image
  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Go to previous image
  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to specific slide
  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };
  
  return (
    <div className="relative w-full h-[35rem] border border-gray-200 shadow-md rounded-lg">
      {/* Main image display */}
      <div className={`relative w-full ${images.length > 1 ? "h-[88%] pt-4" : "h-[100%] p-4"} overflow-hidden`}>
        <img 
          src={images[currentIndex].img} 
          alt={images[currentIndex].imgAlt || `Image ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
        
        {/* Counter indicator */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute top-[40%] left-8 -translate-y-1/2 bg-white border border-gray-200 text-black hover:bg-gray-200 p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-[40%] right-8 -translate-y-1/2 bg-white border border-gray-200 text-black hover:bg-gray-200 p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Thumbnail navigation - inside the main container at the bottom */}
      {images.length > 1 && (
        <div className="absolute left-0 right-0 flex flex-wrap justify-center items-center gap-2 h-[12%] overflow-hidden">
          {images.map((image, index) => (
            <button 
              key={index} 
              onClick={(e) => goToSlide(index, e)}
              className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
                currentIndex === index ? 'border-blue-500 scale-110' : 'border-transparent opacity-70'
              }`}
            >
              <img 
                src={image.img} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};