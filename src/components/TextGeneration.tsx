"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `This was made using Next.js, TailwindCSS and Typescript. Auth was done using NextAuth.js and the UI components were made using Framer Motion and Aceternity UI.

`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
