'use server';
import { prisma } from "@/prisma";
import { hash } from 'bcryptjs';
import { redirect } from "next/navigation";

export async function signupAction(formData: FormData) {
  const firstname = formData.get('firstname') as string;
  const lastname = formData.get('lastname') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!firstname || !lastname || !email || !password) {
   
    throw new Error('All fields are required');
  }

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (user) {
   
    throw new Error('User already exists');
  }

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      firstName: firstname,
      lastName: lastname,
      email,
      password: hashedPassword
    }
  });

  redirect('/login');


}
