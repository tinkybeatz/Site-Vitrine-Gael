import React from "react";

export function SixthBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="flex flex-col h-full w-full bg-white p-4">
      <div class="pb-4 text-base">
        Have a question or want to work together? Feel free to drop me a
        message. I'd love to hear from you!
      </div>
      <div class="grid grid-cols-3 w-full h-full gap-4">
        <div class="col-span-1 flex flex-col rounded-lg shadow-inner border border-gray-200 p-4 gap-4 items-start">
          <div class="font-medium text-lg">
            Contact informations
          </div>
          <div class="flex flex-col pl-4 gap-2 mb-2">
            {deploy &&
              deploy.contact_informations &&
              deploy.contact_informations.map((info, index) => (
                <div key={index} class="flex items-center h-[3rem]">
                  {info.img && (
                    <div class="h-full aspect-square flex items-center justify-center">
                      {React.cloneElement(info.img, {
                        style: { fontSize: "1.5rem" },
                      })}
                    </div>
                  )}
                  <div class="flex flex-col">
                    <div class="font-medium text-sm">{info.title}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        class="text-blue-600 hover:text-blue-800 text-sm"
                        target={
                          info.href.startsWith("mailto:") ||
                          info.href.startsWith("tel:")
                            ? "_self"
                            : "_blank"
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div class="text-sm text-gray-600">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div class="font-medium text-lg">Let's connect !</div>
          <div class="flex gap-2 pl-4">
            {deploy &&
              deploy.connect &&
              deploy.connect.map((icon) => (
                <div class="bg-white border shadow-md cursor-pointer hover:bg-gray-200 border-gray-200 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full">
                  {React.cloneElement(icon.img, {
                    style: { fontSize: "1.5rem" },
                  })}
                </div>
              ))}
          </div>
        </div>
        <div class="col-span-2 rounded-lg shadow-inner border border-gray-200 flex justify-center items-center">
          test
        </div>
      </div>
    </div>
  );
}
