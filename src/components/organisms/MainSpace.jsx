import { AboutMeBlock } from "../molecules/AboutMeBlock";
import { ExperiencesBlock } from "../molecules/ExperiencesBlock";
import { SkillsBlock } from "../molecules/SkillsBlock";
import { MyWorkBlock } from "../molecules/MyWorkBlock";
import { EducationBlock } from "../molecules/EducationBlock";
import { ContactBlock } from "../molecules/ContactBlock";
import { HireMeBlock } from "../molecules/HireMeBlock";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import { vertFadeInScroll } from "../../../gsap/verticalFadeIn";
import { horFadeInScroll } from "../../../gsap/horizontalFadeIn";
import { useNavigation } from "../../context/NavigationContext"; // Import the navigation hook

import "./MainSpace.css";

export function MainSpace({ nb }) {
  let horRef = React.useRef(null);
  const [isWiggling, setIsWiggling] = useState(false);
  const [timerRef, setTimerRef] = useState(null);
  
  // Use the navigation context
  const { goToNextSection, activeSection } = useNavigation();

  // Effect for the horizontal fade in
  React.useEffect(() => {
    horFadeInScroll(horRef.current, +80);
  }, []);
  
  // Function to reset and start wiggle timer
  const resetAndStartWiggleTimer = () => {
    // Clear any existing timer
    if (timerRef) {
      clearInterval(timerRef);
    }
    
    // Reset wiggle state
    setIsWiggling(false);
    
    // Start a new timer
    const newTimer = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => {
        setIsWiggling(false);
      }, 800);
    }, 10000);
    
    // Save the timer reference
    setTimerRef(newTimer);
    
    return newTimer;
  };
  
  // Effect to handle wiggle animation based on active section
  useEffect(() => {
    // Reset and start the timer when the component mounts or section changes
    const timer = resetAndStartWiggleTimer();
    
    // Clean up on unmount
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [activeSection, nb.key]);
  
  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      if (timerRef) {
        clearInterval(timerRef);
      }
    };
  }, []);

  let nbDeploy;
  switch (nb.key) {
    case 1:
      nbDeploy = <AboutMeBlock deploy={nb.deploy} />;
      break;

    case 2:
      nbDeploy = <SkillsBlock deploy={nb.deploy} />;
      break;

    case 3:
      nbDeploy = <ExperiencesBlock deploy={nb.deploy} />;
      break;

    case 4:
      nbDeploy = <HireMeBlock deploy={nb.deploy} />;
      break;

    case 5:
      nbDeploy = <MyWorkBlock deploy={nb.deploy} />;
      break;

    case 6:
      nbDeploy = <EducationBlock deploy={nb.deploy} />;
      break;

    case 7:
      nbDeploy = <ContactBlock deploy={nb.deploy} />;
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
        {nb.key === 7 ? null : (
        <div
          onClick={goToNextSection}
          className={`absolute font-scrib flex rounded-full px-4 py-3 bg-red-500 text-white text-md md:text-sm md:px-4 md:py-2 cursor-pointer -bottom-5 -right-5 z-[1000] select-none hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-sm active:shadow-none ${isWiggling ? 'wiggle-button' : ''}`}
        >
          Next section
        </div>)}
      </div>
    </>
  );
}
