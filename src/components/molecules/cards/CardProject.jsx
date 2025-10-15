import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ImageCarousel } from "../carousel/Carousel";
import SkillsData from "../../../data/SkillsData";
import { SkillsCard } from "./SkillsCard";

export function CardProject({ cardInfo }) {
  //state
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //comportements
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Close popup when clicking escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isPopupOpen]);

  //affichage
  return (
    <>
      <div onClick={() => setIsPopupOpen(true)} 
        className="shrink-0 divide relative cursor-pointer border border-gray-200 rounded-lg xl:h-auto xl:w-[25rem] lg:h-96 lg:w-80 sm:h-72 sm:w-60 bg-white dark:bg-zinc-700 text-black dark:text-white transition-all duration-200">
          <div className="flex h-4/5 w-full">
            <img src={cardInfo.images[0].img} alt={cardInfo.images[0].imgAlt} className="rounded-lg" />
          </div>
          <div className="flex h-1/5 w-full items-center justify-center text-center font-medium">
            {cardInfo.id}. {cardInfo.title}
          </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && ReactDOM.createPortal(
        <>
          {/* Backdrop - blurred and gray overlay */}
          <div 
            className="fixed inset-0 z-[9998] bg-gray-900/50 backdrop-blur-sm" 
            onClick={closePopup}
          ></div>
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center"
               onClick={closePopup}>
            {/* Modal Content */}
            <div 
              className="relative w-4/5 h-4/5 bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-2xl overflow-y-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={closePopup}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Modal Header */}
              <div className="h-[8%]">
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  {cardInfo.title}
                </h2>
              </div>
              
              {/* Modal Body - You can customize this part as needed */}
              <div className="text-black dark:text-white border shadow-inner border-gray-200 rounded-lg h-[92%] p-4 overflow-auto">
                {/* Project details will go here */}
                {cardInfo.description && <p className="mb-4">{cardInfo.description}</p>}
                
                {/* Image carousel if available */}
                {cardInfo.images && cardInfo.images.length > 0 && (
                  <ImageCarousel images={cardInfo.images} />
                )}
                <div class="flex shadow-md flex-wrap gap-4 w-full h-auto mt-4 p-4 border border-gray-200 rounded-lg">
                  {cardInfo.techno.map((tech) => {
                    const skill = SkillsData.find((s) => s.name === tech);
                    console.log(skill);
                    if (!skill) return null;
                    return (
                      <SkillsCard skill={skill} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
