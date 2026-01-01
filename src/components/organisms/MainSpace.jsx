import { AboutMeBlock } from "../molecules/AboutMeBlock";
import { ExperiencesBlock } from "../molecules/ExperiencesBlock";
import { SkillsBlock } from "../molecules/SkillsBlock";
import { MyWorkBlock } from "../molecules/MyWorkBlock";
import { EducationBlock } from "../molecules/EducationBlock";
import { ContactBlock } from "../molecules/ContactBlock";
import { HireMeBlock } from "../molecules/HireMeBlock";
import { NextSectionButton } from "../atoms/NextSectionButton";
import React from "react";
import { gsap } from "gsap";

import { vertFadeInScroll } from "../../../gsap/verticalFadeIn";
import { horFadeInScroll } from "../../../gsap/horizontalFadeIn";

import "./MainSpace.css";

export function MainSpace({ nb }) {
  let horRef = React.useRef(null);

  // Effect for the horizontal fade in
  React.useEffect(() => {
    horFadeInScroll(horRef.current, +80);
  }, []);

  let nbDeploy;
  switch (nb.key) {
    case 1:
      nbDeploy = <AboutMeBlock deploy={nb.deploy} />;
      break;

    case 2:
      nbDeploy = <SkillsBlock deploy={nb.deploy} />;
      break;

    case 3:
      nbDeploy = <ExperiencesBlock deploy={nb.deploy} />;
      break;

    case 4:
      nbDeploy = <HireMeBlock deploy={nb.deploy} />;
      break;

    case 5:
      nbDeploy = <MyWorkBlock deploy={nb.deploy} />;
      break;

    case 6:
      nbDeploy = <EducationBlock deploy={nb.deploy} />;
      break;

    case 7:
      nbDeploy = <ContactBlock deploy={nb.deploy} />;
      break;

    default:
      break;
  }

  //affichage
  return (
    <>
      <div
        className="relative flex w-full h-full max-h-full overflow-visible"
        ref={horRef}
      >
        <div className="flex w-full h-full max-h-full overflow-hidden shadow-lg rounded-lg border border-gray-200 transition duration-200">
          <div className="flex w-full h-full max-h-full font-primary rounded bg-white dark:bg-zinc-600 transition-all duration-200">
            <div className="flex h-full max-h-full w-full">{nbDeploy}</div>
          </div>
        </div>
        <NextSectionButton 
          className="absolute -bottom-5 -right-5 xs:hidden mobile:hidden"
          show={nb.key !== 7}
          text={"Next section"}
        />
      </div>
    </>
  );
}
