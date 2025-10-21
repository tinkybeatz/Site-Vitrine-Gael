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
      <div
        onClick={() => setIsPopupOpen(true)}
        className="shrink-0 divide relative cursor-pointer border border-gray-200 rounded-lg xl:h-auto xl:w-[27rem] lg:h-auto lg:w-[22rem] sm:h-72 sm:w-60 bg-white dark:bg-zinc-700 text-black dark:text-white transition-all duration-200 shadow-md hover:shadow-sm @container flex flex-col"
      >
        <div className="flex-1 w-full min-h-0">
          {cardInfo.images &&
          cardInfo.images.length > 0 &&
          cardInfo.images[0].img !== "" ? (
            <img
              src={cardInfo.images[0].img}
              alt={cardInfo.images[0].imgAlt}
              className="rounded-lg object-cover h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              No Image Available
            </div>
          )}
        </div>
        <div className="flex h-16 w-full items-center justify-center text-center font-medium p-2">
          {cardInfo.title}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen &&
        ReactDOM.createPortal(
          <>
            {/* Backdrop - blurred and gray overlay */}
            <div
              className="fixed inset-0 z-[9998] bg-gray-900/50 backdrop-blur-sm"
              onClick={closePopup}
            ></div>

            {/* Modal Container */}
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center"
              onClick={closePopup}
            >
              {/* Modal Content */}
              <div
                className="relative w-4/5 max-w-6xl h-[90vh] max-h-[800px] min-h-[400px] bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-2xl overflow-y-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={closePopup}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button> */}

                {/* Modal Header */}
                <div className="flex-shrink-0 pb-4 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    {cardInfo.title}
                  </h2>
                  <div class="flex items-center gap-3 h-full">
                    {cardInfo.link && (
                      <a
                        href={cardInfo.link}
                        target="_blank"
                        className="bg-blue-500 flex h-full content-center items-center justify-center px-3 rounded-full text-white text-sm hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-none"
                      >
                        Visit Project Page
                      </a>
                    )}
                    {/* Close button */}
                    <button
                      className="bg-red-500 flex h-full content-center items-center justify-center px-3 rounded-full text-white text-sm hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-none"
                      onClick={closePopup}
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* Modal Body - You can customize this part as needed */}
                <div className="text-black dark:text-white border shadow-inner border-gray-200 rounded-lg flex-1 p-4 overflow-auto min-h-0">
                  {/* Project details will go here */}
                  {cardInfo.description && (
                    <p className="mb-4">{cardInfo.description}</p>
                  )}

                  {/* Image carousel if available */}
                  {cardInfo.images &&
                  cardInfo.images.length > 0 &&
                  cardInfo.images[0].img !== "" ? (
                    <ImageCarousel images={cardInfo.images} />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200">
                      No Images Available
                    </div>
                  )}
                  <div class="flex shadow-md flex-wrap gap-4 w-full h-auto mt-4 p-4 border border-gray-200 rounded-lg">
                    {cardInfo.techno.map((tech) => {
                      const skill = SkillsData.find((s) => s.name === tech);
                      console.log(skill);
                      if (!skill) return null;
                      return <SkillsCard skill={skill} />;
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
