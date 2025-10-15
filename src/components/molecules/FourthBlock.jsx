import { CardProject } from "./cards/CardProject";
import { FlipCard } from "./cards/FlipCard";
import { useState } from "react";

export function FourthBlock({ deploy }) {
  //state
  const [projectSelection, setProjectSelection] = useState("All Projects");

  //comportements
  function selectProjects(section) {
    setProjectSelection(section);
  }

  //affichage
  return (
    <div class="flex flex-col h-full w-full max-h-full p-4">
      <div class="flex w-full h-[6%] mb-4 items-center">
        <div class="flex w-auto h-full divide-x divide-gray-200 border border-gray-200 rounded-lg justify-center items-center">
          <div
            onClick={() => selectProjects("All Projects")}
            class={`flex whitespace-nowrap text-sm px-4 font-medium w-full h-full rounded-l-lg justify-center items-center py-2 cursor-pointer ${
              projectSelection === "All Projects"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            All Projects
          </div>
          <div
            onClick={() => selectProjects("School Project")}
            class={`flex whitespace-nowrap text-sm px-4 font-medium w-full h-full justify-center items-center py-2 cursor-pointer ${
              projectSelection === "School Project"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            School Projects
          </div>
          <div
            onClick={() => selectProjects("Professionnal Project")}
            class={`flex whitespace-nowrap text-sm px-4 font-medium w-full h-full rounded-r-lg justify-center items-center py-2 cursor-pointer ${
              projectSelection === "Professionnal Project"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
          >
            Professionnal Projects
          </div>
        </div>
      </div>

      {/* Projects */}
      <div class="grid grid-rows-2 grid-flow-col border justify-start border-gray-200 gap-4 shadow-inner rounded-lg content-start p-4 min-h-[92%] max-h-[92%] h-[92%] w-auto overflow-x-auto overflow-y-hidden">
        {deploy.projects
          .filter((project) => {
            // Si "All skills" est sélectionné, afficher toutes les compétences
            if (projectSelection === "All Projects") return true;

            // Sinon, vérifier si la compétence appartient à la catégorie sélectionnée
            return (
              project.categories &&
              project.categories.some((category) => {
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
          <div class="w-full text-center text-gray-500 mt-4">
            No skills fit in this category
          </div>
        )}
      </div>
    </div>
  );
}
