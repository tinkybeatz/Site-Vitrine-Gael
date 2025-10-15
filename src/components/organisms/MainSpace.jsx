import { FirstBlock } from "../molecules/FirstBlock";
import { SecondBlock } from "../molecules/SecondBlock";
import { ThirdBlock } from "../molecules/ThirdBlock";
import { FourthBlock } from "../molecules/FourthBlock";
// import { FifthBlock } from "../molecules/FifthBlock";
import { SixthBlock } from "../molecules/SixthBlock";
import { SeventhBlock } from "../molecules/SeventhBlock";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import { vertFadeInScroll } from "../../../gsap/verticalFadeIn";
import { horFadeInScroll } from "../../../gsap/horizontalFadeIn";
import { useNavigation } from "../../context/NavigationContext"; // Import the navigation hook

import "./MainSpace.css";

export function MainSpace({ nb }) {
  let horRef = React.useRef(null);
  const [isWiggling, setIsWiggling] = useState(false);
  
  // Use the navigation context
  const { goToNextSection } = useNavigation();

  // Effect for the horizontal fade in
  React.useEffect(() => {
    horFadeInScroll(horRef.current, +80);
  }, []);
  
  // Effect for the wiggle animation
  useEffect(() => {    
    // Reset wiggling state when section changes
    setIsWiggling(false);
    
    // Start a new timer for this section
    const wiggleInterval = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => {
        setIsWiggling(false);
      }, 800);
    }, 10000);
    
    // Clean up the interval when component unmounts or section changes
    return () => {
      clearInterval(wiggleInterval);
    };
  }, [nb.key]);

  let nbDeploy;
  switch (nb.key) {
    case 1:
      nbDeploy = <FirstBlock deploy={nb.deploy} />;
      break;

    case 2:
      nbDeploy = <SecondBlock deploy={nb.deploy} />;
      break;

    case 3:
      nbDeploy = <ThirdBlock deploy={nb.deploy} />;
      break;

    case 4:
      nbDeploy = <FourthBlock deploy={nb.deploy} />;
      break;

    // case 5:
    //   nbDeploy = <FifthBlock deploy={nb.deploy} />;
    //   break;

    case 5:
      nbDeploy = <SixthBlock deploy={nb.deploy} />;
      break;

    case 6:
      nbDeploy = <SeventhBlock deploy={nb.deploy} />;
      break;

    default:
      break;
  }

  //affichage
  return (
    <>
      <div
        className="relative flex w-full h-full max-h-full overflow-visible"
        ref={horRef}
      >
        <div className="flex w-full h-full max-h-full overflow-hidden shadow-lg rounded-lg border border-gray-200 transition duration-200">
          <div className="flex w-full h-full max-h-full font-primary rounded bg-white dark:bg-zinc-600 transition-all duration-200">
            <div className="flex h-full max-h-full w-full">{nbDeploy}</div>
          </div>
        </div>
        {nb.key === 6 ? null : (
        <div
          onClick={goToNextSection}
          className={`absolute font-scrib flex rounded-full px-4 py-3 bg-red-500 text-white text-md cursor-pointer -bottom-5 -right-5 z-[1000] select-none hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-sm active:shadow-none ${isWiggling ? 'wiggle-button' : ''}`}
        >
          Next section
        </div>)}
      </div>
    </>
  );
}
