"use client"
import Image from 'next/image'
import React from 'react'
import GlobalContainer from './GlobalContainer'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import JustifyBetween from './JustifyBetween'
import { ArrowRight, Plus, StepForward } from 'lucide-react'
import AnimatedText from './AnimatedText'
import { Stairs } from '@phosphor-icons/react'

type Props = {}

const Experience = (props: Props) => {
  return (
    <GlobalContainer className='flex justify-between items-center w-full md:py-40 py-20 relative bg-gradient-to-b from-majorgreen to-semimajorgreen'>
        <JustifyBetween className='items-start md:flex-row flex-col gap-5'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <Stairs size={25} className='text-majororange' />
                <p className="text-majororange font-semibold">Experience Naijazone</p>
            </div>
            <FlexCol className='items-start'>
                <AnimatedText textClass='md:text-5xl text-2xl font-bold' changeColor='white' className='md:pe-20 tracking-tighter' text='Experience the vibrant spirit of the Nigerian marketplace, reimagined for the digital age.' />
                <div className="flex flex-col gap-10 md:my-20">
                    <p className="text-majorgray text-lg md:pe-62">We vet our vendors to ensure you get exactly what you se eon your screen. Our logistics network is optimized fo rthe unique terrain of our cities. Your money stays safe until you confirm that your order is perfect. Every purchase supports a local entrepreneur or a growing Nigerian brand.</p>
                    <div className="flex flex-col gap-5 items-start">
                        <AnimatedButton className='text-white cursor-pointer' padding='p-0' hover='bg-transparent' add={<ArrowRight />} border  text='Sell your products now!' textClassname='text-white' />
                        <AnimatedButton className='text-white cursor-pointer' padding='p-0' hover='bg-transparent' add={<ArrowRight />} border  text='Sell your products now!' textClassname='text-white' />
                        <AnimatedButton className='text-white cursor-pointer' padding='p-0' hover='bg-transparent' add={<ArrowRight />} border  text='Sell your products now!' textClassname='text-white' />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex justify-between items-center text-darkgray">
                        <Plus strokeWidth={1} size={30} />
                        <Plus strokeWidth={1} size={30} />
                        <Plus strokeWidth={1} size={30} />
                    </div>
                    <div className="grid grid-cols-5 items-center gap-3">
                        <Image src={'https://framerusercontent.com/images/qYhOpgEkSVjvhkIZhBBQw7B894.png?scale-down-to=512&width=638&height=358'} width={1000} height={1000} alt='image' />
                        <Image src={'https://framerusercontent.com/images/UGIo8sZTkMwOU3aFVGeeeqKrU.png?scale-down-to=512&width=636&height=204'} width={1000} height={1000} alt='image' />
                        <Image src={'https://framerusercontent.com/images/1QtUmVYQPVOJL89BRBtanEHRC4.png?scale-down-to=512&width=778&height=239'} width={1000} height={1000} alt='image' />
                        <Image src={'https://framerusercontent.com/images/S3Vw5lqLn9M5SxKsj4HRi9aanmY.png?scale-down-to=512&width=522&height=377'} width={1000} height={1000} alt='image' />
                        <Image src={'https://framerusercontent.com/images/2OVlNUFKFZtDinX1P7Nwr51Rjew.png?width=399&height=405'} width={1000} height={1000} alt='image' />
                    </div>
                </div>
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default Experience