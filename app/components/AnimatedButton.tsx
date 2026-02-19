'use client'
import gsap from 'gsap';
import React, { addTransitionType, ReactNode, useEffect, useRef, useState } from 'react'

type Props = {
    className?: string
    text: string;
    textClassname?: string
    hover?: string
    border?:boolean
    notTextHover?: boolean
    add?: ReactNode;
}

const AnimatedButton = ({notTextHover, className, text, textClassname, hover, border, add}: Props) => {

  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <button ref={buttonRef} className={`group relative flex p-3 flex-col transition-bg duration-200 ${hover || "bg-majororange hover:bg-white text-majorgreen"} ${border ? "" : "border border-white"} font-bold overflow-hidden ${className} cursor-pointer`}>
        <p className={`flex items-center gap-20 transition-transform duration-500 ease-in-out ${notTextHover ? "" : "group-hover:-translate-y-[200%]"} ${textClassname}`}>{text}{add}</p>
        <p className={`flex items-center justify-center gap-20 absolute -translate-y-1/2 group-hover:top-[50%] top-[150%] transition-top duration-500 ease-in-out left-1/2 -translate-x-1/2 w-full ${textClassname}`}>{text}{add}</p>
    </button>
  )
}

export default AnimatedButton