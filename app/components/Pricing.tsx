'use client'
import React from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import JustifyBetween from './JustifyBetween'
import { ArrowRight, Money, UsersThreeIcon } from '@phosphor-icons/react'
import AnimatedText from './AnimatedText'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import { Plus, Star, StarHalf } from 'lucide-react'
import ThreeColGrid from './ThreeColGrid'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <GlobalContainer className='bg-white flex flex-col gap-20 py-40'>
        <JustifyBetween className='items-start'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <Money size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">Pricing</p>
            </div>
            <FlexCol className='items-start gap-20'>
                <FlexCol className='gap-5'>
                    <span className="text-semimajorgreen text-8xl font-bold">Vendor Plans</span>
                    <p className="text-2xl text-darkgray font-semibold">Open your vendor account at a minimum fee </p>
                </FlexCol>
                <p className="text-darkgray pe-106">To accomodate the diversion needs of Nigerian entrepreneurs—from the small-scale artisan to the high-volume wholesaler—Naijazone uses a tiered account structure. This allows you (vendor) to scale your business as your transaction volume grows.</p>
                <JustifyBetween className='w-full text-darkgray'>
                    <Plus size={30} strokeWidth={1} />
                    <Plus size={30} strokeWidth={1} />
                    <Plus size={30} strokeWidth={1} />
                </JustifyBetween>
            </FlexCol>
        </JustifyBetween>
        <ThreeColGrid>
            <div className="p-8 rounded-3xl flex flex-col gap-20 bg-transgray">
                <div className="flex flex-col gap-5">
                    <p className="text-lg text-darkgray">Vendor Plan</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-semibold text-semimajorgreen">Own a small business?</p>
                        <p className="text-3xl font-semibold text-darkgray">We'll set you up</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3 border-b border-lightgray pb-3">
                        <p className="text-darkgray">N <span className='text-4xl font-semibold text-semimajorgreen'>6,500</span> /yr</p>
                        <AnimatedButton text='Verify and begin' border hover='hover:bg-semimajorgreen bg-majorgreen text-white' className='flex justify-center items-center rounded-full' />
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-sm text-darkgray">Basic Search Listing</p>
                        <p className="text-sm text-darkgray">Standard Pickup</p>
                        <p className="text-sm text-darkgray">Upload 20 Items</p>
                        <p className="text-sm text-darkgray">10% Fixed Commission</p>
                    </div>
                </div>
            </div>
            <div className="p-8 rounded-3xl flex flex-col gap-20 bg-transgray">
                <div className="flex flex-col gap-5">
                    <p className="text-lg text-darkgray">Brand Plan</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-semibold text-semimajorgreen">Ready to scale up?</p>
                        <p className="text-3xl font-semibold text-darkgray">Let's make mad sales!</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3 border-b border-lightgray pb-3">
                        <p className="text-darkgray">N <span className='text-4xl font-semibold text-semimajorgreen'>50,000</span> /yr</p>
                        <AnimatedButton text="Let's gooooo" border hover='hover:bg-semimajorgreen bg-majorgreen text-white' className='flex justify-center items-center rounded-full' />
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-sm text-darkgray">Homepage Banner + Ad Credit</p>
                        <p className="text-sm text-darkgray">Dedicated Logistics Express</p>
                        <p className="text-sm text-darkgray">Upload Unlimited Items</p>
                        <p className="text-sm text-darkgray">5% Fixed Commission</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden relative rounded-3xl flex flex-col gap-20 bg-transgray">
                <Image src={'https://framerusercontent.com/images/z8FYkYN0binvywcLZcmrKM6WeQY.png?scale-down-to=1024&width=765&height=1057'} width={1000} height={1000} alt='image' className='w-full h-full' />
                <div className="absolute top-0 left-0 p-5 justify-end bg-black/70 z-1 w-full h-full flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <p className="text-white">Market Movers</p>
                        <p className="text-3xl text-white">Need market dominance? <span className='text-lightgreen'>It's a click away.</span></p>
                    </div>
                    <AnimatedButton border text='Get a tailored plan' className='flex justify-center rounded-full items-center' />
                </div>
            </div>
        </ThreeColGrid>
    </GlobalContainer>
  )
}

export default Pricing