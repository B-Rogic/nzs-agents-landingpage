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
        <GlobalContainer className='flex flex-col pt-80 items-start'>
            <div className="flex justify-between items-center w-full">
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-6xl md:text-[11rem] font-semibold text-semimajorgreen -tracking-[4px] md:-tracking-[12px]">Contact</h1>
            </div>
            <div className="flex flex-col gap-5 md:w-[70%] ms-auto justify-center py-5">
                <p className="text-darkgray md:pe-70 font-semibold">Tell us about your band, your goals, and the challenges you are facing ⎯ we'll come back with ideas, direction, and clear path to move forward</p>
                <div className="flex flex-col gap-5 text-darkgray font-semibold mt-15">
                    <div className="flex md:flex-row flex-col gap-2">
                        <label htmlFor="name" className='flex flex-col w-full'>
                            Name *
                            <input type="text" className='py-3 border-b border-majorgray w-full placeholder:text-darkgray outline-none' placeholder='Your Name' />
                        </label>
                        <label htmlFor="name" className='flex flex-col w-full'>
                            Company
                            <input type="text" className='py-3 border-b border-majorgray w-full placeholder:font-semibold placeholder:text-darkgray outline-none' placeholder='Your Business Name' />
                        </label>
                    </div>
                    <div className="flex md:flex-row flex-col gap-2">
                        <label htmlFor="name" className='flex flex-col w-full'>
                            E-mail *
                            <input type="text" className='py-3 border-b border-majorgray w-full placeholder:text-darkgray outline-none' placeholder='Your someone@email.com' />
                        </label>
                        <label htmlFor="name" className='flex flex-col w-full'>
                            Phone Number
                            <input type="text" className='py-3 border-b border-majorgray w-full placeholder:font-semibold placeholder:text-darkgray outline-none' placeholder='+ 234 456 000 000' />
                        </label>
                    </div>
                    <div className="flex md:flex-row flex-col gap-5 md:gap-2">
                        <label htmlFor="name" className='flex flex-col w-full'>
                            Name *
                            <input type="text" className='py-3 border-b border-majorgray w-full placeholder:text-darkgray outline-none' placeholder='Your Name' />
                        </label>
                        <label htmlFor="name" className='flex flex-col w-full'>
                            Company
                            <input type="text" className='py-3 border-b border-majorgray w-full placeholder:font-semibold placeholder:text-darkgray outline-none' placeholder='Your Business Name' />
                        </label>
                    </div>
                    <label htmlFor="name" className='flex flex-col w-full'>
                        Business Category *
                        <select className='py-3 border-b border-majorgray w-full placeholder:font-semibold placeholder:text-darkgray mt-10 outline-none'>
                            <option value="" className='w-full'>Select Category</option>
                            <option value="music" className='w-full'>Products</option>
                            <option value="entertainment" className='w-full'>Services</option>
                        </select>
                    </label>
                    <label htmlFor="name" className='flex flex-col w-full'>
                        Brand/Business Goals *
                        <textarea className='py-3 border-b border-majorgray w-full placeholder:font-semibold placeholder:text-darkgray mt-10 outline-none' placeholder='Tell us more' cols={5}>
                        </textarea>
                    </label>
                </div>
                <button className='bg-majororange text-semimajorgreen p-3 md:p-5 w-full rounded-full hover:bg-white duration-200 transition-bg border border-majororange cursor-pointer font-semibold ms-auto'>Submit</button>
            </div>
        </GlobalContainer>
    </>
  )
}

export default Hero