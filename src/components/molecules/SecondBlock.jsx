import { TimelineComponent } from "../molecules/timeline/Timeline";

export function SecondBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="">
      <div class="grid grid-cols-3 place-items-center rounded-md bg-gray-300 transition-all duration-200 text-black dark:text-white dark:bg-zinc-600">
        <div className="flex col-span-1 ml-2">
          <TimelineComponent timelineInfo={deploy.timelineInfo} />
        </div>
        <div className="grid col-span-2 grid-cols-1 h-full w-full justify-center items-center">
          {deploy.texts.map((nb) => (
            <div className="flex col-span-1 h-5/6 px-5 mx-5 text-lg text-black drop-shadow-md dark:text-white items-center bg-gray-100 dark:bg-zinc-700 transition-all duration-200 rounded-md">
              {nb}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
