import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { SkillsCategoriesCard } from "./SkillsCategoriesCard";

export function SkillsCard({ skill, size }) {
  //state
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //comportements
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Close popup when clicking escape key and prevent scrolling
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent scrolling on tablet/mobile when popup is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when popup is closed
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      // Restore scrolling when component unmounts
      document.body.style.overflow = "unset";
    };
  }, [isPopupOpen]);

  return (
    <>
      {size === "big" ? (
        // card for big size
        <button
          onClick={() =>
            skill.linkTo !== "" ? window.open(skill.linkTo, "_blank") : null
          }
          class="flex xl:h-[5.5rem] lg:h-[5rem] md:h-[4.5rem] sm:h-[4.5rem] shadow-md w-auto rounded-lg border gap-2 border-gray-200 p-2 hover:shadow-sm"
        >
          {skill.img !== "" ? (
            <img
              src={skill.img}
              alt={skill.imgAlt}
              class="rounded-md aspect-square h-full"
            />
          ) : (
            <div class="flex h-full aspect-square rounded-md items-center justify-center bg-gray-200">
              No logo
            </div>
          )}
          <div class="flex flex-col justify-center">
            <p class="text-start leading-5 md:leading-4 sm:leading-4 lg:text-sm md:text-sm sm:text-sm">
              {skill.name}
            </p>
            <p class="xl:text-sm text-start text-gray-400 pb-0.5 md:pb-0 sm:pb-0 leading-4 lg:text-xs md:text-xs sm:text-xs">
              {skill.description}
            </p>
            <div class="flex flex-wrap gap-1 mt-1 md:mt-0.5 sm:mt-0.5">
              {skill.categories &&
                skill.categories.map((category, index) => (
                  <SkillsCategoriesCard key={index} category={category} />
                ))}
            </div>
          </div>
        </button>
      ) : (
        // card for small size
        <>
          <button
            onClick={() => setIsPopupOpen(true)}
            class="flex xl:h-[5.5rem] lg:h-[5rem] md:h-[4.5rem] sm:h-[4.5rem] xs:h-[3.5rem] mobile:h-[2.6rem] shadow-md w-auto rounded-lg border gap-2 border-gray-200 p-2 mobile:p-1 hover:shadow-sm"
          >
            {skill.img !== "" ? (
              <img
                src={skill.img}
                alt={skill.imgAlt}
                class="rounded-md aspect-square h-full"
              />
            ) : (
              <div class="flex h-full aspect-square rounded-md items-center justify-center bg-gray-200">
                No logo
              </div>
            )}
          </button>

          {/* Popup Modal */}
          {isPopupOpen &&
            ReactDOM.createPortal(
              <>
                <div
                  class="fixed inset-0 z-[9998] bg-gray-900/25 backdrop-blur-[2px]"
                  onClick={closePopup}
                ></div>
                <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                  <div className="flex flex-col bg-white rounded-xl h-[12rem] w-[35rem] xs:w-[20rem] xs:h-[14rem] mobile:w-[20rem] mobile:h-[16rem] shadow-xl items-center gap-4 p-4">
                    <div className="flex h-[55%] xs:h-[60%] mobile:h-[75%] w-full">
                      <div className="flex w-[92%] gap-4">
                        <div className="flex rounded-md aspect-square h-full xs:h-[50%] mobile:h-[50%]">
                          <img
                            src={skill.img}
                            alt={skill.imgAlt}
                            class="rounded-md aspect-square h-full"
                          />
                        </div>
                        <div className="flex flex-col justify-start py-4 gap-1">
                          <p className="text-lg mobile:text-base font-medium leading-none">
                            {skill.name}
                          </p>
                          <p className="text-sm mobile:text-xs text-gray-400 leading-none">
                            {skill.description}
                          </p>
                          <div className="flex flex-wrap pt-1 gap-2">
                            {skill.categories &&
                              skill.categories.map((category, index) => (
                                <SkillsCategoriesCard
                                  key={index}
                                  category={category}
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-[8%] flex justify-center items-start">
                        <button
                          onClick={closePopup}
                          className="text-gray-500 shadow-md w-10 h-10 mobile:w-8 mobile:h-8 flex rounded-full border border-gray-200 aspect-square items-center justify-center hover:shadow-none active:bg-gray-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mobile:h-5 mobile:w-5"
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
                    <div className="flex h-[45%] xs:h-[40%] mobile:h-[25%] w-full border-t border-gray-200 pt-3 items-center justify-center">
                      <button
                        onClick={() =>
                          skill.linkTo !== ""
                            ? window.open(skill.linkTo, "_blank")
                            : null
                        }
                        disabled={skill.linkTo === ""}
                        className={`flex text-sm h-full items-center justify-center px-4 rounded-md ${
                          skill.linkTo === ""
                            ? "cursor-not-allowed bg-gray-100 border border-gray-200 text-gray-400"
                            : "cursor-pointer bg-white border border-gray-200 shadow-md hover:shadow-none active:bg-gray-100"
                        }`}
                      >
                        Visit official page
                      </button>
                    </div>
                  </div>
                </div>
              </>,
              document.body
            )}
        </>
      )}
    </>
  );
}
