import { Timeline } from "antd";

export function TimelineComponent({ timelineInfo }) {
  //state

  //comportements
  const endsByType = (key, text) => {
    if (text.endsWith("- Intern")) {
      const newText = text.substring(0, text.length - 8);
      return (
        <p>
          {key}. {newText} <span className="text-red-500 ml-1">- Intern</span>
        </p>
      );
    } else if (text.endsWith("- Freelance")) {
      const newText = text.substring(0, text.length - 11);
      return (
        <p>
          {key}. {newText}{" "}
          <span className="text-green-500 ml-1">- Freelance</span>
        </p>
      );
    } else if (text.endsWith("- Not IT related")) {
      const newText = text.substring(0, text.length - 11);
      return (
        <p>
          {key}. {newText}{" "}
          <span className="text-blue-500 ml-1">- Not IT related</span>
        </p>
      );
    } else {
      return (
        <div>
          {key}. {text}
        </div>
      );
    }
  };

  // affichage
  return (
    <ol class="relative flex flex-col border-l border-gray-300 dark:border-purple-700 sm:my-0 transition-all duration-200 w-full h-full max-h-full">
      {timelineInfo.map((nb) => (
        <li class="flex gap-6 pl-4 w-full h-full max-h-full transition-all duration-200">
          <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 transition-all duration-200"></div>
          <div class="flex mb-6 h-full w-full max-h-full">
            <div className="flex h-[80%] w-[45%]">
              <div class="flex flex-col w-[65%]">
                <time class="xl:text-sm lg:text-sm sm:text-[10px] leading-none text-gray-400 dark:text-gray-400 transition-all duration-200">
                  {nb.dates}
                </time>
                <h2 class="xl:text-md lg:text-sm sm:text-xs font-semibold text-gray-900 dark:text-white transition-all duration-200">
                  <span>{endsByType(nb.key, nb.title)}</span>
                </h2>
                <p class="xl:flex lg:flex sm:flex-row text-black dark:text-white transition-all duration-200">
                  <p className="xl:text-sm lg:text-xs sm:text-xs font-normal text-yellow-500 transition-all duration-200 mr-1">
                    {nb.location}
                  </p>
                  <p className="xl:text-sm lg:text-xs sm:text-xs font-normal text-gray-400 dark:text-gray-300 transition-all duration-200 xl:ml-1 lg:ml-1 sm:ml-0">
                    {nb.location2}
                  </p>
                </p>
              </div>
              <div class="flex items-center justify-center h-full mr-6 xl:w-[35%] lg:w-[30%]">
                <img
                  class="max-h-[6rem] object-contain"
                  src={nb.img}
                  alt={nb.imgAlt}
                />
              </div>
            </div>
            <div class="flex xl:w-[55%] lg:w-[60%] h-[100%] text-sm items-center">
              <div class="h-[90%] w-full rounded-lg pt-2 px-3 border border-gray-200 min-h-0 max-h-[90%]">
                {typeof nb.text === "string" ? (
                  <p>{nb.text}</p>
                ) : (
                  <ul class="list-disc list-inside xl:space-y-1 pl-1 lg:text-xs">
                    {nb.text.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  // <div class="flex flex-col flex-wrap h-[4rem] overflow-x-auto">
                  //   {nb.text.map((item, index) => (
                  //     <p key={index}>{item}</p>
                  //   ))}
                  // </div>
                )}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
