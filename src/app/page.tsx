import { auth } from "@/auth";
import { FlipWordsDemo } from "@/components/FlipWords";
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
    <TypewriterEffectSmoothDemo/>
     <LandingPage/>
     <LogoutButton/>
    </div>
    <div>
     
    </div>
    </div>
  );
}
