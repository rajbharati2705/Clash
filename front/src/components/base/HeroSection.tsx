import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
        <div>
            <Image src="/banner_image.svg" alt='main image' width={600} height={600}></Image>
        </div>
        <div className='text-center'>
          <h1 className='text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text' >Clash</h1>
        <p className='text-2xl md:text-3xl lg:text-5xl font-bold'>Discover the choice,together</p>
        </div>
        <Link href="/login">
        <Button className='mt-2'>Start free</Button>
        </Link>
        
    </div>
  )
}

export default HeroSection