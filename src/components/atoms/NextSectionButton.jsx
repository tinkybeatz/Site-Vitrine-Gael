import React, { useState, useEffect } from "react";
import { useNavigation } from "../../context/NavigationContext";

export function NextSectionButton({ 
  className = "", 
  text= "",
  style = {}, 
  show = true,
  wiggleInterval = 10000,
  wiggleDuration = 800 
}) {
  const [isWiggling, setIsWiggling] = useState(false);
  const [timerRef, setTimerRef] = useState(null);
  
  // Use the navigation context
  const { goToNextSection, activeSection } = useNavigation();

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
      }, wiggleDuration);
    }, wiggleInterval);
    
    // Save the timer reference
    setTimerRef(newTimer);
    
    return newTimer;
  };
  
  // Effect to handle wiggle animation based on active section
  useEffect(() => {
    if (!show) return;
    
    // Reset and start the timer when the component mounts or section changes
    const timer = resetAndStartWiggleTimer();
    
    // Clean up on unmount
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [activeSection, show, wiggleInterval, wiggleDuration]);
  
  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      if (timerRef) {
        clearInterval(timerRef);
      }
    };
  }, [timerRef]);

  // Don't render if show is false
  if (!show) {
    return null;
  }

  return (
    <div
      onClick={goToNextSection}
      className={`font-scrib flex rounded-full px-4 py-3 bg-red-500 text-white text-md md:text-sm md:px-4 md:py-2 sm:text-sm sm:px-4 sm:py-2 cursor-pointer z-[1000] select-none hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-sm active:shadow-none ${isWiggling ? 'wiggle-button' : ''} ${className}`}
      style={style}
    >
      {text}
    </div>
  );
}