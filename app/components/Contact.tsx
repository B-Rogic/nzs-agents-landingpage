'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import JustifyBetween from './JustifyBetween'
import { ArrowRight, BookOpenIcon, Question, UsersThreeIcon } from '@phosphor-icons/react'
import AnimatedText from './AnimatedText'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import { Plus, Star, StarHalf } from 'lucide-react'

type Props = {}

const Contact = (props: Props) => {
   
  return (
    <GlobalContainer className='relative flex flex-col gap-20 py-40'>
        <Image src={'https://framerusercontent.com/images/CibWmm5zwvArzwXcekYVZYYA01I.jpeg?width=736&height=920'} width={1000} height={1000} alt='image' className='w-full h-full absolute left-0 top-0 object-cover brightness-25' />
        <div className="bg-gradient-to-t from-majorgreen/50 to-black/50 absolute left-0 top-0 w-full h-full"></div>
        <JustifyBetween className='items-start md:flex-row flex-col gap-5 relative'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <BookOpenIcon size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">Contact</p>
            </div>
            <FlexCol className='items-start' gap='gap-20'>
                <AnimatedText textClass='md:text-5xl text-2xl' changeColor='white' className='md:pe-20 tracking-tighter' text="We're always onlie: Naijazone is desined to tackle these challenges head-on, providing a seamless experience for both vendors and consumers. "/>
                <div className="flex flex-col relative">
                    <p className="font-semibold text-white/80">support@nainazoneonline.com</p>
                    <p className="text-sm text-white/80">contact@nainazoneonline.com</p>
                </div>
                <form action="" className="flex flex-col gap-3 relative w-full">
                    <label htmlFor="Name" className="flex flex-col gap-5 text-lg font-semibold w-full text-darkgray">
                        Name *
                        <input type="text" placeholder='Afeez Akabue' className="border-b py-3 border-majorgray" />
                    </label>
                    <label htmlFor="Name" className="flex flex-col gap-5 text-lg font-semibold w-full text-darkgray">
                        Email *
                        <input type="email" placeholder='akabuefeez@gmail.com' className="border-b py-3 border-majorgray" />
                    </label>
                    <label htmlFor="Name" className="flex flex-col gap-5 text-lg font-semibold w-full text-darkgray">
                        Message *
                        <textarea rows={5} placeholder='Tell us more' className="border-b py-3 border-majorgray" ></textarea>
                    </label>
                    <AnimatedButton justifyBetween='justify-center' left='left-1/2 -translate-x-1/2' text='Send Message' className='flex justify-center items-center rounded-full' border />
                </form>
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default Contact