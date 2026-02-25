"use client"
import Image from 'next/image'
import React from 'react'
import GlobalContainer from './GlobalContainer'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import JustifyBetween from './JustifyBetween'
import { ArrowRight, Plus, Star, StepForward } from 'lucide-react'
import AnimatedText from './AnimatedText'
import { Stairs } from '@phosphor-icons/react'
import ThreeColGrid from './ThreeColGrid'

type Props = {}

const Think = (props: Props) => {
  return (
    <GlobalContainer className='flex flex-col gap-40 w-full py-40 relative bg-gradient-to-b'>
        <JustifyBetween className='items-start'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <Star size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">Experience Naijazone</p>
            </div>
            <FlexCol className='items-start'>
                <AnimatedText className='md:pe-20 tracking-tighter' text='The idea for Naijazone was born in the bustling stalls of Balogun Market and the sales hubs of Aba Market.' />
                <div className="flex flex-col gap-10 my-20">
                    <p className="text-darkgray font-semibold text-lg md:pe-92">Our developers focused on "Lightweight Architecture." We knew many users shop on mobile devices with varying data speeds, so we built a platform that is incredibly fast even on 3G connections.</p>
                </div>
            </FlexCol>
        </JustifyBetween>
        <ThreeColGrid>
            <FlexCol gap='gap-30'>
                <p className='text-darkgray font-semibold text-lg'>Sell</p>
                <div className="flex flex-col font-semibold">
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Texttiles & Fashion</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Skincare & Beauty</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Agriculture & Food Processing</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Art and Craftsmanship</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Furniture & Fittings</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Industrial/Building Materials</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Equipment & Chemicals</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Electrical & Electronics</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        ●
                        <p>Energy & Power Systems</p>
                    </div>
                </div>
            </FlexCol>
            <FlexCol gap='gap-30'>
                <p className='text-darkgray font-semibold text-lg'>Buy</p>
                <div className="flex flex-col font-semibold">
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Fashion</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Skincare</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Food & Drinks</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Art & Crafts</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Furniture</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Materials</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Equipment & More</p>
                    </div>
                </div>
            </FlexCol>
            <FlexCol gap='gap-30'>
                <p className='text-darkgray font-semibold text-lg'>Services</p>
                <div className="flex flex-col font-semibold">
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Arts and Entertainment</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Health & Wellness</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Education & Resources</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Printing & Stamps</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Accounting/Management</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Real Estate & Lands</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Hospitality, Events & Catering</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Building & Maintenance</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>Legal & Consulting</p>
                    </div>
                    <div className="flex items-center gap-3 text-semimajorgreen text-lg">
                        <p>More...</p>
                    </div>
                </div>
            </FlexCol>
        </ThreeColGrid>
    </GlobalContainer>
  )
}

export default Think