import { ProgressBar } from "../atoms/ProgressBar";
import { FlipCard } from "./cards/FlipCard";
import { useState } from "react";
import { SkillsCard } from "./cards/SkillsCard";

export function SkillsBlock({ deploy }) {
  //state
  const [skillSelection, setSkillSelection] = useState("All skills");

  //comportements
  function selectSkills(section) {
    setSkillSelection(section);
  }

  //affichage
  return (
    <div class="flex flex-col h-full w-full max-h-full p-4">
      <div class="flex w-full h-[6%] mb-4 items-center">
        <div class="flex divide-x divide-gray-200 border border-gray-200 rounded-lg h-full">
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
            // <button
            //   onClick={() =>
            //     row.linkTo !== "" ? window.open(row.linkTo, "_blank") : null
            //   }
            //   class="flex h-[5.5rem] shadow-sm w-auto rounded-lg border gap-2 border-gray-200 p-2"
            // >
            //   <img
            //     src={row.img}
            //     alt={row.imgAlt}
            //     class="rounded-md aspect-square h-full"
            //   />
            //   <div class="flex flex-col justify-center">
            //     <p class="text-start leading-5">{row.name}</p>
            //     <p class="text-sm text-start text-gray-400 pb-0.5 leading-4">
            //       {row.description}
            //     </p>
            //     <div class="flex flex-wrap gap-1 mt-1">
            //       {row.categories &&
            //         row.categories.map((category, index) => {
            //           switch (category) {
            //             case "Front-end":
            //               return (
            //                 <div
            //                   key={index}
            //                   class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-red-500 text-white"
            //                 >
            //                   {category}
            //                 </div>
            //               );
            //             case "Back-end":
            //               return (
            //                 <div
            //                   key={index}
            //                   class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-green-500 text-white"
            //                 >
            //                   {category}
            //                 </div>
            //               );
            //             case "Programming Language":
            //               return (
            //                 <div
            //                   key={index}
            //                   class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-blue-500 text-white"
            //                 >
            //                   {category}
            //                 </div>
            //               );
            //             case "CI/CD":
            //               return (
            //                 <div
            //                   key={index}
            //                   class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-purple-500 text-white"
            //                 >
            //                   {category}
            //                 </div>
            //               );
            //             case "Project Management":
            //               return (
            //                 <div
            //                   key={index}
            //                   class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-yellow-500 text-white"
            //                 >
            //                   {category}
            //                 </div>
            //               );
            //             case "Other":
            //               return (
            //                 <div
            //                   key={index}
            //                   class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-cyan-500 text-white"
            //                 >
            //                   {category}
            //                 </div>
            //               );
            //             default:
            //               return (
            //                 <div
            //                   key={index}
            //                   class="text-xs text-center py-0.5 px-2 w-fit rounded-full border border-gray-500"
            //                 >
            //                   {category}
            //                 </div>
            //               );
            //           }
            //         })}
            //     </div>
            //   </div>
            // </button>
            <SkillsCard skill={row} />
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
