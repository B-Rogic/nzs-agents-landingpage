import React from 'react'
import JustifyBetween from './JustifyBetween'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import AnimatedButton from './AnimatedButton'

type Props = {}

const Watch = (props: Props) => {
  return (
    <GlobalContainer className='flex flex-col gap-40 w-full md:p-30 bg-black justify-center items-center relative'>
        <div className='absolute w-full h-full bg-black/80 z-1 flex flex-col gap-3 items-center justify-center'>
            <AnimatedButton text='Watch showreel' border className='rounded-full' />
            <p className="text-semimajorgreen">Support for every local producer</p>
        </div>
        <div className="w-full h-full rounded-3xl overflow-hidden">
            <Image src={'https://framerusercontent.com/images/2QwXSHgmouhAG707Aj6Ue0D7ZBg.png?width=742&height=439'} width={1000} height={1000} alt='image' className='w-full h-full absolute top-0 left-0 saturate-0 opacity-30' />
            <Image src={'https://framerusercontent.com/images/MruIUVC5ASGMDlq02YCz149Aw.png?scale-down-to=2048&width=2858&height=1590'} width={1000} height={1000} alt='image' className='md:w-full h-110 object-cover relative hover:scale-110' style={{
                transition: "scale 1s cubic-bezier(1, 0, 0.3, 1.5"
            }} />
        </div>
    </GlobalContainer>
  )
}

export default Watch