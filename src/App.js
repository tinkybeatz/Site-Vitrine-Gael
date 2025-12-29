import { inject } from "@vercel/analytics";
import React, { useState, useEffect } from "react";
import { MainSpace } from "./components/organisms/MainSpace";
import nbMainSpace from "./data/AppData";
import { SideNavbar } from "./components/molecules/navbar/SideNavbar";
import { vertFadeInPres, vertFadeInScroll } from "../gsap/verticalFadeIn";
import { horFadeInPres, horFadeInScroll } from "../gsap/horizontalFadeIn";
import { NavigationProvider } from "./context/NavigationContext"; // Import the NavigationProvider
import NavigationButtons from "./components/molecules/buttons/NavigationButtons";
import ParticlesBackground from "./components/atoms/ParticlesBackground";
import { NextSectionButton } from "./components/atoms/NextSectionButton";

function App() {
  inject();
  // constantes (état, données)
  let verRef = React.useRef(null);

  // Window width state for responsive behavior
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    vertFadeInPres(verRef, 2, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if we're on xs breakpoint (< 768px based on Tailwind default)
  const isXs = windowWidth < 768;

  // affichage (render)
  return (
    <NavigationProvider sections={nbMainSpace}>
      <div
        className="justify-items-center grid bg-white font-primary scroll-smooth snap-y snap-mandatory relative w-full"
        key="1"
      >
        <ParticlesBackground
          particleColor="#888888"
          linkColor="#888888"
          particlesNumber={120}
          speed={1.5}
        />
        {/* <Navbar /> */}
        <SideNavbar nbMainSpace={nbMainSpace} />
        <div className="flex-row dark:text-white transition-all duration-200 z-10 h-[900px] w-[70%] sm:w-[80%] mobile:h-[100vh] mobile:w-[95%]">
          <div
            className="flex items-end justify-center py-2 h-[40%]
          sm:h-[35%] mobile:h-[30%]"
          >
            <h1
              className="font-scrib tracking-extra-tight mb-2 shadow-md bg-white border font-light border-gray-200 rounded-full py-5 px-10 
              xl:text-8xl 
              lg:text-7xl 
              md:text-6xl 
              sm:text-5xl sm:py-3 sm:px-6
              mobile:text-3xl mobile:py-3 mobile:px-6"
            >
              GAËL DELOUIS
            </h1>
          </div>
          <div
            className="flex font-light justify-center gap-3 h-[15%]
          xl:text-xl
          lg:text-lg
          md:text-sm
          sm:text-sm sm:flex-col sm:justify-start sm:items-center
          mobile:text-sm mobile:flex-col mobile:justify-start mobile:items-center mobile:h-[30%]"
          >
            <div class="flex h-min bg-white border border-gray-200 rounded-full mobile:bg-transparent mobile:shadow-none mobile:border-none pt-2 pb-2 pr-3 px-4 shadow-md mobile:flex-col mobile:gap-2 mobile:items-center">
              <span class="pr-2 text-center mobile:py-1.5 mobile:px-3 mobile:border mobile:border-gray-200 mobile:rounded-full mobile:bg-white mobile:shadow-md">
                Full-Stack Web Developper
              </span>
              {!isXs && "|"}
              <span class="pl-2 pr-2 text-center mobile:py-1.5 mobile:px-3 mobile:border mobile:border-gray-200 mobile:rounded-full mobile:bg-white mobile:shadow-md">
                Product Engineer
              </span>
              {!isXs && "|"}
              <span class="pl-2 pr-2 text-center mobile:py-1.5 mobile:px-3 mobile:border mobile:border-gray-200 mobile:rounded-full mobile:bg-white mobile:shadow-md">
                Your next{" "}
                <span class="pl-0.5 pr-1 font-semibold italic">best</span> hire
              </span>
            </div>
            <div class="flex h-min gap-2 items-center bg-white border border-gray-200 rounded-full pt-2 pb-2 pr-3 px-4 shadow-md font-medium">
              Available to work now
              {/* <div class="blink_me"></div> */}
              <div class="ring-container">
                <div class="ringring"></div>
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <div className="items-center text-xl font-light flex flex-col xl:h-[45%] md:h-[45%] lg:h-[45%] sm:h-[50%] mobile:h-[40%]">
            <div class="flex flex-col items-center w-[60%] sm:w-[70%] px-4 py-4 h-min rounded-[2rem] shadow-lg bg-white border border-gray-200 mobile:hidden">
              <p class="text-center text-lg font-medium underline underline-offset-4 decoration-red-600">
                All sections
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-3">
                {nbMainSpace.map((section) => (
                  <NavigationButtons section={section} />
                ))}
              </div>
            </div>
            <div className="xl:hidden lg:hidden md:hidden sm:hidden flex w-full items-center justify-center relative h-[50%]">
              <NextSectionButton 
                className=""
                show={true}
                text="Start Exploring"
              />
            </div>
          </div>
        </div>
        <div class="w-full z-10 overflow-x-hidden overflow-y-hidden">
          {nbMainSpace.map((nb) => (
            <div
              id={`section-${nb.key}`}
              class="flex flex-col items-center justify-center w-full h-screen max-h-[900px] min-h-[800px] mobile:h-[100vh] snap-start"
            >
              <div class="flex flex-col xl:w-[88%] xl:max-w-[90rem] lg:w-[85%] md:w-[80%] sm:w-[75%] mobile:w-[80%] h-[90%] max-h-[90%]">
                <div class="flex items-start h-[8%] mobile:h-[6%] text-2xl sm:text-xl mobile:text-xs tracking-extra-tight font-scrib transition-colors dark:text-white text-black">
                  <div class="flex bg-white px-5 mobile:px-3 h-[78%] rounded-lg items-center border border-gray-200 shadow-md">
                    {nb.key}. {nb.name.toUpperCase()}
                  </div>
                </div>
                <div class="flex w-full h-[92%] max-h-[94%] mobile:h-[94%]">
                  <MainSpace nb={nb} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="z-[100] h-[90px] items-start justify-center w-full flex font-light text-gray-400 text-sm sm:text-sm xs:text-xs mobile:text-xs">
          <div className="bg-white border border-gray-200 py-3 shadow-md px-4 rounded-full">
            © 2025 Gaël DELOUIS. All rights reserved.
          </div>
        </div>
      </div>
    </NavigationProvider>
  );
}

export default App;
