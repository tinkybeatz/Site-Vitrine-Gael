import { CardProject } from "./cards/CardProject";

export function FourthBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div className="pt-4">
      <div
        className="
      flex
      rounded-md

      pl-4
      py-4

      transition-all 
      duration-500 

      text-black 
      dark:text-white 
      bg-gray-300 
      dark:bg-zinc-600
      
      flex-nowrap
      overflow-x-auto"
      >
        {deploy.map((nb) => (
          <CardProject cardInfo={nb} />
        ))}
      </div>
    </div>
  );
}
