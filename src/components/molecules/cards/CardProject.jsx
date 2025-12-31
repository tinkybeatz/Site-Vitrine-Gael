import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ImageCarousel } from "../carousel/Carousel";
import SkillsData from "../../../data/SkillsData";
import { SkillsCard } from "./SkillsCard";

export function CardProject({ cardInfo }) {
  //state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //comportements
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close popup when clicking escape key and prevent scrolling
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    const preventScroll = (e) => {
      // Only prevent scroll if the target is not inside the modal content
      if (!e.target.closest(".modal-content")) {
        e.preventDefault();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent scrolling on tablet/mobile when popup is open
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      // Prevent mouse wheel scrolling only outside the modal
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      // Restore scrolling when popup is closed
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      // Restore scrolling when component unmounts
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    };
  }, [isPopupOpen]);

  const isXs = windowWidth < 768;

  //affichage
  return (
    <>
      <div
        onClick={() => setIsPopupOpen(true)}
        className="shrink-0 divide relative cursor-pointer border border-gray-200 rounded-lg xl:h-auto xl:w-[27rem] lg:h-auto lg:w-[22rem] md:h-auto md:w-[20rem] sm:h-[15rem] sm:w-full xs:h-[15rem] xs:w-full bg-white dark:bg-zinc-700 text-black dark:text-white transition-all duration-200 shadow-md hover:shadow-sm @container flex flex-col"
      >
        <div className="flex-1 w-full min-h-0">
          {cardInfo.images &&
          cardInfo.images.length > 0 &&
          cardInfo.images[0].img !== "" ? (
            <img
              src={cardInfo.images[0].img}
              alt={cardInfo.images[0].imgAlt}
              className="rounded-t-lg object-cover h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              No Image Available
            </div>
          )}
        </div>
        <div className="flex h-16 md:text-sm sm:text-sm w-full items-center justify-center text-center p-2">
          {cardInfo.title}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen &&
        ReactDOM.createPortal(
          <>
            {/* Backdrop - blurred and gray overlay */}
            <div
              className="fixed inset-0 z-[9998] bg-gray-900/25 backdrop-blur-[2px] "
              onClick={closePopup}
            ></div>

            {/* Modal Container */}
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center"
              onClick={closePopup}
            >
              {/* Modal Content */}
              <div
                className="modal-content relative w-4/5 max-w-6xl h-[90vh] max-h-[800px] min-h-[400px] bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl overflow-y-hidden flex flex-col xs:h-auto"
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
                  <h2 className="text-2xl xs:text-xl font-bold text-black dark:text-white xs:w-4/6">
                    {cardInfo.title}
                  </h2>
                  <div class="flex items-center gap-3 xs:gap-2 h-full">
                    {cardInfo.link &&
                      (!isXs ? (
                        <a
                          href={cardInfo.link}
                          target="_blank"
                          className="bg-blue-500 flex h-full content-center items-center justify-center px-3 rounded-full text-white text-sm hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-none"
                        >
                          Visit Project Page
                        </a>
                      ) : (
                        <a
                          href={cardInfo.link}
                          target="_blank"
                          className="bg-blue-500 flex w-10 h-10 content-center items-center justify-center px-3 rounded-full text-white text-sm hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-none"
                        >
                          Go
                        </a>
                      ))}
                    {/* Close button */}
                    <button
                      onClick={closePopup}
                      className="text-gray-500 shadow-md w-10 h-10 flex rounded-full border border-gray-200 items-center justify-center hover:shadow-none active:bg-gray-100"
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
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="text-black dark:text-white border shadow-inner border-gray-200 rounded-lg flex-1 p-4 overflow-auto min-h-0">
                  {/* Project details will go here */}
                  {cardInfo.description && (
                    <p className="mb-4">{cardInfo.description}</p>
                  )}

                  {/* Image carousel if available */}
                  {!isXs &&
                    (cardInfo.images &&
                    cardInfo.images.length > 0 &&
                    cardInfo.images[0].img !== "" ? (
                      <ImageCarousel images={cardInfo.images} />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        No Images Available
                      </div>
                    ))}
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
