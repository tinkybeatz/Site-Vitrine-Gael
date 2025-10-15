// export function FifthBlock({ deploy }) {
//   //state

//   //comportements
//   const keyColor = (id) => {
//     switch (id) {
//       case 1:
//         return [
//           "grid grid-cols-7 rounded-lg text-black bg-yellow-300 p-2 mb-4 drop-shadow-md",
//           "flex w-full text-center text-black xl:text-2xl lg:text-xl sm:text-md font-bold rounded-lg border-2 border-yellow-500 bg-yellow-500 dark:text-white justify-center items-center transition-all duration-200",
//         ];

//       case 2:
//         return [
//           "grid grid-cols-7 rounded-lg text-black bg-slate-400 p-2 mb-4 drop-shadow-md",
//           "flex w-full text-center text-black xl:text-2xl lg:text-xl sm:text-md font-bold rounded-lg border-2 border-slate-500 bg-slate-500 dark:text-white justify-center items-center transition-all duration-200",
//         ];

//       case 3:
//         return [
//           "grid grid-cols-7 rounded-lg text-black bg-amber-600 p-2 drop-shadow-md",
//           "flex w-full text-center text-black xl:text-2xl lg:text-xl sm:text-md font-bold rounded-lg border-2 border-amber-800 bg-amber-800 dark:text-white justify-center items-center transition-all duration-200",
//         ];

//       default:
//         return [
//           "grid grid-cols-7 text-black rounded-lg drop-shadow-md bg-white p-2 mt-4 dark:bg-zinc-500 dark:text-white transition-all duration-200",
//           "flex w-full text-center text-black xl:text-2xl lg:text-xl sm:text-md font-bold rounded-lg bg-zinc-200 dark:bg-zinc-700 dark:text-white justify-center items-center transition-all duration-200",
//         ];
//     }
//   };

//   //affichage
//   return (
//     <div className="">
//       <div className="flex-row bg-gray-300 dark:bg-zinc-600 text-black dark:text-white transition-all duration-200 rounded-lg">
//         <div className="grid grid-cols-7 mb-4">
//           <p className="flex w-full h-full justify-center col-span-1 xl:text-xl lg:text-lg sm:text-sm xl:font-bold lg:font-bold sm:font-medium text-center">
//             Rank
//           </p>
//           <p className="flex w-full h-full justify-center col-span-2 xl:text-xl lg:text-lg sm:text-sm xl:font-bold lg:font-bold sm:font-medium text-center">
//             Desired job
//           </p>
//           <p className="flex w-full h-full justify-center col-span-2 xl:text-xl lg:text-lg sm:text-sm xl:font-bold lg:font-bold sm:font-medium text-center">
//             Desired stacks (for the job)
//           </p>
//           <p className="flex w-full h-full justify-center col-span-2 xl:text-xl lg:text-lg sm:text-sm xl:font-bold lg:font-bold sm:font-medium text-center">
//             More
//           </p>
//         </div>
//         {deploy.map((nb) => (
//           <div className={keyColor(nb.key)[0]}>
//             <div className="flex w-full h-full col-span-1">
//               <p className={keyColor(nb.key)[1]}>{nb.key}</p>
//             </div>
//             <div className="flex w-full h-full col-span-2">
//               <p className="w-full text-center sm:text-xs">{nb.job}</p>
//             </div>
//             <div className="flex w-full h-full col-span-2">
//               <p className="w-full text-center sm:text-xs">{nb.stack}</p>
//             </div>
//             <div className="flex w-full h-full col-span-2">
//               <p className="w-full text-center sm:text-xs">{nb.more}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
