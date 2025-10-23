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
      {/* LG and XL: 3-column layout (photo | text | photos) */}
      <div className="hidden lg:grid xl:grid lg:grid-cols-3 xl:grid-cols-3 lg:gap-4 xl:gap-4 w-full">
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
          <div class="flex flex-col pb-4 lg:text-sm md:text-xs">
            {/* 1200px and above: Horizontal layout with bullet */}
            <div class="hidden lg:block xl:block">
              <div class="flex">
                <p class="text-gray-400 font-light pr-2">
                  <span class="pr-1">📍</span> Kuala Lumpur, Malaysia
                </p>
              </div>
              <div class="flex">
                <p class="text-gray-400 font-light pr-2">
                  <span class="pr-1">💻</span> Full-Stack Web Developer
                </p>
                <p class="pr-2">&bull;</p>
                <p class="text-gray-400 font-light pr-2">
                  <span class="pr-1">🇫🇷</span> French
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col lg:text-sm md:text-xs pb-6">
            <p class="pb-2">Hey 👋</p>
            <p class="pb-4">{deploy.text}</p>
            <p>{deploy.text2}</p>
          </div>
          <div class="xl:text-lg md:text-sm font-medium pb-2">My passions</div>
          <div class="flex flex-wrap gap-2 pb-6">
            {deploy.passions.map((passion) => (
              <div class="rounded-full text-sm lg:text-xs md:text-xs bg-white border border-gray-200 xl:px-4 xl:py-2 lg:px-3 lg:py-1">
                {passion.key}. {passion.text}
              </div>
            ))}
          </div>
          <div class="xl:text-lg md:text-sm font-medium pb-2">
            My personality traits
          </div>
          <div class="flex flex-wrap gap-2 pb-4">
            {deploy.softSkills.map((softSkill) => (
              <div class="rounded-full text-sm lg:text-xs md:text-xs bg-white border border-gray-200 xl:px-4 xl:py-2 lg:px-3 lg:py-1">
                {softSkill.key}. {softSkill.text}
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative xl:w-80 xl:h-96 lg:w-64 lg:h-80">
            <img
              src={crossfitImage}
              alt="crossfit"
              className="absolute xl:w-60 lg:w-52 h-auto bottom-[15%] transform rotate-[-5deg] shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
              style={{ zIndex: getZIndex("crossfit") }}
              onClick={() => handleImageClick("crossfit")}
            />
            <img
              src={mechanicImage}
              alt="mechanic"
              className="absolute xl:w-60 lg:w-52 h-auto bottom-[5%] xl:left-[30%] lg:left-[25%] transform shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
              style={{ zIndex: getZIndex("mechanic") }}
              onClick={() => handleImageClick("mechanic")}
            />
            <img
              src={musicImage}
              alt="music"
              className="absolute xl:w-60 lg:w-52 h-auto top-[15%] right-[5%] transform rotate-[5deg] shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
              style={{ zIndex: getZIndex("music") }}
              onClick={() => handleImageClick("music")}
            />
          </div>
        </div>
      </div>

      {/* MD and below: 2-column layout (text+photo | photos) */}
      <div className="lg:hidden xl:hidden w-full flex gap-4">
        {/* Left section: 3/5 width - Text on top, Gael's photo on bottom */}
        <div className="w-3/5 flex flex-col gap-4 h-full overflow-y-auto">
          {/* Text content */}
          <div className="flex w-full flex-col p-2 h-full">
            <div class="flex w-full justify-between">
              <div class="flex flex-col">
                <p class="text-xl font-medium dark:text-white pb-2 text-black duration-200">
                  Gaël DELOUIS
                </p>
                <div class="flex flex-col pb-4 text-sm">
                  <div class="flex flex-col gap-0.5">
                    <p class="text-gray-400 font-light pr-2">
                      <span class="pr-1">📍</span> Kuala Lumpur, Malaysia
                    </p>
                    <p class="text-gray-400 font-light pr-2">
                      <span class="pr-1">💻</span> Full-Stack Web Developer
                    </p>
                    <p class="text-gray-400 font-light pr-2">
                      <span class="pr-1">🇫🇷</span> French
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg w-36 h-36 shadow-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center rounded-lg scale-[2.15] -translate-x-2 translate-y-10"
                  src={gaelImage}
                  alt="Gael Image"
                />
              </div>
            </div>
            <div class="flex flex-col text-sm pb-6">
              <p class="pb-2">Hey 👋</p>
              <p class="pb-4">{deploy.text}</p>
              <p>{deploy.text2}</p>
            </div>
            <div class="text-base font-medium pb-2">My passions</div>
            <div class="flex flex-wrap gap-2 pb-6">
              {deploy.passions.map((passion) => (
                <div class="rounded-full text-xs bg-white border border-gray-200 px-3 py-1">
                  {passion.key}. {passion.text}
                </div>
              ))}
            </div>
            <div class="text-base font-medium pb-2">My personality traits</div>
            <div class="flex flex-wrap gap-2 pb-4">
              {deploy.softSkills.map((softSkill) => (
                <div class="rounded-full text-xs bg-white border border-gray-200 px-3 py-1">
                  {softSkill.key}. {softSkill.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section: 2/5 width - Passion photos */}
        <div className="w-2/5 relative flex items-center justify-center">
          <div className="relative w-full h-full">
            <img
              src={crossfitImage}
              alt="crossfit"
              className="absolute w-48 h-auto top-[10%] left-[10%] transform rotate-[-5deg] shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
              style={{ zIndex: getZIndex("crossfit") }}
              onClick={() => handleImageClick("crossfit")}
            />
            <img
              src={mechanicImage}
              alt="mechanic"
              className="absolute w-44 h-auto top-[30%] right-[10%] transform shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
              style={{ zIndex: getZIndex("mechanic") }}
              onClick={() => handleImageClick("mechanic")}
            />
            <img
              src={musicImage}
              alt="music"
              className="absolute w-44 h-auto top-[42%] left-[20%] transform rotate-[5deg] shadow-2xl rounded-lg border-4 border-gray-100 dark:border-zinc-100 duration-200 cursor-pointer"
              style={{ zIndex: getZIndex("music") }}
              onClick={() => handleImageClick("music")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
