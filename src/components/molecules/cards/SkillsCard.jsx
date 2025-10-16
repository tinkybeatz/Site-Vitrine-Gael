export function SkillsCard({ skill }) {
  return (
    <button
      onClick={() =>
        skill.linkTo !== "" ? window.open(skill.linkTo, "_blank") : null
      }
      class="flex h-[5.5rem] shadow-sm w-auto rounded-lg border gap-2 border-gray-200 p-2"
    >
      {skill.img !== "" ? (
        <img
          src={skill.img}
          alt={skill.imgAlt}
          class="rounded-md aspect-square h-full"
        />
      ) : (
        <div class="flex h-full aspect-square rounded-md items-center justify-center bg-gray-200">
          No logo
        </div>
      )}
      <div class="flex flex-col justify-center">
        <p class="text-start leading-5">{skill.name}</p>
        <p class="text-sm text-start text-gray-400 pb-0.5 leading-4">
          {skill.description}
        </p>
        <div class="flex flex-wrap gap-1 mt-1">
          {skill.categories &&
            skill.categories.map((category, index) => {
              switch (category) {
                case "Front-end":
                  return (
                    <div
                      key={index}
                      class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-red-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "Back-end":
                  return (
                    <div
                      key={index}
                      class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-green-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "Programming Language":
                  return (
                    <div
                      key={index}
                      class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-blue-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "CI/CD":
                  return (
                    <div
                      key={index}
                      class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-purple-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "Project Management":
                  return (
                    <div
                      key={index}
                      class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-yellow-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "Other":
                  return (
                    <div
                      key={index}
                      class="text-xs text-center py-0.5 px-2 w-fit rounded-full bg-cyan-500 text-white"
                    >
                      {category}
                    </div>
                  );
                default:
                  return (
                    <div
                      key={index}
                      class="text-xs text-center py-0.5 px-2 w-fit rounded-full border border-gray-500"
                    >
                      {category}
                    </div>
                  );
              }
            })}
        </div>
      </div>
    </button>
  );
}
