export function FifthBlock({ deploy }) {
  //state

  //comportements
  const keyColor = (id) => {
    switch (id) {
      case 1:
        return [
          "grid grid-cols-7 rounded-md text-black bg-yellow-300 p-2 mb-4 drop-shadow-md",
          "flex w-full text-center text-black text-2xl font-bold rounded-md border-2 border-yellow-500 bg-yellow-500 dark:text-white justify-center items-center transition-all duration-500",
        ];

      case 2:
        return [
          "grid grid-cols-7 rounded-md text-black bg-slate-300 p-2 mb-4 drop-shadow-md",
          "flex w-full text-center text-black text-2xl font-bold rounded-md border-2 border-slate-500 bg-slate-500 dark:text-white justify-center items-center transition-all duration-500",
        ];

      case 3:
        return [
          "grid grid-cols-7 rounded-md text-black bg-amber-600 p-2 drop-shadow-md",
          "flex w-full text-center text-black text-2xl font-bold rounded-md border-2 border-amber-800 bg-amber-800 dark:text-white justify-center items-center transition-all duration-500",
        ];

      default:
        return [
          "grid grid-cols-7 text-black rounded-md drop-shadow-md bg-white p-2 mt-4 dark:bg-zinc-500 dark:text-white transition-all duration-500",
          "flex w-full text-center text-black text-2xl font-bold rounded-md bg-zinc-200 dark:bg-zinc-700 dark:text-white justify-center items-center transition-all duration-500",
        ];
    }
  };

  //affichage
  return (
    <div className="pt-4">
      <div className="flex-row bg-gray-100 dark:bg-zinc-600 text-black dark:text-white transition-all duration-500 p-4 rounded-md">
        <div className="grid grid-cols-7 mb-4">
          <p className="flex w-full h-full justify-center col-span-1 text-xl font-bold text-center">
            Rank
          </p>
          <p className="flex w-full h-full justify-center col-span-2 text-xl font-bold text-center">
            Desired job
          </p>
          <p className="flex w-full h-full justify-center col-span-2 text-xl font-bold text-center">
            Desired stacks (for the job)
          </p>
          <p className="flex w-full h-full justify-center col-span-2 text-xl font-bold text-center">
            More
          </p>
        </div>
        {deploy.map((nb) => (
          <div className={keyColor(nb.key)[0]}>
            <div className="flex w-full h-full col-span-1">
              <p className={keyColor(nb.key)[1]}>{nb.key}</p>
            </div>
            <div className="flex w-full h-full col-span-2">
              <p className="w-full text-center">{nb.job}</p>
            </div>
            <div className="flex w-full h-full col-span-2">
              <p className="w-full text-center">{nb.stack}</p>
            </div>
            <div className="flex w-full h-full col-span-2">
              <p className="w-full text-center">{nb.more}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
