import { ProgressBar } from "../atoms/ProgressBar";

export function ThirdBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="pt-4">
      <div class="grid grid-cols-2 place-items-center bg-gray-100 rounded-md text-black dark:text-white dark:bg-zinc-600 transition duration-500">
        <div class="grid col-span-1 w-[90%]">{deploy.text}</div>
        <div class="col-span-1 grid grid-cols-1 my-5 justify-items-start w-[90%]">
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
