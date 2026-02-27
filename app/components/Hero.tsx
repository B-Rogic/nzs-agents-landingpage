import Image from 'next/image'
import React, { useEffect } from 'react'
import homeHeroBackground from '@/app/src/images/homeHeroBackground.png'
import GlobalContainer from './GlobalContainer'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import homeOfficeFurniture from '@/app/src/images/homeOfficeFurniture.png'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(SplitText)

type Props = {}

const Hero = (props: Props) => {
    useGSAP(() => {
        gsap.fromTo(".onload", {
            scale: 1.5,
            y: 10
        }, {
            scale: 1,
            y: 0,
            duration: 1.5
        })
    })
    useEffect(() => {
        const tl = gsap.timeline()
        const split = new SplitText(".split-word", { type: "words" })
        tl.to(".translate-h1", {
            y: 0, 
            delay: 0.5,
            duration: 1,
            ease: "power4.out",
        }).from(split.words, {
            y: 100, 
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power4.out",
        }, "-=0.5").from(".animate-image", {
            scale: 1.2, 
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        })
    }, [])
    useGSAP(() => {
        const split = new SplitText(".split-word", { type: "words" })
        gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        }).to(".animate-image", {
            scale: 1.2, 
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        }).to(".onload", {
            scale: 2,
            y: 10,
            duration: 1.5
        }, "<").to(split.words, {
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power4.out",
        }, "<")
    })
  return (
    <GlobalContainer className='flex justify-between items-end w-full h-screen relative scroll overflow-hidden py-20'>
        <div className="w-full h-full bg-black/20 z-1 absolute left-0 top-0"></div>
        <Image src={homeHeroBackground} width={1000} height={1000} alt='home background image' className='w-full absolute top-0 left-0 h-full object-cover onload' />
        <FlexCol className='relative z-1 items-start'>
            <div className="flex flex-col font-semibold">
                <p className="text-white split-word md:text-[22px] ">Verified local quality.</p>
                <p className="text-white split-word md:text-[22px] ">Swift "Vendor-Buyer" Deiver</p>
                <p className="text-lightgreen split-word md:text-[22px]  leading-6">Secure Escrow Payments. <br /> Community-Driven</p>
            </div>
            <AnimatedButton border text={'Shop Now!'} className='rounded-full px-5' />
        </FlexCol>
        <FlexCol className='w-80 relative z-1 md:flex hidden'>
            <div className='animate-h1' style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                }}>
                <h1 className='text-4xl font-bold text-white translate-y-100 translate-h1'>The Heart of Nigerian Markets</h1>
            </div>
            <div className="w-full h-65 flex flex-col justify-end p-3 rounded-2xl overflow-hidden relative gap-2 animate-image">
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