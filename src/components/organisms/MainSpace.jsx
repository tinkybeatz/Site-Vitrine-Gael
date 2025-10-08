import { FirstBlock } from "../molecules/FirstBlock";
import { SecondBlock } from "../molecules/SecondBlock";
import { ThirdBlock } from "../molecules/ThirdBlock";
import { FourthBlock } from "../molecules/FourthBlock";
// import { FifthBlock } from "../molecules/FifthBlock";
import { SixthBlock } from "../molecules/SixthBlock";
import { SeventhBlock } from "../molecules/SeventhBlock";
import React from "react";
import { gsap } from "gsap";

import { vertFadeInScroll } from "../../../gsap/verticalFadeIn";
import { horFadeInScroll } from "../../../gsap/horizontalFadeIn";

import "./MainSpaceBackground.css";

export function MainSpace({ nb }) {
  let horRef = React.useRef(null);

  React.useEffect(() => {
    horFadeInScroll(horRef.current, +80);
  }, []);

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

    // case 5:
    //   nbDeploy = <FifthBlock deploy={nb.deploy} />;
    //   break;

    case 5:
      nbDeploy = <SixthBlock deploy={nb.deploy} />;
      break;

    case 6:
      nbDeploy = <SeventhBlock deploy={nb.deploy} />;
      break;

    default:
      break;
  }

  //affichage
  return (
    <div className="flex w-full h-full overflow-hidden shadow-lg rounded-lg border border-gray-200 transition duration-200" ref={horRef}>
      <div className="w-full h-full font-primary rounded bg-white dark:bg-zinc-600 transition-all duration-200">
        <div className="p-4 h-full">{nbDeploy}</div>
      </div>
    </div>
  );
}
