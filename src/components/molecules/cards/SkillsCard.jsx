export function SkillsCard({ skill }) {
  return (
    <button
      onClick={() =>
        skill.linkTo !== "" ? window.open(skill.linkTo, "_blank") : null
      }
      class="flex xl:h-[5.5rem] lg:h-[5rem] md:h-[4.5rem] shadow-md w-auto rounded-lg border gap-2 border-gray-200 p-2 hover:shadow-sm"
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
        <p class="text-start leading-5 md:leading-4 lg:text-sm md:text-sm">{skill.name}</p>
        <p class="xl:text-sm text-start text-gray-400 pb-0.5 md:pb-0 leading-4 lg:text-xs md:text-xs">
          {skill.description}
        </p>
        <div class="flex flex-wrap gap-1 mt-1 md:mt-0.5">
          {skill.categories &&
            skill.categories.map((category, index) => {
              switch (category) {
                case "Front-end":
                  return (
                    <div
                      key={index}
                      class="xl:text-xs lg:text-[11px] md:text-[10px] text-center py-0.5 px-2 w-fit rounded-full bg-red-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "Back-end":
                  return (
                    <div
                      key={index}
                      class="xl:text-xs lg:text-[11px] md:text-[10px] text-center py-0.5 px-2 w-fit rounded-full bg-green-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "Programming Language":
                  return (
                    <div
                      key={index}
                      class="xl:text-xs lg:text-[11px] md:text-[10px] text-center py-0.5 px-2 w-fit rounded-full bg-blue-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "CI/CD":
                  return (
                    <div
                      key={index}
                      class="xl:text-xs lg:text-[11px] md:text-[10px] text-center py-0.5 px-2 w-fit rounded-full bg-purple-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "Project Management":
                  return (
                    <div
                      key={index}
                      class="xl:text-xs lg:text-[11px] md:text-[10px] text-center py-0.5 px-2 w-fit rounded-full bg-yellow-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "AI Tools":
                  return (
                    <div
                      key={index}
                      class="xl:text-xs lg:text-[11px] md:text-[10px] text-center py-0.5 px-2 w-fit rounded-full bg-pink-500 text-white"
                    >
                      {category}
                    </div>
                  );
                case "Other":
                  return (
                    <div
                      key={index}
                      class="xl:text-xs lg:text-[11px] md:text-[10px] text-center py-0.5 px-2 w-fit rounded-full bg-cyan-500 text-white"
                    >
                      {category}
                    </div>
                  );
                default:
                  return (
                    <div
                      key={index}
                      class="xl:text-xs lg:text-[11px] md:text-[10px] text-center py-0.5 px-2 w-fit rounded-full border border-gray-500"
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
