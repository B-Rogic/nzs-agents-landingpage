"use client"
import AnimatedText from '@/app/components/AnimatedText'
import FlexCol from '@/app/components/FlexCol'
import GlobalContainer from '@/app/components/GlobalContainer'
import JustifyBetween from '@/app/components/JustifyBetween'
import { UsersThreeIcon } from '@phosphor-icons/react'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import TeamCard from './TeamCard'
type Props = {}

const WhoWeAre = (props: Props) => {
  return (
    <GlobalContainer className='py-20'>
        <JustifyBetween className='items-start md:flex-row flex-col gap-5'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[33%]">
                <UsersThreeIcon size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">What is Naijazone</p>
            </div>
            <FlexCol className='items-start md:gap-20'>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen">
                    "To create a Nigeria where every artisan has a storefront, every producer has a voice, and every consumer can shop with 100% confidence in the quality of 'Made in Nigeria' excellence."
                </span>
                <p className="text-darkgray md:pe-80">We envision a future where Nigerian-made products aren't just the "patriotic choice," but the logical choice for quality, durability, and value. Our goal is to digitize the traditional Nigerian market spirit—the haggling, the community, the trust—and make it accessible to all 36 states and beyond.</p>
            </FlexCol>
        </JustifyBetween>
        <JustifyBetween className='py-10 md:py-40 md:flex-row flex-col'>
            <div className="flex md:flex-col flex-shrink-0 md:w-[33%]  justify-between md:pb-0 pb-10">
                <Plus className='text-darkgray' size={25} strokeWidth={1}  />
                <Plus className='text-darkgray' size={25} strokeWidth={1}  />
                <Plus className='text-darkgray' size={25} strokeWidth={1}  />
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                <TeamCard name='Chioma Nsofor' position='Managing Director' />
                <TeamCard name='Emmanuel Lucky' position='Chief Technical Officer' src={'https://framerusercontent.com/images/bOIZXmiygUTcwJJBQLioR2waj4w.png?scale-down-to=1024&width=1583&height=2163'} />
                <TeamCard name='Adebayo Alpha' position='Chief Branding Officer' src={'https://framerusercontent.com/images/TLfkF5D2LlsZfyivdYreaV7iy7A.png?scale-down-to=1024&width=1583&height=2163'} />
                <TeamCard name='Agbalusi Sharon' position='Chief Admin Officer' src={'https://framerusercontent.com/images/VsdqroYgWbCT1N3WsoW9Zr2ZPGU.png?scale-down-to=1024&width=1583&height=2163'} />
            </div>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default WhoWeAre