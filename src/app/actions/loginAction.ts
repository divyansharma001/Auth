'use server';
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma";

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    throw new Error('All fields are required');
  }

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if(!user){
    throw new Error('User does not exists');
  }
    
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    
   
    redirect('/');
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Invalid credentials");
       
        default:
          throw new Error("Something went wrong");
        
      }
    }
    throw error;
  }
}