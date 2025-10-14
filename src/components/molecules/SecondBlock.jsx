import { TimelineComponent } from "../molecules/timeline/Timeline";

export function SecondBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="">
      <div class="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 place-items-center rounded-lg transition-all duration-200 text-black dark:text-white dark:bg-zinc-600">
        <div className="flex col-span-3 w-full xl:ml-14 lg:ml-2 sm:pr-4">
          <TimelineComponent timelineInfo={deploy.timelineInfo} />
        </div>
      </div>
    </div>
  );
}
