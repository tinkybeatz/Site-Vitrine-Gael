import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import Resume from "../../../../public/my_resume/CV_English_Gael_DELOUIS_2023.pdf";
import useDarkSide from "../../../hooks/useDarkSide";

export function Navbar({}) {
  //state

  //comportements
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  //affichage
  return (
    <div class="w-[20vw] h-[7vh] bg-purple-500 grid grid-cols-4 rounded rounded-md fixed z-50 bottom-5 py-2">
      <div class="col-span-1 grid text-center items-center text-2xl font-extrabold dark:text-black transition-all duration-500 text-white border-r-2 border-purple-900">
        <p>Gaël</p>
      </div>
      <div class="col-span-2 border-r-2 border-purple-900 flex items-center text-center justify-center">
        <a
          href={Resume}
          class="flex rounded rounded-md dark:bg-zinc-600 w-auto text-purple-500 justify-items-center align-items-center dark:text-white bg-white py-2 px-3 transition-all duration-500 font-bold col-span-1 leading-normal"
          download="Resume Gael"
        >
          My resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 mt-0.5"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
            <line x1="8" y1="10" x2="16" y2="10"></line>
            <line x1="8" y1="14" x2="16" y2="14"></line>
            <line x1="8" y1="18" x2="16" y2="18"></line>
          </svg>
        </a>
      </div>
      <div class="col-span-1 grid items-center place-content-center">
        <div class="hover:cursor-pointer w-auto py-2 px-3 flex rounded rounded-md bg-white dark:bg-zinc-600 transition-all duration-500 items-center">
          <DarkModeSwitch
            style={{}}
            key={"darkModeSwitch"}
            checked={darkSide}
            onChange={toggleDarkMode}
            size={25}
            sunColor="#a855f7"
            moonColor="white"
          />
        </div>
      </div>
    </div>
  );
}
