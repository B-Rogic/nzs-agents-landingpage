'use client'
import React from 'react'
import GlobalContainer from './GlobalContainer'
import JustifyBetween from './JustifyBetween'
import { ArrowRight, UsersThreeIcon } from '@phosphor-icons/react'
import AnimatedText from './AnimatedText'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'

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
                <AnimatedText className='pe-20' text='Naijazone is a high-energy digital ecosystem designed to bring the hustle, the quality, and the soul of Nigerian trade to your doorstep. Searching for the latest local tech, bespoke Nigerian fabrics, or everyday essentials, we bridge the gap between local excellence and your convenience.' />
                <AnimatedButton className='my-20' hover='bg-transparent' add={<ArrowRight />} border  text='More About Us' textClassname='text-majororange' />
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default HomeAbout