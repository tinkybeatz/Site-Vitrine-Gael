import { DarkModeSwitch } from "react-toggle-dark-mode";
import { React, useState, useRef, useEffect } from "react";
import Resume from "../../../../public/my_resume/CV_English_Gael_DELOUIS_2023.pdf";
import Github from "../../../../public/images/GitHub-Logo.png";
import useDarkSide from "../../../hooks/useDarkSide";
import { horFadeInScroll } from "../../../../gsap/horizontalFadeIn";

export function SideNavbar({ nbMainSpace}) {
  //state
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const [activeSection, setActiveSection] = useState("home");
  
  //comportements
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  
  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY;
      
      // Check if we're at the top
      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }
      
      // Check each section
      const sections = nbMainSpace.map(section => ({
        id: `section-${section.key}`,
        key: section.key
      }));
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within viewport and not too far below
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(`section-${section.key}`);
            break;
          }
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nbMainSpace]);
  
  //affichage
  return (
    <div
      class="w-[60px] h-auto rounded-full fixed z-50 left-4 top-[20%] shadow-md border border-gray-200 flex flex-col justify-around items-center gap-2 py-2"
      // ref={horRefNav}
    >
      <div class="flex items-center text-center justify-center">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          class={`flex rounded-full hover:bg-gray-100 ${activeSection === "home" ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-zinc-600"} border border-gray-200 shadow-sm hover:shadow-none w-auto justify-items-center lg:text-xs sm:text-[14px] align-items-center dark:text-white py-2 px-3 transition-all duration-200 font-semi-bold leading-normal cursor-pointer`}
        >
          🏠
        </button>
      </div>
      
      {/* Divider */}
      <div class="w-3/4 h-[1px] bg-gray-200 dark:bg-zinc-500"></div>

      {nbMainSpace.map((section) => (
        <div class="flex items-center text-center justify-center" key={section.key}>
          <button
            onClick={() => {
              const sectionElement = document.getElementById(`section-${section.key}`);
              if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            class={`flex rounded-full hover:bg-gray-100 ${activeSection === `section-${section.key}` ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-zinc-600"} border border-gray-200 shadow-sm hover:shadow-none w-auto justify-items-center lg:text-xs sm:text-[14px] align-items-center dark:text-white py-2 px-3 transition-all duration-200 font-semi-bold leading-normal cursor-pointer`}
          >
            {section.name.match(/^\p{Emoji}/u)?.[0] || section.key}
          </button>
        </div>
      ))}
      
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
          class="flex dark:bg-zinc-600 hover:bg-gray-100 bg-white border border-gray-200 shadow-sm hover:shadow-none rounded-full w-auto text-black justify-items-center lg:text-xs sm:text-[14px] align-items-center dark:text-white py-2 px-[10px] transition-all duration-200 font-semi-bold leading-normal cursor-pointer"
          download="Resume Gael"
        >
          CV
        </a>
        
      {/* <div class="flex items-center text-center justify-center">
        <a
          href="#contact"
          class="flex rounded-lg dark:bg-zinc-600 w-auto text-purple-500 justify-items-center lg:text-xs sm:text-[14px] align-items-center dark:text-white bg-white py-2 px-3 transition-all duration-200 font-semi-bold leading-normal"
        >
          Contact
        </a>
      </div> */}
    </div>
  );
}