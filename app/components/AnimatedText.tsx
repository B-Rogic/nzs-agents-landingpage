"use client"
import React, { useEffect } from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(SplitText, ScrollTrigger)

type Props = {
    text: string, 
    className?: string;
    textColor?: string;
    textClass?: string
}

const AnimatedText = ({text, className, textColor, textClass}: Props) => {
    useEffect(() => {
        const splitText = new SplitText(".animate-text", {type: "words"})
        gsap.timeline({
            scrollTrigger: {
                trigger: '.animate-text', 
                start: "top center", 
                scrub: true
            }
        }).to(splitText.words, {
            color: "#448e68",
            stagger: 0.2,
            ease: 'power4.inOut'
        })
    }, [])
  return (
    <h2 className={`animate-text ${className} ${textClass || "text-5xl font-bold"} ${textColor || "text-majorgray"}`}>{text}</h2>
  )
}

export default AnimatedText