export function CardProject({ cardInfo }) {
  //state

  //comportements

  //affichage
  return (
    <div className="shrink-0 divide flex-row relative rounded-md drop-shadow-md h-96 w-80 bg-white dark:bg-zinc-700 text-black dark:text-white transition-all duration-500 mr-4">
      <div className="flex text-xl px-2 h-1/5 font-bold items-center justify-center">
        {cardInfo.id}. {cardInfo.title}
      </div>
      <div className="flex-row h-4/5 p-4 bg-gray-100 transition-all duration-500 dark:bg-zinc-800 rounded-b-md">
        <p className="text-black dark:text-white font-normal transition-all duration-500 mb-4">
          <span className="text-red-600 font-bold">- Description : </span>
          {cardInfo.desc}
        </p>
        <p className="text-black dark:text-white font-normal transition-all duration-500 mb-4">
          <span className="text-yellow-500 font-bold">
            - Technology(ies) used :{" "}
          </span>
          {cardInfo.techno}
        </p>
      </div>
    </div>
  );
}
