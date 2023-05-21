import { Timeline } from "../molecules/timeline/Timeline";

export function SecondBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="pt-4">
      <div class="grid grid-cols-3 place-items-center rounded-md bg-gray-300 transition-all duration-500 text-black dark:text-white dark:bg-zinc-600">
        <div className="flex col-span-1">
          <Timeline timelineInfo={deploy.timelineInfo} />
        </div>
        <div className="grid col-span-2 grid-cols-1 h-full w-full justify-center items-center p-2">
          {deploy.texts.map((nb) => (
            <div className="flex col-span-1 h-5/6 m-2 text-lg text-black drop-shadow-md dark:text-white justify-center items-center bg-gray-100 dark:bg-zinc-700 transition-all duration-500 rounded-md">
              {nb}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
