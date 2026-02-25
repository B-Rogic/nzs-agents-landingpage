'use client'
import React from 'react'
import GlobalContainer from './GlobalContainer'
import { Lightning, Money, UsersThreeIcon } from '@phosphor-icons/react'
import JustifyBetween from './JustifyBetween'
import AnimatedText from './AnimatedText'
import FlexCol from './FlexCol'
import ThreeColGrid from './ThreeColGrid'
import image from '@/app/src/images/image.png'
import Image from 'next/image'
import { Laptop } from 'lucide-react'

type Props = {}

const WhyNaijazone = (props: Props) => {
  return (
    <GlobalContainer>
        <JustifyBetween className='items-start'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <UsersThreeIcon size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">Why Naijazone?</p>
            </div>
            <FlexCol className='items-start'>
                <AnimatedText className='md:pe-20 tracking-tighter' text='We saw a disconnect: incredible craftsmanship, service and entrepreneurial drive were often limited by physical location or lack of trust in online transactions.' />
                <p className="tracking-tighter text-darkgray text-lg md:w-100 my-20">We wanted to build a "Mall without Borders" —a place where leatherworker in Aba could seamlessly sell to a professional in Abuja without friction or fear.</p>
            </FlexCol>
        </JustifyBetween>
        <ThreeColGrid>
            <div className="p-5 rounded-3xl bg-white flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-1 items-center">
                        <Money className='text-majororange' size={20} />
                        <p className="sm text-semimajorgreen text-sm font-bold">Smart Pricing</p>
                    </div>
                    <p className="text-2xl text-darkgray font-semibold tracking-tighter md:pe-5">Our Smart Pricing engine compares local market trends to ensure you're getting the best value on every item, from groceries to gadgets, without compromising on quality.</p>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <p className="font-semibold text-darkgray">Starting from</p>
                        <p className="text-4xl font-semibold text-semimajorgreen">N0.00</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="w-full rounded-full h-2 bg-lightgray">
                        <div className="h-full w-80 bg-majororange rounded-full flex justify-end items-center">
                            <div className="w-3 h-5 border-white bg-majororange rounded-full border-3"></div>
                        </div>
                        </div>
                        <div className='w-full h-[1px] bg-lightgray' />
                        <div className="flex justify-between">
                        <p className="font-semibold text-majorgray">Start Small</p>
                        <p className="font-semibold text-majorgray">Expand as you go</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 rounded-3xl bg-lightgreen flex flex-col justify-between h-130 overflow-hidden">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-1 items-center">
                        <Laptop className='text-majororange' size={20} />
                        <p className="sm text-semimajorgreen text-sm font-bold">Priority support</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-2xl text-white font-semibold tracking-tighter">Whether it's delivery query or a vendor dispute, our dedicated support team is available 24/7 to resolve your issues in real-time.</p>
                        <span className="text-center text-3xl font-bold text-white">Support</span>
                    </div>
                    <div className="w-full relative flex justify-center">
                        <div className="w-95 flex flex-col gap-2 rounded-xl bg-semimajorgreen p-3 absolute top-15 z-3">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 bg-majororange rounded"></div>
                                    <p className="text-white text-[12px] font-semibold">BUYER</p>
                                </div>
                                <p className="text-[10px] text-white font-semibold">1m ago</p>
                            </div>
                            <p className="text-[10px] text-white font-semibold">[...]Requested +24 units of ORDER 089GO</p>
                        </div>
                        <div className="w-90 h-10 flex flex-col gap-2 rounded-xl bg-cardgreen p-3 absolute top-23 z-2" />
                        <div className="w-85 h-10 flex flex-col gap-2 rounded-xl bg-cardlightgreen p-3 absolute top-25 z-1" />
                        <Image src={'https://framerusercontent.com/images/VVk3DTLnb0BfhXcrU889AhfO6w4.png?width=274&height=555'} width={1000} height={1000} alt='image' className='-translate-y-8' />
                    </div>
                </div>
            </div>
            <div className="p-5 rounded-3xl relative overflow-hidden bg-white flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-1 items-center">
                        <Lightning className='text-majororange' size={20}  />
                        <p className="sm text-semimajorgreen text-sm font-bold">Quick sales & service</p>
                    </div>
                    <p className="text-2xl text-darkgray font-semibold tracking-tighter md:pe-5">We’ve optimized our 'Quick-Sell' dashboard to get vendor products live in minutes.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-lg text-lightgray font-semibold">Time to complete</p>
                    <p className="text-5xl font-semibold text-lightgray">
                        <span className="text-semimajorgreen">24 </span>
                         - 36h
                    </p>
                </div>
                <Image src={'https://framerusercontent.com/images/ILQcG4XmvVYI803eooW4UNCPUY.png?width=686&height=747'} width={1000} height={1000} alt='clock' className='absolute -right-62 -bottom-40' />
            </div>
        </ThreeColGrid>
    </GlobalContainer>
  )
}

export default WhyNaijazone