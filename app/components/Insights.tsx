'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import JustifyBetween from './JustifyBetween'
import { ArrowRight, BookOpenIcon, Question, UsersThreeIcon } from '@phosphor-icons/react'
import AnimatedText from './AnimatedText'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import { Plus, Star, StarHalf } from 'lucide-react'

type Props = {}

const Insights = (props: Props) => {
   
  return (
    <GlobalContainer className='bg-superlightgreen flex flex-col gap-20 py-40'>
        <FlexCol gap='gap-10'>
            <JustifyBetween className='items-start'>
                <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                    <BookOpenIcon size={25} className='text-semimajorgreen' />
                    <p className="text-semimajorgreen font-semibold">Insights</p>
                </div>
                <FlexCol className='items-start'>
                    <AnimatedText className='md:pe-20 tracking-tighter' text='We believe in our local markets and products. here is how we maintain the eccosystem:' />
                </FlexCol>
            </JustifyBetween>
            <JustifyBetween className='items-start'>
                <p className="text-darkgray md:w-[30%] flex-shrink-0">We didn't just want a website; we wanted a community</p>
                <FlexCol className='items-start'>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <Image src={'https://framerusercontent.com/images/mWc9Inm54BBqOVLcl2VqF7eWDaI.png?scale-down-to=512&width=1408&height=768'} width={1000} height={1000} alt='image' className='w-full rounded-3xl h-120 object-cover' />
                            <p className="text-lg font-semibold">Why "Made in Nigeria" is the Smartest Choice for your Wallet in 2026</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Image src={'https://framerusercontent.com/images/OIXmQsjcmGTwkLFr7AvPXkZn0.jpeg?scale-down-to=1024&width=736&height=1104'} width={1000} height={1000} alt='image' className='w-full rounded-3xl h-92 object-cover' />
                            <p className="text-lg font-semibold">Home & Office Essentials to Upgrade Your Space This year</p>
                        </div>
                    </div>
                </FlexCol>
            </JustifyBetween>
        </FlexCol>
    </GlobalContainer>
  )
}

export default Insights