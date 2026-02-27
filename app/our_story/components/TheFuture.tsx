import FlexCol from '@/app/components/FlexCol'
import GlobalContainer from '@/app/components/GlobalContainer'
import JustifyBetween from '@/app/components/JustifyBetween'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const TheFuture = (props: Props) => {
  return (
    <>
        <GlobalContainer className='py-20'>
            <JustifyBetween className='items-start relative z-2 md:flex-row flex-col gap-5'>
                <div className="flex items-center gap-3 flex-shrink-0 md:w-[33%]">
                    <MessageCircle size={25} className='text-semimajorgreen' />
                    <p className="text-semimajorgreen font-semibold font-bold">The Future</p>
                </div>
                <FlexCol className='items-start gap-10'>
                    <span className="text-2xl md:text-5xl md:pe-28 font-semibold text-semimajorgreen italic tracking-[-2px]">
                        We envision a future where Nigerian-made products aren't just the "patriotic choice," but the logical choice for quality, durability, and value.
                    </span>
                    <div className="flex md:flex-row flex-col items-end justify-between">
                        <p className="text-darkgray md:pe-28 md:text-lg font-semibold">What makes us truly different? We don't just take a vendor's word for it. We pioneered the Decentralized Agent Engagement & Verification Network. Our team of thousands of verified agents across Nigeria physically visits workshops, farms, and factories. They verify the quality of the materials, the authenticity of the business, and the reliability of the producer before a single product is listed on our platform.  When you see a "Verified" badge on Naijazone, it means a real person has stood in that workshop and seen the excellence for themselves.</p>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl text-white bg-majorgray cursor-pointer flex justify-center items-center">
                                <ChevronLeft strokeWidth={1} size={25} />
                            </div>
                            <div className="w-10 h-10 rounded-xl text-white bg-majorgray cursor-pointer flex justify-center items-center">
                                <ChevronRight strokeWidth={1} size={25} />
                            </div>
                        </div>
                    </div>
                </FlexCol>
            </JustifyBetween>
        </GlobalContainer>
        <div className="flex gap-1 overflow-hidden justify-center">
            <div className="flex gap-1 flex-shrink-0">
                <Image src={'https://framerusercontent.com/images/0MXQHz9pmxd1yPpeA8rBBSL4Fi4.jpeg?width=736&height=920'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
                <Image src={'https://framerusercontent.com/images/ZHomvc9cni1AWNl6aJTIpsKJeIU.png?scale-down-to=2048&width=4608&height=2592'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
                <Image src={'https://framerusercontent.com/images/9ufvVHCrybhH6rpMLs50MKSg44.jpg?scale-down-to=2048&width=4022&height=3218'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
            </div>
            <div className="flex gap-1 flex-shrink-0">
                <Image src={'https://framerusercontent.com/images/0MXQHz9pmxd1yPpeA8rBBSL4Fi4.jpeg?width=736&height=920'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
                <Image src={'https://framerusercontent.com/images/ZHomvc9cni1AWNl6aJTIpsKJeIU.png?scale-down-to=2048&width=4608&height=2592'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
                <Image src={'https://framerusercontent.com/images/9ufvVHCrybhH6rpMLs50MKSg44.jpg?scale-down-to=2048&width=4022&height=3218'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
            </div>
            <div className="flex gap-1 flex-shrink-0">
                <Image src={'https://framerusercontent.com/images/0MXQHz9pmxd1yPpeA8rBBSL4Fi4.jpeg?width=736&height=920'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
                <Image src={'https://framerusercontent.com/images/ZHomvc9cni1AWNl6aJTIpsKJeIU.png?scale-down-to=2048&width=4608&height=2592'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
                <Image src={'https://framerusercontent.com/images/9ufvVHCrybhH6rpMLs50MKSg44.jpg?scale-down-to=2048&width=4022&height=3218'} width={1000} height={1000} alt='image' className='w-full h-70 md:h-140 rounded-4xl object-cover' />
            </div>
        </div>
    </>
  )
}

export default TheFuture