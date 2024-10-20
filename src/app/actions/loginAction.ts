'use server';
import { signIn } from "@/auth";
import { prisma } from "@/prisma";

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    throw new Error("Please provide both email and password ");
  }

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    throw new Error('User does not exist');
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,  // Disable automatic redirection
    });

    console.log("result", result);

    if (!result.success) {
      throw new Error('Invalid credentials');
    }

    // Instead of redirecting here, return a URL to redirect on the client side
    return {
      success: true,
      redirectUrl: '/',  // Return the URL for client-side redirection
    };
  } catch (error) {
    console.error(error);
    throw new Error('Invalid credentials');
  }
}
