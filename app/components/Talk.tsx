'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import JustifyBetween from './JustifyBetween'
import { ArrowLeft, ArrowRight, UsersThreeIcon } from '@phosphor-icons/react'
import AnimatedText from './AnimatedText'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import { Plus, Star, StarHalf } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ThreeColGrid from './ThreeColGrid'

type Props = {}

const Talk = (props: Props) => {
    const [isRight, setIsRight] = useState<string>("right");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const carouselRef = useRef<(HTMLDivElement | null)[]>([]);

    const carouselArray = [
        {
            name: "Ogenna Adams",
            title: "Verified Buyer, ENUGU",
            description: `"I ordered a custom-sized top for my syster's wedding. The quality was great tand the vendor was incredible, they gave me an amazing deal and kept me updated until the package arrived."`, 
            image: "https://framerusercontent.com/images/OwJZAnJqpI70jCAd2cDwnTZbeo.jpeg?width=736&height=920",
        },
        {
            name: "aMAKA vIVIAN",
            title: "Verified Buyer, PH",
            description: `"Finally, a place to get authentic raw Shea butter blends without the tress. I had a small issue with my delivery address at 10 PM, and the team fixed it in minutes. My skin is glowing!"`, 
            image: "https://framerusercontent.com/images/SQWAeFfcVxhoslH7SGTlJSzAcA.jpeg?scale-down-to=1024&width=735&height=1254",
        },
        {
            name: "Ibrahim S.",
            title: "Verified Buyer, PH",
            description: `"I was nervous about ordering an Agbada for my dad's 70th from Lagos while I'm in Kaduna, but the Smart Pricing was fair and the quality was top-notch."`, 
            image: "https://framerusercontent.com/images/Y6JPGBHR2bYor24Ye09kLyQIXU.jpeg?width=736&height=878",
        },
        {
            name: "Femi Osarhemhen",
            title: "Verified Buyer, ABUJA",
            description: `"Ordered a solid teak dining set for my new apartment. I was shocked at the Quick Service—it arrived in 4 days, perfectly crated. YOu can tell these pieces are built by master craftsmen who know their wood."`, 
            image: "https://framerusercontent.com/images/pYK1vzPh2k9R1VBtbmvBiNXpY8.jpeg?scale-down-to=1024&width=736&height=1308",
        },
    ]

    // useEffect(() => {
    //     carouselArray.forEach((_, index) => {
    //         const element = carouselRef.current[index]
    //         if(!element) return 
    //         const tl = gsap.timeline();
    //         if(index === currentIndex) {
    //             tl.to(element, {
    //                 clipPath: "polygon(50% 0%, 50.02% 55.01%, 100% 38.77%, 50.07% 55.14%, 80.9% 97.55%, 50% 55.05%, 19.1% 97.55%, 49.69% 55.01%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             }).to(element, {
    //                 clipPath: "polygon(50% 0%, 50.02% 55.01%, 100% 38.77%, 50.07% 55.14%, 80.9% 97.55%, 50% 55.05%, 50% 100%, 0% 100%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             }).to(element, {
    //                 clipPath: "polygon(50% 0%, 50.02% 55.01%, 100% 38.77%, 50.07% 55.14%, 100% 100%, 67.75% 100%, 50% 100%, 0% 100%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             }).to(element, {
    //                 clipPath: "polygon(50% 0%, 50.02% 55.01%, 100% 38.77%, 100% 64.39%, 100% 100%, 67.75% 100%, 50% 100%, 0% 100%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             }).to(element, {
    //                 clipPath: "polygon(50% 0%, 100% 0%, 100% 38.77%, 100% 64.39%, 100% 100%, 67.75% 100%, 50% 100%, 0% 100%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             })
    //         } else {
    //             const tl = gsap.timeline()
    //             tl.to(element, {
    //                 clipPath: "polygon(50% 0%, 50.02% 55.01%, 100% 38.77%, 100% 64.39%, 100% 100%, 67.75% 100%, 50% 100%, 0% 100%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             }).to(element, {
    //                 clipPath: "polygon(50% 0%, 50.02% 55.01%, 100% 38.77%, 50.07% 55.14%, 100% 100%, 67.75% 100%, 50% 100%, 0% 100%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             }).to(element, {
    //                 clipPath: "(50% 0%, 50.02% 55.01%, 100% 38.77%, 50.07% 55.14%, 80.9% 97.55%, 50% 55.05%, 50% 100%, 0% 100%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             }).to(element, {
    //                 clipPath: "polygon(50% 0%, 50.02% 55.01%, 100% 38.77%, 50.07% 55.14%, 80.9% 97.55%, 50% 55.05%, 19.1% 97.55%, 49.69% 55.01%, 0% 38.77%, 0% 0%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             }).to(element, {
    //                 clipPath: "polygon(50% 2.45%, 50.02% 55.01%, 100% 38.77%, 50.07% 55.14%, 80.9% 97.55%, 50% 55.05%, 19.1% 97.55%, 49.69% 55.01%, 0% 38.77%, 50.07% 55%)", 
    //                 duration: 1, 
    //                 ease: "power4.inOut"
    //             })
    //         }
    //     })
    // })
  return (
    <>
        <GlobalContainer className='bg-superlightgreen flex flex-col md:gap-40 gap-5 md:py-40 py-10'>
            <JustifyBetween className='items-start md:flex-row flex-col gap-5'>
                <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                    <UsersThreeIcon size={25} className='text-semimajorgreen' />
                    <p className="text-semimajorgreen font-semibold">Talk Naijazone</p>
                </div>
                <AnimatedText textClass='md:text-5xl text-2xl font-bold' className='md:pe-30 tracking-tighter' text='No more waiting weeks. Experience lightning-fast checkout and logistics optimized for the Nigerian terrain.' />
            </JustifyBetween>
            <div className="flex md:flex-row flex-col md:gap-20 gap-5">
                <div className="md:p-10 p-5 bg-white rounded-3xl flex flex-col justify-between flex-shrink-0">
                    <div className="flex flex-col gap-5 items-center">
                        <div className="flex items-center justify-between w-full">
                            <Plus size={30} strokeWidth={1} className="text-darkgray" />
                            <p className="text-5xl font-bold text-majororange">4.78/5</p>
                            <Plus size={30} strokeWidth={1} className="text-darkgray" />
                        </div>
                        <p className="text-center text-darkgray">Average rating from our vendors and buyers</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <Plus size={30} strokeWidth={1} className="text-darkgray" />
                        <div className="flex flex-col gap">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-[1px] border-[0.01px] border-majororange -me-5">
                                    <Image src={'https://framerusercontent.com/images/dKuNPjoJj9BDTfYm7yBqYXMU90.png?width=234&height=293'} width={1000} height={1000} alt='image' className='w-full h-full rounded-full object-cover' />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-[1px] border-[0.01px] border-majororange -me-5">
                                    <Image src={'https://framerusercontent.com/images/gNfHAL59bopAb0pd0sVkE4CklZ0.png?width=234&height=376'} width={1000} height={1000} alt='image' className='w-full h-full rounded-full object-cover' />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-[1px] border-[0.01px] border-majororange -me-5">
                                    <Image src={'https://framerusercontent.com/images/G7ssdwPKGnHFOohOkjPM0twIul4.png?width=235&height=294'} width={1000} height={1000} alt='image' className='w-full h-full rounded-full object-cover' />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-[1px] border-[0.01px] border-majororange -me-5">
                                    <Image src={'https://framerusercontent.com/images/O2WKM3xjyEINTghU2avvUDydBTQ.png?width=151&height=227'} width={1000} height={1000} alt='image' className='w-full h-full rounded-full object-cover' />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-[1px] border-[0.01px] border-majororange -me-5">
                                    <Image src={'https://framerusercontent.com/images/RLtdP3xSyu6jJnd8lLEpLx6fQc0.png?width=235&height=235'} width={1000} height={1000} alt='image' className='w-full h-full rounded-full object-cover' />
                                </div>
                            </div>
                            <p className="text-sm text-darkgray">Trusted by 300+ vendors</p>
                        </div>
                        <Plus size={30} strokeWidth={1} className="text-darkgray" />
                    </div>
                    <AnimatedButton text="Leave a review" hover="hover:bg-semimajorgreen bg-majorgreen text-white text-center flex justify-center items-center rounded-full" />
                </div>
                <div className="flex flex-col gap-10 justify-between h-120 relative w-full">
                    <div className="flex flex-col gap-15">
                        <p className="text-lg text-darkgray">01 / 04</p>
                        {carouselArray.map((carousel, index) => (
                            <div key={index} ref={(el) => {carouselRef.current[index] = el}} className={`flex flex-col h-90 justify-end absolute transition-opacity duraiton-500 top-1/2 -translate-y-1/2 ${currentIndex === index ? "opacity-100 delay-100" : "opacity-0"} w-full`}
                            >
                                <span className="md:text-4xl text-lg italic font-bold text-semimajorgreen absolute top-0">{carousel.description}</span>
                                <div className="flex items-center gap-3">
                                    <Image src={carousel.image} width={1000} height={1000} alt='image' className='w-15 h-15 rounded object-cover' />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-lg text-semimajorgreen font-semibold">{carousel.name}</p>
                                        <p className="text-darkgray text-sm">{carousel.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-3 items-center">
                            <button onClick={() => setCurrentIndex(prev => prev - 1 < 0 ? carouselArray.length - 1 : prev - 1)} className={`py-1 px-3 rounded-full flex ${currentIndex >= carouselArray.length - 1 ? "bg-semimajorgreen text-white" : "text-semimajorgreen bg-transgreen"} cursor-pointer`}><ArrowLeft size={20} /></button>
                            <button onClick={() => setCurrentIndex(prev => prev + 1 > carouselArray.length - 1 ? 0 : prev + 1)} className={`py-1 px-3 rounded-full flex ${currentIndex < carouselArray.length - 1 ? "bg-semimajorgreen text-white" : "text-semimajorgreen bg-transgreen"} cursor-pointer`}><ArrowRight size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
            <ThreeColGrid>
                <div className="flex flex-col gap-5 md:py-0 py-10">
                    <span className="md:text-7xl text-3xl font-bold text-black md:tracking-[-4px]">120k+</span>
                    <p className="text-darkgray md:pe-50">Product and brand views across categories since launch.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-7xl text-3xl font-bold text-black md:tracking-[-4px]">4x sales</span>
                    <p className="text-darkgray md:pe-50">per vendor average each each month.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="md:text-7xl text-3xl font-bold text-black md:tracking-[-4px]">95%</span>
                    <p className="text-darkgray md:pe-50">Order fullfilment rate across 300 + vendors.</p>
                </div>
            </ThreeColGrid>
        </GlobalContainer>
    </>
  )
}

export default Talk