import React from "react";

export function HireMeBlock({ deploy }) {
  return (
    <div className="flex flex-col p-4 w-full gap-4 h-full items-center">
      <div className="flex flex-col w-1/2 items-center p-4 gap-2">
        <p className="text-3xl text-center font-bold">{deploy.text}</p>
        <p className="text-center">{deploy.text2}</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 h-full w-full gap-4 p-4 border border-gray-200 rounded-lg shadow-inner">
        {deploy.blocks.map((block) => (
          <div
            key={block.key}
            className="flex col-span-1 h-full border border-gray-200 rounded-md gap-4 items-center justify-center pt-10 px-10 shadow-md"
          >
            <div className="flex h-full w-1/6 items-start">
              {block.icon && (
                <div
                  className={`h-min w-full aspect-square flex items-center border shadow-md ${block.iconStyling} rounded-md justify-center`}
                >
                  {React.cloneElement(block.icon, {
                    style: { fontSize: "2rem" },
                  })}
                </div>
              )}
            </div>
            <div className="flex h-full flex-col gap-1 w-5/6">
              <div className="font-semibold text-lg">{block.title}</div>
              <div className="">{block.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
