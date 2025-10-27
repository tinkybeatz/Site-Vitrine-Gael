import { ProgressBar } from "../atoms/ProgressBar";
import { FlipCard } from "./cards/FlipCard";
import { useState, useEffect } from "react";
import { SkillsCard } from "./cards/SkillsCard";

export function SkillsBlock({ deploy }) {
  //state
  const [skillSelection, setSkillSelection] = useState("All skills");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.relative')) {
        setIsDropdownOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  //comportements
  function selectSkills(section) {
    setSkillSelection(section);
  }

  const skillCategories = [
    "All skills",
    "AI Tools", 
    "Programming Language",
    "Front-end",
    "Back-end",
    "CI/CD",
    "Project Management",
    "Other"
  ];

  //affichage
  return (
    <div class="flex flex-col h-full w-full max-h-full p-4">
      <div class="flex w-full h-[6%] mb-4 items-center">
        {/* Dropdown for small screens */}
        <div class="md:hidden lg:hidden xl:hidden relative w-full">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            class="flex w-[15rem] justify-between items-center px-4 py-2 gap-2 text-sm font-medium border border-gray-200 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="text-sm">{skillSelection}</span>
            <svg
              class={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div class="absolute w-[15rem] top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {skillCategories.map((category) => (
                <div
                  key={category}
                  onClick={() => {
                    selectSkills(category);
                    setIsDropdownOpen(false);
                  }}
                  class={`px-4 py-2 text-xs cursor-pointer hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                    skillSelection === category ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  {category === "Programming Language" ? "Programming Languages" : category}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Button tabs for larger screens */}
        <div class="sm:hidden xs:hidden mobile:hidden flex divide-x divide-gray-200 border border-gray-200 rounded-lg h-full"> 
          <div
            onClick={() => selectSkills("All skills")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full rounded-l-lg justify-center items-center py-2 cursor-pointer ${
              skillSelection === "All skills"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            All skills
          </div>
          <div
            onClick={() => selectSkills("AI Tools")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full justify-center items-center py-2 cursor-pointer ${
              skillSelection === "AI Tools"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            AI Tools
          </div>
          <div
            onClick={() => selectSkills("Programming Language")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full justify-center items-center py-2 cursor-pointer ${
              skillSelection === "Programming Language"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            Programming Languages
          </div>
          <div
            onClick={() => selectSkills("Front-end")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full justify-center items-center py-2 cursor-pointer ${
              skillSelection === "Front-end"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            Front-end
          </div>
          <div
            onClick={() => selectSkills("Back-end")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full justify-center items-center py-2 cursor-pointer ${
              skillSelection === "Back-end"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            Back-end
          </div>
          <div
            onClick={() => selectSkills("CI/CD")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full justify-center items-center py-2 cursor-pointer ${
              skillSelection === "CI/CD"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            CI/CD
          </div>
          <div
            onClick={() => selectSkills("Project Management")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full justify-center items-center py-2 cursor-pointer ${
              skillSelection === "Project Management"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            Project Management
          </div>
          <div
            onClick={() => selectSkills("Other")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full rounded-r-lg justify-center items-center py-2 cursor-pointer ${
              skillSelection === "Other"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            Other
          </div>
        </div>
      </div>

      {/* Skills */}
      <div class="flex gap-3 p-4 border border-gray-200 shadow-inner rounded-lg content-start flex-wrap overflow-y-auto min-h-[92%] max-h-[92%]">
        {deploy.skills
          .filter((skill) => {
            // Si "All skills" est sélectionné, afficher toutes les compétences
            if (skillSelection === "All skills") return true;

            // Sinon, vérifier si la compétence appartient à la catégorie sélectionnée
            return (
              skill.categories &&
              skill.categories.some((category) => {
                return category === skillSelection;
              })
            );
          })
          .map((row) => (
            <SkillsCard skill={row} size={windowWidth >= 1024 ? "big" : "small"} />
          ))}
        {deploy.skills.filter((skill) => {
          if (skillSelection === "All skills") return true;
          return (
            skill.categories &&
            skill.categories.some((category) => {
              return category === skillSelection;
            })
          );
        }).length === 0 && (
          <div class="w-full text-center text-gray-500 mt-4">
            No skills fit in this category
          </div>
        )}
      </div>
    </div>
  );
}
