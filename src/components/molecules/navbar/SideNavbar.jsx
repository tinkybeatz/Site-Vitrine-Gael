import { DarkModeSwitch } from "react-toggle-dark-mode";
import { React, useState, useEffect } from "react";
import Resume from "../../../../public/my_resume/RESUME_GAEL_MALAYSIA_OCT_2025.pdf";
import Github from "../../../../public/images/GitHub-Logo.png";
import useDarkSide from "../../../hooks/useDarkSide";
import { horFadeInScroll } from "../../../../gsap/horizontalFadeIn";
import { useNavigation } from "../../../context/NavigationContext"; // Import the navigation hook

export function SideNavbar({ nbMainSpace }) {
  //state
  const [colorTheme, setTheme] = useDarkSide();
  const [bigNavbar, setBigNavbar] = useState(true);
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  // Use the navigation context
  const { activeSection, goToSection, goToPrevSection, goToNextSection } = useNavigation();

  // Listen for window resize to update navbar size
  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight;
      setBigNavbar(screenHeight >= 600);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //comportements
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  //affichage
  return (
    <div
      class="xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[55px] xs:hidden h-auto rounded-full fixed z-50 left-5 top-1/2 -translate-y-1/2 shadow-md border border-gray-200 flex flex-col justify-around items-center gap-2 py-2 bg-white"
      // ref={horRefNav}
    >
      <div class="flex items-center text-center justify-center">
        <button
          onClick={() => goToSection("home")}
          class={`flex rounded-full hover:bg-gray-100 ${
            activeSection === "home"
              ? "bg-gray-100 dark:bg-gray-700"
              : "bg-white dark:bg-zinc-600"
          } border border-gray-200 shadow-sm hover:shadow-none w-auto justify-items-center align-items-center dark:text-white py-2 px-3 transition-all duration-200 font-semi-bold leading-normal cursor-pointer
          sm:text-sm sm:py-[7px] sm:px-2.5`}
        >
          🏠
        </button>
      </div>

      {bigNavbar && (
        <>
          {/* Divider */}
          <div class="w-3/4 h-[1px] bg-gray-200 dark:bg-zinc-500"></div>

          {nbMainSpace.map((section) => (
            <div
              class="flex items-center text-center justify-center"
              key={section.key}
            >
              <button
                onClick={() => goToSection(`section-${section.key}`)}
                class={`flex rounded-full hover:bg-gray-100 ${
                  activeSection === `section-${section.key}`
                    ? "bg-gray-100 dark:bg-gray-700"
                    : "bg-white dark:bg-zinc-600"
                } border border-gray-200 shadow-sm hover:shadow-none w-auto justify-items-center align-items-center dark:text-white py-2 px-3 transition-all duration-200 font-semi-bold leading-normal cursor-pointer
                sm:text-sm sm:py-[7px] sm:px-2.5`}
              >
                {section.name.match(/^\p{Emoji}/u)?.[0] || section.key}
              </button>
            </div>
          ))}
        </>
      )}

      {/* Divider */}
      <div class="w-3/4 h-[1px] bg-gray-200 dark:bg-zinc-500"></div>

      <button
        onClick={() => goToPrevSection()}
        class={`flex rounded-full hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-none w-auto justify-items-center align-items-center dark:text-white py-2 px-3 transition-all duration-200 font-semi-bold leading-normal cursor-pointer
        sm:text-sm sm:py-[7px] sm:px-2.5`}
      >
        ⬆️
      </button>

      <button
        onClick={() => goToNextSection()}
        class={`flex rounded-full hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-none w-auto justify-items-center align-items-center dark:text-white py-2 px-3 transition-all duration-200 font-semi-bold leading-normal cursor-pointer
        sm:text-sm sm:py-[7px] sm:px-2.5`}
      >
        ⬇️
      </button>

      {/* Divider */}
      <div class="w-3/4 h-[1px] bg-gray-200 dark:bg-zinc-500"></div>

      {/* Dark Mode Toggle CURRENTLY DISABLED */}
      {/* <div
      class="flex items-center text-center justify-center">
        <div 
          onClick={() => toggleDarkMode(!darkSide)}
          class="flex rounded-full hover:bg-gray-100 bg-white border border-gray-200 shadow-sm hover:shadow-none dark:bg-zinc-600 w-auto justify-items-center items-center p-3 transition-all duration-200 cursor-pointer"
        >
          <DarkModeSwitch
            style={{}}
            key={"darkModeSwitch"}
            checked={darkSide}
            onChange={toggleDarkMode}
            className="h-[18px] w-[18px]"
            sunColor=""
            moonColor="white"
          />
        </div>
      </div> */}

      <a
        href={Resume}
        class="flex dark:bg-zinc-600 hover:bg-gray-100 bg-white border border-gray-200 shadow-sm hover:shadow-none rounded-full w-auto text-black justify-items-center align-items-center dark:text-white py-2 px-[10px] transition-all duration-200 font-medium leading-normal cursor-pointer
        sm:text-sm sm:py-[7px] sm:px-2"
        download="Resume Gael"
      >
        CV
      </a>
    </div>
  );
}
