"use client"
import { useGSAP } from '@gsap/react'
import React, { ReactNode, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
type Props = {
    className?: string
    children: ReactNode
}

const GlobalContainer = ({className, children}: Props) => {
    const globalRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: globalRef.current,
                start: "top bottom",
            }
        }).from(globalRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "expo.inOut",
        })
    })
  return (
    <div ref={globalRef} className={`md:px-10 px-5 ${className}`}>{children}</div>
  )
}

export default GlobalContainer