import { Timeline } from "antd";

export function Timeline({ timelineInfo }) {
  //state

  //comportements
  const endsByIntern = (key, text) => {
    if (text.endsWith("- Intern")) {
      const newText = text.substring(0, text.length - 8);
      return (
        <p>
          {key}. {newText} <span className="text-red-500 ml-1">- Intern</span>
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
    <ol class="relative border-l border-purple-300 dark:border-purple-700 my-4 transition-all duration-500">
      {timelineInfo.map((nb) => (
        <li class="mb-10 ml-4 transition-all duration-500">
          <div class="absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-1.5 dark:bg-purple-500 transition-all duration-500"></div>
          <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-400 transition-all duration-500">
            {nb.dates}
          </time>
          <h2 class="text-xl font-semibold text-gray-900 drop-shadow-md dark:text-white transition-all duration-500">
            <span>{endsByIntern(nb.key, nb.title)}</span>
          </h2>
          <p class="flex text-black dark:text-white transition-all drop-shadow-sm duration-500">
            <p className="text-base font-normal text-yellow-500 transition-all duration-500 mr-1">
              {nb.location}
            </p>
            |
            <p className="text-base font-normal text-gray-400 dark:text-gray-300 transition-all duration-500 ml-1">
              {nb.location2}
            </p>
          </p>
        </li>
      ))}
    </ol>
  );
}
