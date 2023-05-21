import { Button1 } from "../atoms/buttons/Button1";
import { FirstBlock } from "../molecules/FirstBlock";
import { SecondBlock } from "../molecules/SecondBlock";
import { ThirdBlock } from "../molecules/ThirdBlock";
import { FourthBlock } from "../molecules/FourthBlock";
import { FifthBlock } from "../molecules/FifthBlock";
import { SixthBlock } from "../molecules/SixthBlock";
import { SeventhBlock } from "../molecules/SeventhBlock";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export function MainSpace({ nb }) {
  //state
  const [isDeployed, setIsDeployed] = useState(false);
  let nbDeploy;

  switch (nb.key) {
    case 1:
      nbDeploy = <FirstBlock deploy={nb.deploy} />;
      break;

    case 2:
      nbDeploy = <SecondBlock deploy={nb.deploy} />;
      break;

    case 3:
      nbDeploy = <ThirdBlock deploy={nb.deploy} />;
      break;

    case 4:
      nbDeploy = <FourthBlock deploy={nb.deploy} />;
      break;

    case 5:
      nbDeploy = <FifthBlock deploy={nb.deploy} />;
      break;

    case 6:
      nbDeploy = <SixthBlock deploy={nb.deploy} />;
      break;

    case 7:
      nbDeploy = <SeventhBlock deploy={nb.deploy} />;
      break;

    default:
      break;
  }

  //comportements
  const changeHeight = (e) => {
    e.preventDefault();
    setIsDeployed(!isDeployed);
  };

  //affichage
  return (
    <div className="w-[90%] h-auto mt-10 drop-shadow-md">
      <div className="grid p-4 grid-cols-9 drop-shadow-md bg-gray-200 dark:bg-zinc-500 dark:text-white transition duration-500 rounded-md">
        <div className="font-primary text-2xl border-r-2 border-gray-300 justify-center items-center flex col-span-1">
          <p>{nb.key}</p>
        </div>
        <div className="font-primary text-2xl border-r-2 border-gray-300 justify-center items-center flex col-span-7">
          <p>{nb.name}</p>
        </div>
        <div className="font-primary text-2xl justify-center items-center flex col-span-1">
          <Button1
            id="button"
            text={isDeployed ? "-" : "+"}
            onClick={() => changeHeight(event)}
          />
        </div>
        <CSSTransition
          in={isDeployed}
          timeout={200}
          classNames="grow"
          className="col-span-9"
          unmountOnExit
        >
          <div className="p-4 font-primary rounded rounded-b-md bg-gray-300 grid">
            {nbDeploy}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}
