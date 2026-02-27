import AnimatedButton from '@/app/components/AnimatedButton'
import GlobalContainer from '@/app/components/GlobalContainer'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
        <GlobalContainer className='flex flex-col md:w-[65%] ms-auto md:gap-20 gap-10 pb-40 md:pt-80 pt-40 items-start'>
            <div className="flex justify-between items-center w-full">
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-6xl md:text-8xl font-bold text-semimajorgreen -tracking-[6px]">Our Story</h1>
                <p className="font-semibold text-2xl text-darkgray">From Local Hustle to National Excellence</p>
            </div>
            <p className="text-darkgray text-lg">Welcome to Naijazone Online Shopping Mall⎯the heartbeat of Nigeria's digital economy, In a world of "What I ordered vs. What i got," we are set to change the narrative.</p>
            <AnimatedButton text='Discover more' className='rounded-full' hover='bg-majorgreen hover:bg-semimajorgreen' textClassname='text-white' />
        </GlobalContainer>
        <Image width={1000} height={1000} alt='image' src={'https://framerusercontent.com/images/Jgungp0O82DYcuxrXnrIyg9GXA.png?width=1487&height=1125'} className='w-full' />
    </>
  )
}

export default Hero