import { DarkModeSwitch } from "react-toggle-dark-mode";
import { React, useState, useRef } from "react";
import Resume from "../../../../public/my_resume/CV_English_Gael_DELOUIS_2023.pdf";
import Github from "../../../../public/images/GitHub-Logo.png";
import useDarkSide from "../../../hooks/useDarkSide";
import { horFadeInScroll } from "../../../../gsap/horizontalFadeIn";

export function Navbar({}) {
  //state

  //comportements
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  // let horRefNav = React.useRef(null);

  // React.useEffect(() => {
  //   horFadeInScroll(horRefNav.current, +20);
  // }, []);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  //affichage
  return (
    <div
      class="xl:w-[400px] lg:w-[280px] sm:w-[260px] xl:h-[60px] lg:h-[40px] sm:h-[50px] bg-purple-500 grid grid-cols-5 rounded-md fixed z-50 bottom-4 inset-x-0 mx-auto xl:py-2 lg:py-1 sm:py-0.5"
      // ref={horRefNav}
    >
      <div class="col-span-1 grid justify-center items-center xl:text-2xl lg:text-lg sm:text-[16px] font-extrabold dark:text-black transition-all duration-200 text-white xl:border-r-2 lg:border-r-2 sm:border-0 border-purple-900 sm:ml-1">
        <p>Gaël</p>
      </div>
      <div class="col-span-2 xl:border-r-2 lg:border-r-2 sm:border-0 border-purple-900 flex items-center text-center justify-center">
        <a
          href={Resume}
          class="flex rounded-md dark:bg-zinc-600 w-auto text-purple-500 justify-items-center lg:text-xs sm:text-[14px] align-items-center dark:text-white bg-white xl:py-2 xl:px-3 lg:px-2 lg:py-1 sm:px-2 sm:py-1 transition-all duration-200 xl:font-semi-bold lg:font-medium col-span-1 leading-normal"
          download="Resume Gael"
        >
          My resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mt-0.5 xl:ml-2 xl:h-[18px] xl:w-[18px]
                      lg:ml-1 lg:h-[12px] lg:w-[12px]
                      sm:ml-1 sm:mt-1 sm:h-[14px] sm:w-[14px]"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
            <line x1="8" y1="10" x2="16" y2="10"></line>
            <line x1="8" y1="14" x2="16" y2="14"></line>
            <line x1="8" y1="18" x2="16" y2="18"></line>
          </svg>
        </a>
      </div>
      <div class="col-span-1 grid items-center place-content-center xl:border-r-2 lg:border-r-2 sm:border-0 border-purple-900 sm:ml-2.5">
        <div class="hover:cursor-pointer w-auto xl:py-2.5 xl:px-3 lg:py-1.5 lg:px-2 sm:py-1.5 sm:px-2 flex rounded-md bg-white dark:bg-zinc-600 transition-all duration-200 items-center ">
          <DarkModeSwitch
            style={{}}
            key={"darkModeSwitch"}
            checked={darkSide}
            onChange={toggleDarkMode}
            className="xl:h-[18px] xl:w-[18px]
                      lg:h-[13px] lg:w-[13px]
                      sm:h-[16px] sm:w-[16px]"
            sunColor="#a855f7"
            moonColor="white"
          />
        </div>
      </div>
      <div class="col-span-1 grid items-center place-content-center">
        <div class="hover:cursor-pointer w-auto xl:py-2.5 xl:px-3 lg:py-1.5 lg:px-2 sm:py-1.5 sm:px-2 flex rounded-md bg-white dark:bg-zinc-600 transition-all duration-200 items-center">
          <a
            href="https://github.com/tinkybeatz"  
            target="_blank"
            class="flex rounded-md dark:bg-zinc-600 w-auto text-purple-500 justify-items-center lg:text-xs sm:text-[14px] align-items-center dark:text-white bg-white transition-all duration-200 xl:font-semi-bold lg:font-medium col-span-1 leading-normal"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="currentColor"
              className="xl:h-[18px] xl:w-[18px]
                      lg:h-[13px] lg:w-[13px]
                      sm:h-[16px] sm:w-[16px]"
            >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
