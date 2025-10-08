export function CardProject({ cardInfo }) {
  //state

  //comportements

  //affichage
  return (
    <div className="shrink-0 divide flex-row relative rounded-lg drop-shadow-md xl:h-96 xl:w-80 lg:h-96 lg:w-80 sm:h-72 sm:w-60 bg-white dark:bg-zinc-700 text-black dark:text-white transition-all duration-200 mr-4">
      <div className="flex xl:text-xl lg:text-lg sm:text-md px-2 h-1/5 font-bold items-center justify-center text-center">
        {cardInfo.id}. {cardInfo.title}
      </div>
      <div className="flex-row h-4/5 p-4 bg-gray-100 transition-all duration-200 dark:bg-zinc-800 rounded-b-md">
        <p className="text-black dark:text-white font-normal transition-all duration-200 mb-4 xl:text-md lg:text-md sm:text-xs">
          <span className="text-red-600 font-bold">- Description : </span>
          {cardInfo.desc}
        </p>
        <p className="text-black dark:text-white font-normal transition-all duration-200 mb-4 xl:text-md lg:text-md sm:text-xs">
          <span className="text-yellow-500 font-bold">
            - Technology(ies) used :{" "}
          </span>
          {cardInfo.techno}
        </p>
      </div>
    </div>
  );
}
