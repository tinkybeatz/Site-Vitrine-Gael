import { CardProject } from "./cards/CardProject";
import { FlipCard } from "./cards/FlipCard";
import { useState, useEffect } from "react";

export function MyWorkBlock({ deploy }) {
  //state
  const [projectSelection, setProjectSelection] = useState("All Projects");
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
  function selectProjects(section) {
    setProjectSelection(section);
  }

  const projectCategories = [
    "All Projects",
    "School Projects", 
    "Professional Projects",
    "Personal Projects"
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
            <span className="text-sm">{projectSelection}</span>
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
              {projectCategories.map((category) => (
                <div
                  key={category}
                  onClick={() => {
                    selectProjects(category);
                    setIsDropdownOpen(false);
                  }}
                  class={`px-4 py-2 text-xs cursor-pointer hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                    projectSelection === category ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Button tabs for larger screens */}
        <div class="sm:hidden xs:hidden mobile:hidden flex divide-x divide-gray-200 border border-gray-200 rounded-lg h-full"> 
          <div
            onClick={() => selectProjects("All Projects")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full rounded-l-lg justify-center items-center py-2 cursor-pointer ${
              projectSelection === "All Projects"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            All Projects
          </div>
          <div
            onClick={() => selectProjects("School Projects")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full justify-center items-center py-2 cursor-pointer ${
              projectSelection === "School Projects"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            School Projects
          </div>
          <div
            onClick={() => selectProjects("Professional Projects")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full justify-center items-center py-2 cursor-pointer ${
              projectSelection === "Professional Projects"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            Professional Projects
          </div>
          <div
            onClick={() => selectProjects("Personal Projects")}
            class={`flex whitespace-nowrap text-sm px-4 md:px-3 md:text-xs font-medium h-full rounded-r-lg justify-center items-center py-2 cursor-pointer ${
              projectSelection === "Personal Projects"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            Personal Projects
          </div>
        </div>
      </div>

      {/* Projects */}
      <div class="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none grid-flow-col sm:grid-flow-row border justify-start border-gray-200 gap-4 shadow-inner rounded-lg content-start p-4 min-h-[92%] max-h-[92%] h-[92%] w-full max-w-full overflow-x-auto overflow-y-hidden sm:overflow-x-hidden sm:overflow-y-auto xs:flex-col xs:flex mobile:grid-cols-1 xs:overflow-y-auto xs:overflow-x-hidden mobile:overflow-y-auto mobile:overflow-x-hidden">
        {deploy.projects
          .filter((project) => {
            // Si "All skills" est sélectionné, afficher toutes les compétences
            if (projectSelection === "All Projects") return true;

            // Sinon, vérifier si le projet appartient à la catégorie sélectionnée
            return (
              project.categories &&
              project.categories.some((category) => {
                console.log(category, projectSelection);
                return category === projectSelection;
              })
            );
          })
          .map((project) => (
            <CardProject cardInfo={project} />
          ))}
        {deploy.projects.filter((project) => {
          if (projectSelection === "All Projects") return true;
          return (
            project.categories &&
            project.categories.some((category) => {
              return category === projectSelection;
            })
          );
        }).length === 0 && (
          <div class="w-full text-center text-gray-500">
            No projects fit in this category
          </div>
        )}
      </div>
    </div>
  );
}
