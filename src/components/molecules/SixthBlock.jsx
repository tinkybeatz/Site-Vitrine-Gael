import { TimelineComponent } from "../molecules/timeline/Timeline";

export function SixthBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div className="">
      <div className="grid grid-cols-3 bg-gray-300 rounded-lg dark:bg-zinc-600 transition-all duration-200">
        <div className="grid col-span-2 grid-cols-1 h-full w-full justify-center items-center">
          {deploy.texts.map((nb) => (
            <div className="flex col-span-1 h-5/6 px-5 xl:mx-5 lg:mx-5 sm:mr-5 xl:text-lg lg:text-lg sm:text-xs text-black dark:text-white items-center bg-gray-100 drop-shadow-md dark:bg-zinc-700 transition-all duration-200 rounded-lg">
              {nb}
            </div>
          ))}
        </div>
        <div className="flex col-span-1 items-center justify-center transition-all duration-200">
          <TimelineComponent timelineInfo={deploy.timelineInfo} />
        </div>
      </div>
    </div>
  );
}
