import Image from 'next/image'
import React from 'react'
import image from '@/images/image.jpg'
import LoginCard from '@/components/Card'
import LoginCredentials from '@/components/LoginCredentials'

const page = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='flex justify-center align-middle  pt-32'>
       <Image alt='photo' src={image} width={500} height={500} />
      </div>
      <div className='flex align-middle h-auto pt-32'>
       <LoginCredentials/>
      </div>
    </div>
  )
}

export default page