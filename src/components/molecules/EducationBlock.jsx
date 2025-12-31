import { TimelineComponent } from "../molecules/timeline/Timeline";

export function EducationBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="flex p-4 w-full h-full">
      <div class="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 h-full w-full place-items-center rounded-lg transition-all duration-200 text-black dark:text-white dark:bg-zinc-600">
        <div className="flex col-span-3 h-full w-full">
          <TimelineComponent timelineInfo={deploy.timelineInfo} />
        </div>
      </div>
    </div>
  );
}
