export function FirstBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div className="">
      <div className="xl:grid lg:grid xl:grid-cols-3 lg:grid-cols-3 sm:flex-row place-items-center rounded-md bg-gray-300 transition-all duration-200 text-black dark:text-white dark:bg-zinc-600">
        <div className="xl:col-span-1 lg:col-span-1 xl:w-2/3 lg:w-5/6 sm:w-full sm:flex-row sm:mb-4">
          <div className="xl:text-xl lg:text-xl sm:text-md font-bold p-2 rounded-md drop-shadow-md bg-gray-200 dark:bg-zinc-500 text-black dark:text-white transition-all duration-200 text-center mb-2">
            My passions :
          </div>
          <div className="h-3/4 xl:ml-10 lg:ml-10 sm:m-0">
            <ul className="list-inside">
              {deploy.passions.map((nb) => (
                <li className="xl:text-lg lg:text-lg sm:text-xs">
                  <span className="dark:text-yellow-500 text-red-500 transition-all duration-200">
                    {nb.key}.{" "}
                  </span>{" "}
                  {nb.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex h-full xl:text-lg lg:text-lg sm:text-xs sm:mb-4 sm:py-4 text-black dark:text-white items-center rounded-md drop-shadow-md col-span-1 bg-gray-200 dark:bg-zinc-500 transition-all duration-200 px-10 text-center">
          {deploy.text}
        </div>
        <div className="xl:col-span-1 lg:col-span-1 xl:w-2/3 lg:w-5/6 sm:w-full sm:flex-row">
          <div className="xl:text-xl lg:text-xl sm:text-md font-bold p-2 rounded-md drop-shadow-md bg-gray-200 dark:bg-zinc-500 text-black dark:text-white transition-all duration-200 text-center mb-2">
            My Soft Skills :
          </div>
          <div className="h-3/4 xl:ml-10 lg:ml-10 sm:m-0">
            <ul className="list-inside">
              {deploy.softSkills.map((nb) => (
                <li className="xl:text-lg lg:text-lg sm:text-xs">
                  <span className="dark:text-yellow-500 text-red-500 transition-all duration-200">
                    {nb.key}.{" "}
                  </span>{" "}
                  {nb.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
