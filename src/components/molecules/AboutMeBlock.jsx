import crossfitImage from "../../../public/images/crossfit.png";
import musicImage from "../../../public/images/music.png";
import mechanicImage from "../../../public/images/mechanic.png";
import gaelImage from "../../../public/images/imageGael.jpg";
import { useState, useRef } from "react";

export function AboutMeBlock({ deploy }) {
  //state
  const [topImage, setTopImage] = useState("crossfit"); // Default top image
  const prevTopImageRef = useRef("mechanic");

  //comportements
  const handleImageClick = (imageName) => {
    prevTopImageRef.current = topImage;
    setTopImage(imageName);
  };

  const getZIndex = (imageName) => {
    if (imageName === topImage) {
      return 30;
    } else if (imageName === prevTopImageRef.current) {
      return 20;
    } else {
      return 10;
    }
  };

  //affichage
  return (
    <div className="flex w-full h-full p-4">
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="rounded-lg flex shadow-lg overflow-hidden">
          <img
            className="object-cover rounded-lg"
            src={gaelImage}
            alt="Gael Image"
          />
        </div>
        <div className="flex flex-col p-4 h-full overflow-auto">
          <p class="text-2xl font-medium dark:text-white pb-2 text-black duration-200">
            Gaël DELOUIS
          </p>
          <div class="flex flex-col pb-4 lg:text-sm">
            <div class="flex">
              <p class="text-gray-400 font-light pr-2">
                📍 Kuala Lumpur, Malaysia
              </p>
            </div>
            <div class="flex">
              <p class="text-gray-400 font-light pr-2">
                💻 Full-Stack Web Developer
              </p>
              <p class="pr-2">&bull;</p>
              <p class="text-gray-400 font-light pr-2">🇫🇷 French</p>
            </div>
          </div>
          <div class="flex flex-col lg:text-sm pb-6">
            <p class="pb-2">Hey 👋</p>
            <p class="pb-4">{deploy.text}</p>
            <p>{deploy.text2}</p>
          </div>
          <div class="xl:text-lg font-medium pb-2">My passions</div>
          <div class="flex flex-wrap gap-2 pb-6">
            {deploy.passions.map((passion) => (
              <div class="rounded-full text-sm lg:text-xs bg-white border border-gray-200 xl:px-4 xl:py-2 lg:px-3 lg:py-1">
                {passion.key}. {passion.text}
              </div>
            ))}
          </div>
          <div class="xl:text-lg font-medium pb-2">My personality traits</div>
          <div class="flex flex-wrap gap-2 pb-4">
            {deploy.softSkills.map((softSkill) => (
              <div class="rounded-full text-sm lg:text-xs bg-white border border-gray-200 xl:px-4 xl:py-2 lg:px-3 lg:py-1">
                {softSkill.key}. {softSkill.text}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={crossfitImage}
            alt="crossfit"
            className="absolute xl:w-64 lg:w-52 h-auto xl:top-5 lg:top-14 xl:left-8 lg:left-4 transform rotate-[-5deg] shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
            style={{ zIndex: getZIndex("crossfit") }}
            onClick={() => handleImageClick("crossfit")}
          />
          <img
            src={musicImage}
            alt="music"
            className="absolute xl:w-64 lg:w-52 h-auto xl:top-[150px] lg:top-[170px] xl:left-[160px] lg:left-[100px] transform rotate-[5deg] shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
            style={{ zIndex: getZIndex("music") }}
            onClick={() => handleImageClick("music")}
          />
          <img
            src={mechanicImage}
            alt="mechanic"
            className="absolute xl:w-64 lg:w-52 h-auto xl:top-[300px] lg:top-[340px] left-[60px] transform shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
            style={{ zIndex: getZIndex("mechanic") }}
            onClick={() => handleImageClick("mechanic")}
          />
        </div>
      </div>
    </div>
  );
}
