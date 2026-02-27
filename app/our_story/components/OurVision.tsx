"use client"
import AnimatedText from '@/app/components/AnimatedText'
import FlexCol from '@/app/components/FlexCol'
import GlobalContainer from '@/app/components/GlobalContainer'
import JustifyBetween from '@/app/components/JustifyBetween'
import { ColumnsIcon, Layout, UsersThreeIcon } from '@phosphor-icons/react'
import { Plus, QuoteIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import TeamCard from './TeamCard'
import { ColumnSpacingIcon } from '@radix-ui/react-icons'
import Card from './Card'
import ThreeColGrid from '@/app/components/ThreeColGrid'
type Props = {}

const OurVision = (props: Props) => {
  return (
    <>
        <GlobalContainer>
            <JustifyBetween className='items-start md:flex-row flex-col md:gap-0 gap-5'>
                <div className="flex items-center gap-3 flex-shrink-0 md:w-[33%]">
                    <Layout size={25} className='text-semimajorgreen' />
                    <p className="text-semimajorgreen font-semibold">Our Vision</p>
                </div>
                <FlexCol className='items-start gap-20'>
                    <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen md:pe-28 tracking-[-2px]">
                        "To create a Nigeria where every artisan has a storefront, every producer has a voice, and every consumer can shop with 100% confidence in the quality of 'Made in Nigeria' excellence."
                    </span>
                    <p className="text-darkgray md:pe-80">In 2026, Naijazone stands as the bridge. We aren;t just an e-commerce platform; we are a movement built to empower the Hustlers, Makers, and Movers of Nigeria. But cutting out the middlemen and connecting you directly to the source, we ensure that the "Naira stays in the neighborhood" while you get the best bulk prices available.</p>
                </FlexCol>
            </JustifyBetween>
            <ThreeColGrid gridCols='py-20 md:grid-cols-3'>
                <Card stringCount={'35%+'} content={'We target 90 Trillion Naira in annual transactions. Raising the current basket size to N2800/shopper, driven by bulk-buying and B2B procurement.'} />
                <Card stringCount={'1Million+'} content={'With over 40 million small businesses in Nigeria, we aim to be the primary digital home for the top 2.5% of verified producers.'} />
                <Card stringCount={'10x Faster'} content={'<24 Hours for intra-state deliveries and <72 Hours for inter-state across the federation.'} />
            </ThreeColGrid>
        </GlobalContainer>
        <GlobalContainer className='h-screen relative py-20'>
            <div className="absolute top-0 left-0 z-1 w-full h-full bg-gradient-to-t from-majorgreen/80 to-semimajorgreen/50"></div>
            <Image src={'https://framerusercontent.com/images/8CIMoSXpfqXD4hAfb5tuc7Fk0.jpeg?width=736&height=1349'} width={1000} height={1000} alt='image' className='w-full h-full object-cover absolute left-0 top-0' />
            <JustifyBetween className='items-start relative z-2 md:flex-row flex-col gap-5'>
                <div className="flex items-center gap-3 flex-shrink-0 md:w-[33%]">
                    <QuoteIcon size={25} className='text-majororange' />
                    <p className="text-majororange font-semibold font-bold">QUOTE</p>
                </div>
                <FlexCol className='items-start gap-10'>
                    <div className="w-10 h-10 text-white flex justify-center items-center rounded-full bg-lightgreen">
                        <Plus size={20} />
                    </div>
                    <span className="text-xl md:text-4xl md:pe-28 font-semibold text-white italic tracking-[-2px]">
                        "With over a decade of experience in e-commerce and logistics, We founded Naijazone with a mission to solve the trust deficit in Nigerian online shopping. Our passion is empowering local creators and ensuring that Nigerian excellence is recognized globally."
                    </span>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-white text-xl">Chioma Nsofor</p>
                        <p className="text-darkgray text-lg font-semibold">Managing Director at Naijazone <sup className='text-[8px]'>TM</sup></p>
                    </div>
                </FlexCol>
            </JustifyBetween>
        </GlobalContainer>
    </>
  )
}

export default OurVision