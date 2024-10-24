"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Create",
    },
    {
      text: "your",
    },
    {
      text: "next",
    },
    {
      text: "authentication",
    },
    {
      text: "Faster.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center sm:h-[30rem] h-[17rem] pt-10 sm:pt-0">
      <p className="text-neutral-600 dark:text-neutral-200 text-md sm:text-base  ">
        Got you covered for you next projects.
      </p>
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-md sm:text-base pb-10 text-center">
       Just copy the commands below, and you&apos;re done with the auth part.
      </p>
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 ">
      
        <CommandCopyExample/>
        
        
      </div> */}
    </div>
  );
}
