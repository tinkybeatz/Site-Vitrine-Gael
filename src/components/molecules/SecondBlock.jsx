import { TimelineComponent } from "../molecules/timeline/Timeline";

export function SecondBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="">
      <div class="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 place-items-center rounded-md bg-gray-300 transition-all duration-200 text-black dark:text-white dark:bg-zinc-600">
        <div className="flex xl:col-span-1 lg:col-span-1 sm:col-span-1 xl:ml-2 lg:ml-2 sm:pr-4">
          <TimelineComponent timelineInfo={deploy.timelineInfo} />
        </div>
        <div className="grid xl:col-span-2 lg:col-span-2 sm:col-span-1 grid-cols-1 h-full w-full justify-center items-center">
          {deploy.texts.map((nb, id) => (
            <div className="flex col-span-1 xl:h-5/6 lg:h-5/6 sm:h-auto xl:px-5 xl:mx-5 lg:px-5 lg:mx-5 sm:px-2 sm:py-2 xl:text-lg lg:text-lg sm:text-[10px] text-black drop-shadow-md dark:text-white items-center bg-gray-100 dark:bg-zinc-700 transition-all duration-200 rounded-md">
              {id+1}. {nb}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
