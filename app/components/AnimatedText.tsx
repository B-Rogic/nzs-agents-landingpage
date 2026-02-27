"use client"
import React, { useEffect, useRef } from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(SplitText, ScrollTrigger)

type Props = {
    text: string, 
    className?: string;
    textColor?: string;
    textClass?: string
    changeColor?: string
}

const AnimatedText = ({text, className, textColor, textClass, changeColor}: Props) => {
    const animationRef = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        const splitText = new SplitText(animationRef.current, {type: "words, lines",})
        gsap.matchMedia().add("(min-width: 768px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: animationRef.current, 
                    start: "top +=500", 
                    scrub: true
                }
            }).to(splitText.words, {
                color: changeColor || "#006838",
                stagger: 0.05,
                ease: 'power4.inOut'
            })
        })
        gsap.matchMedia().add("(max-width: 768px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: animationRef.current, 
                    start: "top +=1000", 
                    scrub: true
                }
            }).to(splitText.words, {
                color: changeColor || "#006838",
                stagger: 0.2,
                ease: 'power4.inOut'
            })
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: animationRef.current, 
                start: "top bottom",
            }
        }).from(splitText.lines, {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: 'expo.inOut'
        })
    }, [])
  return (
    <h2 ref={animationRef} className={`${className} ${textClass || "text-5xl font-bold"} ${textColor || "text-majorgray"}`}>{text}</h2>
  )
}

export default AnimatedText