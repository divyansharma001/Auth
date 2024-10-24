import { auth } from "@/auth";
import { CommandCopyExample } from "@/components/Commands";
import { FlipWordsDemo } from "@/components/FlipWords";
import { HeroHighlightDemo } from "@/components/HeroSectionPhone";
import { LandingPage } from "@/components/LandingPage";
import { LogoutButton } from "@/components/Logout";


import { TypewriterEffectSmoothDemo } from "@/components/Typewriter";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log(session);

  if(!session){
    redirect("/login")
  }

  return (
   <div>
    <div>
    <div className="md:block hidden"><TypewriterEffectSmoothDemo/></div>
    <div className="md:hidden block"><HeroHighlightDemo/></div>
    <CommandCopyExample/>
     <LandingPage/>
     <FlipWordsDemo/>
     <LogoutButton/>
    </div>
    <div>
     
    </div>
    </div>
  );
}
