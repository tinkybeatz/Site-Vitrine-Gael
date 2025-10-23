import { inject } from "@vercel/analytics";
import React from "react";
import { MainSpace } from "./components/organisms/MainSpace";
import nbMainSpace from "./data/AppData";
import { SideNavbar } from "./components/molecules/navbar/SideNavbar";
import { vertFadeInPres, vertFadeInScroll } from "../gsap/verticalFadeIn";
import { horFadeInPres } from "../gsap/horizontalFadeIn";
import { NavigationProvider } from "./context/NavigationContext"; // Import the NavigationProvider
import NavigationButtons from "./components/molecules/buttons/NavigationButtons";
import ParticlesBackground from "./components/atoms/ParticlesBackground";

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
        className="justify-items-center grid font-primary scroll-smooth snap-y snap-mandatory relative"
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
        <div className="flex-row dark:text-white transition-all duration-200 xl:w-[70%] lg:w-[70%] md:w-[70%] h-[100vh] z-10">
          <div className="flex xl:h-[40%] lg:h-[40%] md:h-[40%] sm:h-1/6 items-end xl:py-2 lg:py-2 md:py-2 justify-center">
            <h1
              ref={horRef}
              className="font-scrib tracking-extra-tight mb-2 shadow-md bg-white border border-gray-200 rounded-full py-5 px-10 xl:text-8xl font-light lg:text-7xl md:text-6xl"
            >
              GAËL DELOUIS
            </h1>
          </div>
          <div className="text-xl lg:text-lg md:text-sm font-light flex xl:h-[15%] lg:h-[15%] md:h-[15%] justify-center gap-3">
            <div class="flex h-min bg-white border border-gray-200 rounded-full pt-2 pb-2 pr-3 px-4 shadow-sm">
              Full-Stack Web Developper | Product Engineer | Your next{" "}
              <span class="pl-1 pr-2 font-semibold italic">best</span> hire
            </div>
            <div class="flex h-min gap-2 items-center bg-white border border-gray-200 rounded-full pt-2 pb-2 pr-3 px-4 shadow-sm font-medium">
              Available to work now
              {/* <div class="blink_me"></div> */}
              <div class="ring-container">
                <div class="ringring"></div>
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <div className="items-center text-xl font-light flex flex-col xl:h-[45%] md:h-[45%] lg:h-[45%]">
            <div class="flex flex-col items-center w-[60%] px-4 py-4 h-min rounded-[2rem] shadow-lg bg-white border border-gray-200">
              <p class="text-center text-lg font-medium underline underline-offset-4 decoration-red-600">
                All sections
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-3">
                {nbMainSpace.map((section) => (
                  <NavigationButtons section={section} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-[100%] lg:w-[100%] md:w-[100%] z-10 overflow-x-hidden overflow-y-hidden">
          {nbMainSpace.map((nb) => (
            <div
              id={`section-${nb.key}`}
              class="flex flex-col items-center justify-center xl:w-[100%] lg:w-[100%] md:w-[100%] h-screen snap-start"
            >
              <div class="flex flex-col xl:w-[88%] xl:max-w-[90rem] lg:w-[85%] md:w-[80%] h-[90%] max-h-[90%]">
                <div class="flex items-start h-[8%] text-2xl tracking-extra-tight font-scrib transition-colors dark:text-white text-black">
                  <div class="flex bg-white px-5 h-[78%] rounded-lg items-center border border-gray-200 shadow-md">
                    {nb.key}. {nb.name.toUpperCase()}
                  </div>
                </div>
                <div class="flex w-full h-[92%] max-h-[94%]">
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
