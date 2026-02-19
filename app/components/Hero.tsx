import Image from 'next/image'
import React from 'react'
import homeHeroBackground from '@/app/src/images/homeHeroBackground.png'
import GlobalContainer from './GlobalContainer'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import homeOfficeFurniture from '@/app/src/images/homeOfficeFurniture.png'

type Props = {}

const Hero = (props: Props) => {
  return (
    <GlobalContainer className='flex justify-between items-end w-full h-screen relative'>
        <div className="w-full h-full bg-black/20 z-1 absolute left-0 top-0"></div>
        <Image src={homeHeroBackground} width={1000} height={1000} alt='home background image' className='w-full absolute top-0 left-0 h-full object-cover' />
        <FlexCol className='relative z-1 items-start'>
            <div className="flex flex-col font-semibold">
                <p className="text-white text-[22px]">Verified local quality.</p>
                <p className="text-white text-[22px]">Swift "Vendor-Buyer" Deiver</p>
                <p className="text-lightgreen text-[22px] leading-6">Secure Escrow Payments. <br /> Community-Driven</p>
            </div>
            <AnimatedButton border text={'Shop Now!'} className='rounded-full px-5' />
        </FlexCol>
        <FlexCol className='w-80 relative z-1'>
            <h1 className='text-4xl font-bold text-white'>The Heart of Nigerian Markets</h1>
            <div className="w-full h-65 flex flex-col justify-end p-3 rounded-2xl overflow-hidden relative gap-2">
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/50 to-black/30 z-1"></div>
                <Image src={homeOfficeFurniture} width={1000} height={1000} alt='home / office furniture' className='w-full h-full object-cover absolute left-0 top-0' />
                <p className="font-bold text-xl text-white relative z-1">Home & Office Furniture</p>
                <p className="font-bold text-white/70 relative z-1">Handcrafted furniture that blends local artistry with modern ergonomic standards.</p>
            </div>
        </FlexCol>
    </GlobalContainer>
  )
}

export default Hero