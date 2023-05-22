export function SeventhBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="">
      <div class="flex justify-around rounded-md bg-gray-300 transition-all duration-200 text-black dark:text-white dark:bg-zinc-600">
        {deploy.map((nb) => (
          <a href={nb.href == "" ? nb.link : nb.href} target="_blank">
            <div
              className="flex justify-around transition-all text-black dark:text-white duration-200 bg-gray-200 dark:bg-zinc-500 p-2 rounded-md drop-shadow-md
                        hover:drop-shadow-none hover:bg-gray-100 hover:dark:bg-zinc-400"
            >
              <div className="p-2">{nb.img}</div>
              <div className="p-2 text-xl">
                {nb.href == "" ? nb.value : nb.title}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
