import { Button1 } from "../atoms/buttons/Button1";
import { FirstBlock } from "../molecules/FirstBlock";
import { SecondBlock } from "../molecules/SecondBlock";
import { ThirdBlock } from "../molecules/ThirdBlock";
import { FourthBlock } from "../molecules/FourthBlock";
import { FifthBlock } from "../molecules/FifthBlock";
import { SixthBlock } from "../molecules/SixthBlock";
import { SeventhBlock } from "../molecules/SeventhBlock";
import { useState } from "react";
import React from "react";
import { gsap } from "gsap";
// import { CSSTransition } from "react-transition-group";

import {
  vertFadeInDeploy,
  vertFadeInPres,
  vertFadeInScroll,
} from "../../../gsap/verticalFadeIn";
import { horFadeInScroll } from "../../../gsap/horizontalFadeIn";

export function MainSpace({ nb }) {
  //state
  const [isDeployed, setIsDeployed] = useState(true);

  let horRef = React.useRef(null);

  React.useEffect(() => {
    horFadeInScroll(horRef.current, +80);
  }, []);

  // |||||||||||||||||||||||

  const parentContainer = document.querySelector(".parent-container");
  const content = React.useRef(null);
  const triggerDeploy = React.useRef(null);

  React.useEffect(() => {
    triggerDeploy.current.addEventListener("click", () => {
      vertFadeInDeploy(content, content.current.offsetHeight);
      setIsDeployed(!isDeployed);
    });
  }, [triggerDeploy]);

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

  //affichage
  return (
    <div className="w-[90%] h-auto mt-10 drop-shadow-md" ref={horRef} id={nb.key}>
      <div className="parent-container grid p-4 grid-cols-9 drop-shadow-md bg-gray-200 dark:bg-zinc-500 dark:text-white transition duration-200 rounded-md">
        <div className="font-primary text-2xl border-r-2 border-gray-300 justify-center items-center flex col-span-1">
          <p>{nb.key}</p>
        </div>
        <div className="font-primary text-3xl border-r-2 border-gray-300 justify-center items-center flex col-span-7">
          <p>{nb.name}</p>
        </div>
        {/* <div className="font-primary text-2xl justify-center items-center flex col-span-1">
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
        </CSSTransition> */}
        <div
          className="font-primary text-2xl justify-center items-center flex col-span-1"
          ref={triggerDeploy}
        >
          <Button1 href={nb.key} text="+" onClick="" />
        </div>
        <div
          className="content col-span-9 font-primary rounded rounded-b-md bg-gray-300 dark:bg-zinc-600 transition-all duration-200 grid overflow-hidden"
          ref={content}
        >
          <div className="p-4">{nbDeploy}</div>
        </div>
      </div>
    </div>
  );
}
