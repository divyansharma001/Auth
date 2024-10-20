import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Next.js", "Next-auth", "Prisma", "Neon-DB", "Tailwind", "Typescript", "Framer Motion", "Aceternity UI", "Zod", ];

  return (
    <div className="h-10px flex justify-center items-center px-4 pt-10">
      <div className="md:text-4xl text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I created this using
        <FlipWords words={words} />
      </div>
    </div>

    
  );
}
