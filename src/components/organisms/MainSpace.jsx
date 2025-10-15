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
import { useNavigation } from "../../context/NavigationContext"; // Import the navigation hook

import "./MainSpaceBackground.css";

export function MainSpace({ nb }) {
  let horRef = React.useRef(null);
  
  // Use the navigation context
  const { goToNextSection } = useNavigation();

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
    <>
      <div
        className="flex w-full h-full max-h-full overflow-hidden shadow-lg rounded-lg border border-gray-200 transition duration-200"
        ref={horRef}
      >
        <div className="flex w-full h-full max-h-full font-primary rounded bg-white dark:bg-zinc-600 transition-all duration-200">
          <div className="flex h-full max-h-full w-full">{nbDeploy}</div>
        </div>
        {nb.key === 6 ? null : (
        <div
          onClick={goToNextSection}
          class="absolute flex rounded-full px-3 py-2 bg-pink-500 text-white text-sm font-medium cursor-pointer -bottom-5 -right-5 z-[1000] select-none"
        >
          Next
        </div>)}
      </div>
    </>
  );
}
