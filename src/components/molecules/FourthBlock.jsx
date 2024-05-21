import { CardProject } from "./cards/CardProject";

export function FourthBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div className="">
      <div
        className="
      flex
      rounded-md

      transition-all 
      duration-200 

      text-black 
      dark:text-white 
      bg-gray-300 
      dark:bg-zinc-600
      
      flex-nowrap
      overflow-x-auto
      "
      >
        {deploy.map((nb) => (
          <CardProject cardInfo={nb} />
        ))}
      </div>
    </div>
  );
}
