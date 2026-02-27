import AnimatedButton from '@/app/components/AnimatedButton'
import GlobalContainer from '@/app/components/GlobalContainer'
import ProductCard from '@/app/components/ProductCard'
import ThreeColGrid from '@/app/components/ThreeColGrid'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
        <GlobalContainer className='flex flex-col gap-5 pt-80 items-start'>
            <div className="flex justify-between items-center w-full md:w-[55%]">
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-6xl md:text-[10rem] font-semibold text-semimajorgreen -tracking-[5px] md:-tracking-[12px]">Spotlight</h1>
            </div>
            <div className="flex justify-center">
                <p className="text-darkgray md:text-lg indent-8 md:px-80">To keep your feed fresh and engaging in 2026, here are some articles that target the modern Nigerian's lifestyle and financial savvy. These pieces focus on community-led shopping and the global appeal of Nigerian craftsmanship.</p>
            </div>
        </GlobalContainer>
        <GlobalContainer className='py-20'>
            <ThreeColGrid gap='1' gridCols='md:grid-cols-2'>
                <ProductCard 
                    card2
                    src={'https://framerusercontent.com/images/mWc9Inm54BBqOVLcl2VqF7eWDaI.png?scale-down-to=1024&width=1408&height=768'} 
                    title="Jul 27, 2025"
                    description='Why "Made in Nigeria" is the Smartest Choice for Your Wallet in 2026'
                    styleHeight=''
                />
                <ProductCard 
                    card2
                    src={'https://framerusercontent.com/images/OIXmQsjcmGTwkLFr7AvPXkZn0.jpeg?scale-down-to=1024&width=736&height=1104'} 
                    title="Jul 24, 2025"
                    description='Home & Office Essentials to Upgrade Your Space This Year'
                    styleHeight=''
                />
                <ProductCard 
                    card2
                    src={'https://framerusercontent.com/images/j84N1kQy1cp0dunCW8Hfo9qwFEQ.png?scale-down-to=1024&width=1015&height=1148'} 
                    title="Jul 26, 2025"
                    description='How to Build Trust Through Digital Design'
                />
                <ProductCard 
                    card2
                    src={'https://framerusercontent.com/images/ncpYWqnXEKWohLVaxHsXden78Xc.jpeg?width=736&height=736'} 
                    title="Jul 28, 2025"
                    description='Safe Shopping 101: How to avoid Scams and Buy with Confidence'
                />
                <ProductCard 
                    card2
                    src={'https://framerusercontent.com/images/lQEsZAIXxnaPIorwSdA1BuMhnY.jpeg?scale-down-to=1024&width=736&height=1111'} 
                    title="Jul 25, 2025"
                    description='The 2026 Fashion Trend: Tradition meets Tech'
                />
                <ProductCard 
                    card2
                    src={'https://framerusercontent.com/images/dVJeeu3FnoOaGCJO4fhW4rCnmT4.jpeg?scale-down-to=1024&width=736&height=1105'} 
                    title="Jul 23, 2025"
                    description='The "Group Buy" Strategy: How Smart Families are Beating Inflation in 2026'
                />
            </ThreeColGrid>
        </GlobalContainer>
    </>
  )
}

export default Hero