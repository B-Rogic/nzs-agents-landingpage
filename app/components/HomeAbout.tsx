'use client'
import React from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import JustifyBetween from './JustifyBetween'
import { ArrowRight, UsersThreeIcon } from '@phosphor-icons/react'
import AnimatedText from './AnimatedText'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import { Plus, Star, StarHalf } from 'lucide-react'

type Props = {}

const HomeAbout = (props: Props) => {
  return (
    <GlobalContainer className='bg-superlightgreen flex flex-col gap-20'>
        <JustifyBetween className='items-start'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <UsersThreeIcon size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">What is Naijazone</p>
            </div>
            <FlexCol className='items-start'>
                <AnimatedText className='md:pe-20 tracking-tighter' text='Naijazone is a high-energy digital ecosystem designed to bring the hustle, the quality, and the soul of Nigerian trade to your doorstep. Searching for the latest local tech, bespoke Nigerian fabrics, or everyday essentials, we bridge the gap between local excellence and your convenience.' />
                <AnimatedButton className='my-20' hover='bg-transparent' add={<ArrowRight />} border  text='More About Us' textClassname='text-majororange' />
                <div className="flex gap-3">
                    <div className="rounded-3xl bg-lightgreen p-5 flex flex-col gap-5 justify-between">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-1">
                                <Star fill="white" color="transparent" />
                                <Star fill="white" color="transparent" />
                                <Star fill="white" color="transparent" />
                                <Star fill="white" color="transparent" />
                                <StarHalf fill="white" color="transparent" />
                            </div>
                            <p className="text-xl text-semimajorgreen font-semibold italic tracking-tighter">
                                "We spent over 2 years on teh ground, interviewing over 500 market traders to understand their pain points — mainly logistics and payment trust."
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Image src={'https://framerusercontent.com/images/O8BmpKFnkzQvP1F4j8i1tVGODY.jpeg?scale-down-to=1024&width=1920&height=2560'} width={1000} height={1000} alt='image' className='w-20 h-20 rounded-xl object-cover' />
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-majorgreen text-lg">Chioma Millian Nsofor</p>
                                <p className="text-sm text-white font-semibold">Managing Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col p-5 rounded-3xl md:w-[479px] md:h-[420px] flex-shrink-0 bg-white">
                        <div className="flex justify-between">
                            <Plus size={30} strokeWidth={1} className="text-majorgray" />
                            <Image src={'https://framerusercontent.com/images/fPaJwt1QddTe1oMk68Dx3SN7B0.jpeg?width=690&height=964'} className='w-60 h-60 rounded-2xl object-cover' width={1000} height={1000} alt='image' />
                        </div>
                        <div className="flex justify-between md:gap-20 items-end">
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-semimajorgreen text-xl">Home & Office Furniture x Zone</p>
                                <p className="font-semibold text-majorgray">
                                    Handcrafted furniture that blends local artistry with modern ergonomic standards.
                                </p>
                            </div>
                            <ArrowRight strokeWidth={1} size={30} className='-rotate-45 flex-shrink-0 text-majororange' />
                        </div>
                    </div>
                </div>
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default HomeAbout