import { TimelineComponent } from "../molecules/timeline/Timeline";

export function SixthBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div className="pt-4">
      <div className="grid grid-cols-3 bg-gray-300 rounded-md dark:bg-zinc-600 transition-all duration-500">
        <div className="grid col-span-2 grid-cols-1 h-full w-full justify-center items-center p-2">
          {deploy.texts.map((nb) => (
            <div className="flex col-span-1 h-5/6 m-2 text-lg text-black dark:text-white justify-center items-center bg-gray-100 drop-shadow-md dark:bg-zinc-700 transition-all duration-500 rounded-md">
              {nb}
            </div>
          ))}
        </div>
        <div className="flex col-span-1 items-center justify-center transition-all duration-500">
          <TimelineComponent timelineInfo={deploy.timelineInfo} />
        </div>
      </div>
    </div>
  );
}
