"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import logo from '@/app/src/images/logo.png'
import AnimatedButton from './AnimatedButton'
import { usePathname } from 'next/navigation'
import { useClickContext } from '../context/ContextProvider'
import gsap from 'gsap'
import { ArrowRight, Menu } from 'lucide-react'

const Navbar = () => {
    const { setClick } = useClickContext()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const pathname = usePathname()
    
    const [isVisible, setIsVisible] = useState(true)
    const [isAtTop, setIsAtTop] = useState(true)
    
    // We use a Ref to store the scroll position to avoid unnecessary renders
    const lastScrollY = useRef(0)
    // Threshold: How many pixels do we need to scroll before the navbar toggles?
    const threshold = 10 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show at very top
            if (currentScrollY <= 10) {
                setIsVisible(true);
                setIsAtTop(true);
            } 
            // Scrolling down
            else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
                setIsAtTop(false);
            } 
            // Scrolling up
            else {
                setIsVisible(true);
                setIsAtTop(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(".translate-h1", {
            y: 0, 
            delay: 0.5,
            duration: 1,
            ease: "power4.out",
        }).from(".animated-button", {
            y: 50, 
            opacity: 0, 
            stagger: 0.2,
            duration: 1,
            ease: "power4.out",
        }, "-=0.5")
    }, [])
    return (
        <div 
        className={`w-full flex flex-col fixed z-[100] top-0 left-0 transition-all duration-500 ease-in-out 
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
    >
            {/* TOP MARQUEE SECTION */}
            <div className={`flex relative flex-col w-full group bg-majorgreen overflow-hidden p-6 transition-transform duration-300 ${!isAtTop ? "scale-0" : "scale-100"}`}>
                <div className="flex justify-center items-center gap-3 p-5 w-full text-white absolute transition-transform duration-200 top-1/2 -translate-y-1/2 group-hover:-translate-y-[120%]">
                    • <Link className='text-sm' href={''}>BECOME A VENDOR</Link> • <Link className='text-sm' href={''}>BECOME AN AGENT</Link> •
                </div>
                <div className="flex justify-center items-center gap-3 p-5 w-full text-white absolute top-[120%] -translate-y-1/2 group-hover:top-[50%] transition-top duration-200">
                    • <Link className='text-sm' href={''}>BECOME A VENDOR</Link> • <Link className='text-sm' href={''}>BECOME AN AGENT</Link> •
                </div>
            </div>

            {/* MAIN NAVIGATION SECTION */}
            <div className={`flex justify-between w-full md:items-start items-center md:px-10 px-2 py-5 transition-transform duration-300 fixed top-0 left-0 ${!isAtTop || isMenuOpen ? "bg-white/80 backdrop-blur-md shadow-sm translate-y-0" : "md:bg-transparent translate-y-10"}`}>
                <div className="flex flex-col gap-1">
                    <Link onClick={() => setClick(true)} href={'/'} className="flex items-center md:gap-3">
                        <Image src={logo} width={1000} height={1000} alt='logo' className='w-15' />
                        <div className='animate-h1' style={{
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                            }}>
                            <span className={`md:text-6xl text-3xl font-bold flex relative ${pathname === "/" ? " text-semimajorgreen" : "text-majorgreen"} ${!isAtTop && "scale-0 text-semimajorgreen"} transition-transform duration-500 translate-h1 translate-y-20 `} >
                                naijazone <sup className='text-5xl absolute -right-8 -top-1'>®</sup>
                            </span>
                        </div>
                    </Link>
                    <div className='animate-h1' style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        }}>
                        <p className={`${pathname === "/" && isAtTop && !isMenuOpen ? "text-white" : "text-black/40 hidden"} font-semibold translate-h1 translate-y-20`}>Shop Nigeria-made Goods.</p>
                    </div>
                </div>

                <div className={`flex md:flex-row flex-col gap-3 items-center pt-4  md:bg-transparent bg-white overflow-hidden md:w-auto w-full md:relative fixed md:top-0 top-25 left-0 flex-shrink-0 transition-height duration-500 ease-in-out ${isMenuOpen ? "md:h-auto h-screen md:p-0 p-5 opacity-100" : "md:h-auto h-0 md:opacity-100 opacity-0"}`}>
                    <Link className='animated-button md:w-auto w-full' onClick={() => setClick(true)} href={'/our_story'}>
                        <AnimatedButton border  text='Our Story' hover={`${pathname === '/' && isAtTop ? "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent" : "md:bg-white/20 text-semimajorgreen bg-transparent"} md:rounded-full md:border-none border-b border-lightgray md:w-auto w-full items-start`}
                        padding='md:p-3 py-2' className='text-sm' />
                    </Link>
                    <Link className='animated-button md:w-auto w-full' onClick={() => setClick(true)} href={'/top_buys'}>
                        <AnimatedButton border text='Top Buys' hover={`${pathname === '/' && isAtTop ? "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent" : "md:bg-white/20  text-semimajorgreen bg-transparent"} md:rounded-full md:border-none border-b border-lightgray md:w-auto w-full items-start`}
                        padding='md:p-3 py-2' className='text-sm' />
                    </Link>
                    <Link className='animated-button md:w-auto w-full' onClick={() => setClick(true)} href={'/spotlight'}>
                        <AnimatedButton border text='Spotlight' hover={`${pathname === '/' && isAtTop ? "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent" : "md:bg-white/20  text-semimajorgreen bg-transparent"} md:rounded-full md:border-none border-b border-lightgray md:w-auto w-full items-start`}
                        padding='md:p-3 py-2' className='text-sm' />
                    </Link>
                    <Link className='animated-button md:w-auto w-full' onClick={() => setClick(true)} href={'/contact'}>
                        <AnimatedButton border text='Contact' hover={`${pathname === '/' && isAtTop ? "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent" : "md:bg-white/20  text-semimajorgreen bg-transparent"} md:rounded-full md:border-none border-b border-lightgray md:w-auto w-full items-start`} padding='md:p-3 py-2' className='text-sm' />
                    </Link>
                    <div className="flex flex-col md:hidden w-full mt-auto mb-40">
                        <p className="text-majorgray text-sm">
                            Social
                        </p>
                        <Link target='_blank' className='animated-button md:w-auto w-full' onClick={() => setClick(true)} href={'https://x.com/naijazone_'}>
                            <AnimatedButton border text='Twitter' hover={`${pathname === '/' && isAtTop ? "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent" : "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent"} md:rounded-full md:border-none border-b border-lightgray md:w-auto w-full items-start`}
                            padding='md:p-3 py-2' className='text-sm' add={<ArrowRight />} />
                        </Link>
                        <Link target='_blank' className='animated-button md:w-auto w-full' onClick={() => setClick(true)} href={'https://www.instagram.com/naijazone_'}>
                            <AnimatedButton border text='Instagram' hover={`${pathname === '/' && isAtTop ? "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent" : "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent"} md:rounded-full md:border-none border-b border-lightgray md:w-auto w-full items-start`}
                            padding='md:p-3 py-2' className='text-sm' add={<ArrowRight />} />
                        </Link>
                        <Link target='_blank' className='animated-button md:w-auto w-full' onClick={() => setClick(true)} href={'https://www.facebook.com/Naijazone1'}>
                            <AnimatedButton border text='Facebook' hover={`${pathname === '/' && isAtTop ? "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent" : "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent"} md:rounded-full md:border-none border-b border-lightgray md:w-auto w-full items-start`}
                            padding='md:p-3 py-2' className='text-sm' add={<ArrowRight />} />
                        </Link>
                        <Link target='_blank' className='animated-button md:w-auto w-full' onClick={() => setClick(true)} href={'https://www.linkedin.com/company/naijazone-online-shopping-mall/'}>
                            <AnimatedButton border text='LinkedIn' hover={`${pathname === '/' && isAtTop ? "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent" : "md:bg-white/20 md:text-white text-semimajorgreen bg-transparent"} md:rounded-full md:border-none border-b border-lightgray md:w-auto w-full items-start`}
                            padding='md:p-3 py-2' className='text-sm' add={<ArrowRight />} />
                        </Link>
                    </div>
                </div>
                <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden block mb-5 ${isAtTop ? "text-white" : "text-semimajorgreen"}`} size={30} />
            </div>
        </div>
    )
}

export default Navbar;