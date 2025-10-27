import { useState } from "react";

export function SkillsCategoriesCard({ category }) {
  let color;
  
  switch (category) {
    case "Front-end":
      color = "bg-red-500 text-white";
      break;
    case "Back-end":
      color = "bg-green-500 text-white";
      break;
    case "Programming Language":
      color = "bg-blue-500 text-white";
      break;
    case "CI/CD":
      color = "bg-purple-500 text-white";
      break;
    case "Project Management":
      color = "bg-yellow-500 text-white";
      break;
    case "AI Tools":
      color = "bg-pink-500 text-white";
      break;
    case "Other":
      color = "bg-cyan-500 text-white";
      break;
    default:
      color = "border border-gray-500";
      break;
  }

  return (
    <div
      className={`xl:text-xs lg:text-[11px] md:text-[10px] sm:text-xs text-center py-0.5 px-2 sm:px-2.5 sm:py-1 w-fit rounded-full ${color}`}
    >
      {category}
    </div>
  );
}
