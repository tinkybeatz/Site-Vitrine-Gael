import { ProgressBar } from "../atoms/ProgressBar";

export function ThirdBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="">
      <div class="grid grid-cols-2 place-items-center bg-gray-300 rounded-md text-black dark:text-white dark:bg-zinc-600 transition duration-200">
        <div class="grid col-span-1 text-xl w-[90%]">{deploy.text}</div>
        <div class="col-span-1 grid grid-cols-1 my-2 justify-items-start w-[95%]">
          <div class="mb-5 mt-2">
            <p class="font-bold text-xl">Developpement web :</p>
            {deploy.list.map((rowList) => (
              <div>{rowList}</div>
            ))}
          </div>
          <div>
            {deploy.progress.map((row) => (
              <div class="grid col-span-1 mb-5 w-full">
                <p class="font-bold text-xl mb-2">{row.nline}</p>
                <ProgressBar progress={row.progress} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
