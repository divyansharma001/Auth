"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
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
       Just clone the repo, and you&apos;re done with the auth part.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 ">
        <Link href="https://github.com/divyansharma001/Auth">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          CodeBase
        </button>
        </Link>
        
      </div>
    </div>
  );
}
