export function FirstBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div className="">
      <div className="grid grid-cols-3 place-items-center rounded-md bg-gray-300 transition-all duration-200 text-black dark:text-white dark:bg-zinc-600">
        <div className="col-span-1 w-2/3">
          <div className="text-xl font-bold p-2 rounded-md drop-shadow-md bg-gray-200 dark:bg-zinc-500 text-black dark:text-white transition-all duration-200 text-center mb-2">
            My passions :
          </div>
          <div className="h-3/4 ml-10">
            <ul className="list-inside">
              {deploy.passions.map((nb) => (
                <li>
                  <span className="dark:text-yellow-500 text-red-500 transition-all duration-200">
                    {nb.key}.{" "}
                  </span>{" "}
                  {nb.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex h-full text-lg text-black dark:text-white items-center rounded-md drop-shadow-md col-span-1 bg-gray-200 dark:bg-zinc-500 transition-all duration-200 px-10 text-center">
          {deploy.text}
        </div>
        <div className="col-span-1 w-2/3">
          <div className="text-xl font-bold p-2 rounded-md drop-shadow-md bg-gray-200 dark:bg-zinc-500 text-black dark:text-white transition-all duration-200 text-center mb-2">
            My Soft Skills :
          </div>
          <div className="h-3/4 ml-10">
            <ul className="list-inside">
              {deploy.softSkills.map((nb) => (
                <li>
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
