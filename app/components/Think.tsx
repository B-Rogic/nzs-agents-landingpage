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
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText)

type Props = {}

const Think = (props: Props) => {
    useGSAP(() => {
        const split = new SplitText(".animate-text", { type: "words" });
        gsap.timeline({
            scrollTrigger: {
                trigger: ".animate-text-container",
                start: "top center", 
            }
        }).from(split.words, {
            y: 50,
            opacity: 0, 
            stagger: 0.05,
            duration: 1,
            ease: "power4.inOut"
        })
    })
  return (
    <GlobalContainer className='flex flex-col md:gap-40 w-full md:py-40 py-10 relative bg-gradient-to-b'>
        <JustifyBetween className='items-start md:flex-row flex-col gap-5'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <Star size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">Experience Naijazone</p>
            </div>
            <FlexCol className='items-start'>
                <AnimatedText textClass='md:text-5xl text-2xl font-bold' className='md:pe-20 tracking-tighter' text='The idea for Naijazone was born in the bustling stalls of Balogun Market and the sales hubs of Aba Market.' />
                <div className="flex flex-col gap-10 my-20">
                    <p className="text-darkgray font-semibold md:text-lg md:pe-92 pe-20">Our developers focused on "Lightweight Architecture." We knew many users shop on mobile devices with varying data speeds, so we built a platform that is incredibly fast even on 3G connections.</p>
                </div>
            </FlexCol>
        </JustifyBetween>
        <ThreeColGrid gridCols='md:grid-cols-3 grid-cols-2'>
            <FlexCol gap='md:gap-30 gap-5 animate-text-container'>
                <p className='text-darkgray font-semibold text-lg'>Sell</p>
                <div className="flex flex-col font-semibold">
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Texttiles & Fashion</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Skincare & Beauty</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Agriculture & Food Processing</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Art and Craftsmanship</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Furniture & Fittings</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Industrial/Building Materials</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Equipment & Chemicals</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Electrical & Electronics</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        •
                        <p>Energy & Power Systems</p>
                    </div>
                </div>
            </FlexCol>
            <FlexCol gap='gap-5 md:gap-30' className='md:flex hidden'>
                <p className='text-darkgray font-semibold md:text-lg text-sm'>Buy</p>
                <div className="flex flex-col font-semibold">
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Fashion</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Skincare</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Food & Drinks</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Art & Crafts</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Furniture</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Materials</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Equipment & More</p>
                    </div>
                </div>
            </FlexCol>
            <FlexCol gap='gap-5 md:gap-30'>
                <p className='text-darkgray font-semibold md:text-lg text-sm'>Services</p>
                <div className="flex flex-col font-semibold">
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Arts and Entertainment</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Health & Wellness</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Education & Resources</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Printing & Stamps</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Accounting/Management</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Real Estate & Lands</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Hospitality, Events & Catering</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Building & Maintenance</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>Legal & Consulting</p>
                    </div>
                    <div className="flex items-center gap-3 animate-text text-semimajorgreen md:text-lg text-sm">
                        <p>More...</p>
                    </div>
                </div>
            </FlexCol>
        </ThreeColGrid>
    </GlobalContainer>
  )
}

export default Think