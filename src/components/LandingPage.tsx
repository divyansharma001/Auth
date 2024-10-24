"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LandingPage() {
  return (
    <div className="flex justify-center items-center h-[20rem] flex-col px-4 pt-20">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Hello I&apos;m{" "}
        <LinkPreview
          url="https://drive.google.com/file/d/169INVWhYoTZ9NuveS2p_efHMKkDJqTfO/view"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Divyansh Sharma
        </LinkPreview>{" "}
        currently a SDE intern and contributing to open-source.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto ">
        Check out my{" "}
        <LinkPreview url="https://github.com/divyansharma001" className="font-bold">
          Github
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://www.linkedin.com/in/divyansh-sharma-86260b1b1" className="font-bold">
          LinkedIn
        </LinkPreview>{" "}
        and connect with me.
      </p>
      
    </div>
  );
}
