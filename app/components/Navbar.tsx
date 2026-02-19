"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/app/src/images/logo.png'
import AnimatedButton from './AnimatedButton'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full flex flex-col fixed z-2 top-0 left-0'>
        <div className="flex relative flex-col w-full group bg-majorgreen overflow-hidden p-6">
            <div className="flex justify-center items-center gap-3 p-5 w-full text-white absolute transition-transform duration-200 top-1/2 -translate-y-1/2 group-hover:-translate-y-[120%]">
                •
                <Link className='text-sm' href={''}>BECOME A VENDOR</Link>
                •
                <Link className='text-sm' href={''}>BECOME AN AGENT</Link>
                •
            </div>
            <div className="flex justify-center items-center gap-3 p-5 w-full text-white absolute top-[120%] -translate-y-1/2 group-hover:top-[50%] transition-top duration-200">
                •
                <Link className='text-sm' href={''}>BECOME A VENDOR</Link>
                •
                <Link className='text-sm' href={''}>BECOME AN AGENT</Link>
                •
            </div>
        </div>
        <div className="flex justify-between w-full items-start px-10 py-5">
            <div className="flex flex-col gap-1">
                <Link href={'/'} className="flex items-center gap-3">
                    <Image src={logo} width={1000} height={1000} alt='logo' className='w-15' />
                    <span className='text-6xl font-bold flex relative text-white'>naijazone <sup className='text-5xl absolute -right-8 -top-1'>®</sup></span>
                </Link>
                <p className="text-white/30 font-semibold">Shop Nigeria-made Goods.</p>
            </div>
            <div className="flex gap-3 items-center">
                <Link href={'/our_story'} className='cursor-pointer'>
                    <AnimatedButton text='Our Story' textClassname='white' hover='bg-white/20 text-white rounded-full' border className='text-sm' />
                </Link>
                <Link href={'/our_story'} className='cursor-pointer'>
                    <AnimatedButton text='Top Buys' textClassname='white' hover='bg-white/20 text-white rounded-full' border className='text-sm' />
                </Link>
                <Link href={'/our_story'} className='cursor-pointer'>
                    <AnimatedButton text='Sportlight' textClassname='white' hover='bg-white/20 text-white rounded-full' border className='text-sm' />
                </Link>
                <Link href={'/our_story'} className='cursor-pointer'>
                    <AnimatedButton text='Contact' textClassname='white' hover='bg-white/20 text-white rounded-full' border className='text-sm' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar