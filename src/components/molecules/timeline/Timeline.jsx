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
          {key}. {newText} <span className="text-green-500 ml-1">- Freelance</span>
        </p>
      );
    } else if (text.endsWith("- Ryss")) {
      const newText = text.substring(0, text.length - 7);
      return (
        <p>
          {key}. {newText} <span className="text-blue-500 ml-1">- Ryss</span>
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

  //affichage
  return (
    <ol class="relative border-l border-purple-300 dark:border-purple-700 xl:my-4 lg:my-4 sm:my-0 transition-all duration-200">
      {timelineInfo.map((nb) => (
        <li class="xl:mb-10 lg:mb-8 sm:mb-8 ml-4 transition-all duration-200">
          <div class="absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-1.5 dark:bg-purple-500 transition-all duration-200"></div>
          <time class="xl:text-sm lg:text-sm sm:text-[10px] leading-none text-gray-400 dark:text-gray-400 transition-all duration-200">
            {nb.dates}
          </time>
          <h2 class="xl:text-xl lg:text-lg sm:text-xs font-semibold text-gray-900 drop-shadow-md dark:text-white transition-all duration-200">
            <span>{endsByType(nb.key, nb.title)}</span>
          </h2>
          <p class="xl:flex lg:flex sm:flex-row text-black dark:text-white transition-all drop-shadow-sm duration-200">
            <p className="xl:text-base lg:text-base sm:text-xs font-normal text-yellow-500 transition-all duration-200 mr-1">
              {nb.location}
            </p>
            <p className="xl:text-base lg:text-base sm:text-xs font-normal text-gray-400 dark:text-gray-300 transition-all duration-200 xl:ml-1 lg:ml-1 sm:ml-0">
              {nb.location2}
            </p>
          </p>
        </li>
      ))}
    </ol>
  );
}
