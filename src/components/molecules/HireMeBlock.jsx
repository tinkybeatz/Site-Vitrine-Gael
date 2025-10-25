import React from "react";

export function HireMeBlock({ deploy }) {
  return (
    <div className="flex flex-col p-4 w-full gap-4 h-full items-center">
      <div className="flex flex-col xl:w-1/2 lg:w-2/3 items-center p-4 gap-2">
        <p className="xl:text-3xl lg:text-2xl md:text-2xl text-center font-bold">{deploy.text}</p>
        <p className="text-center lg:text-sm md:text-sm">{deploy.text2}</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 h-full w-full gap-4 p-4 border border-gray-200 rounded-lg shadow-inner">
        {deploy.blocks.map((block) => (
          <div
            key={block.key}
            className="flex col-span-1 h-full border border-gray-200 rounded-md gap-4 items-center justify-center xl:pt-10 xl:px-10 lg:pt-8 lg:px-8 md:px-6 md:pt-6 shadow-md"
          >
            <div className="flex h-full xl:w-1/6 lg:w-1/5 md:w-1/5 items-start">
              {block.icon && (
                <div
                  className={`h-min w-full aspect-square flex items-center border shadow-md ${block.iconStyling} rounded-md justify-center`}
                >
                  {React.cloneElement(block.icon, {
                    className: "xl:text-3xl lg:text-2xl md:text-xl",
                  })}
                </div>
              )}
            </div>
            <div className="flex h-full flex-col gap-1 xl:w-5/6 lg:w-4/5 md:w-4/5">
              <div className="font-semibold xl:text-lg lg:text-base md:text-[15px]">{block.title}</div>
              <div className="lg:text-[12.5px] md:text-xs">{block.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
