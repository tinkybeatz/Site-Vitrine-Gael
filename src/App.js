import { useState, useRef } from "react";
import { inject } from "@vercel/analytics";
import React from "react";
import MainPagePic from "../public/images/imageGael.jpg";
import { MainSpace } from "./components/organisms/MainSpace";
import nbMainSpace from "./data/AppData";
import { Navbar } from "./components/molecules/navbar/Navbar";
import { SideNavbar } from "./components/molecules/navbar/SideNavbar";
import { vertFadeInPres, vertFadeInScroll } from "../gsap/verticalFadeIn";
import { horFadeInPres } from "../gsap/horizontalFadeIn";
import { NavigationProvider } from "./context/NavigationContext"; // Import the NavigationProvider
import NavigationButtons from "./components/molecules/buttons/NavigationButtons";

function App() {
  inject();
  // constantes (état, données)
  let verRef = React.useRef(null);
  let horRef = React.useRef(null);

  React.useEffect(() => {
    vertFadeInPres(verRef, 2, 0);
    horFadeInPres(horRef, 2, 0);
  }, []);

  // affichage (render)
  return (
    <NavigationProvider sections={nbMainSpace}>
      <div
        className="justify-items-center xl:w-{80%} lg:w-{85%} grid font-primary scroll-smooth snap-y snap-mandatory"
        key="1"
      >
        {/* <Navbar /> */}
        <SideNavbar nbMainSpace={nbMainSpace} />
        <div className="flex-row dark:text-white transition-all duration-200 xl:w-{70%} lg:w-{80%} sm:w-{70%} h-[100vh]">
          <div className="flex xl:h-[40%] lg:h-1/5 sm:h-1/6 items-end xl:py-2 lg:py-4 sm:py-2 text-center">
            <h1
              ref={horRef}
              className="font-scrib tracking-extra-tight xl:text-8xl font-light w-full lg:text-6xl sm:text-4xl"
            >
              GAËL DELOUIS
            </h1>
          </div>
          <div className="text-xl font-light flex xl:h-[15%] justify-center">
            Full-Stack Web Developper | Product Engineer | Your next best hire
          </div>
          <div className="items-center text-xl font-light flex flex-col xl:h-[45%]">
            <p class="text-center text-lg">Learn more about me :</p>
            <div className="flex flex-wrap w-[60%] justify-center gap-3 mt-2">
              {nbMainSpace.map((section) => (
                <NavigationButtons section={section} />
              ))}
            </div>
          </div>
        </div>
        <div class="w-full">
          {nbMainSpace.map((nb) => (
            <div
              id={`section-${nb.key}`}
              class="flex flex-col items-center justify-center w-full h-screen snap-start"
            >
              <div class="flex flex-col w-full max-w-[90rem] h-[90%] max-h-[90%]">
                <div class="flex h-[6%] text-2xl tracking-extra-tight font-scrib transition-colors dark:text-white text-black">
                  {nb.key}. {nb.name.toUpperCase()}
                </div>
                <div class="flex w-full h-[94%] max-h-[94%]">
                  <MainSpace nb={nb} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavigationProvider>
  );
}

export default App;
