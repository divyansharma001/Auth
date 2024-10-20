import React from 'react'
import { redirect } from 'next/navigation';
import LoginCredentials from '@/components/LoginCredentials'
import { auth } from '@/auth';


const page = async() => {

  const session = await auth();

  if(session?.user){
    redirect('/')
  }

  return (
    
      <div>
       <LoginCredentials/>
      </div>

  )
}

export default page