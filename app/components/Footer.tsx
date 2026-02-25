import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <GlobalContainer className='grid md:grid-cols-2 grid-cols-1 bg-white h-screen'>
        <div className="flex flex-col justify-between h-full">
            <Link href={'/'} className="flex items-center gap-3">
                <Image src={"https://framerusercontent.com/images/dWPSauj1MLFIbPU6zB4xsi5FISo.png?scale-down-to=512&width=1387&height=1387"} width={1000} height={1000} alt='logo' className='w-15' />
                <span className='text-6xl font-bold flex relative text-white'>naijazone <sup className='text-5xl absolute -right-8 -top-1'>®</sup></span>
            </Link>
            <div className="flex flex-col gap-10">
                <p className="text-darkgray">Naijazone focuses on authentic Nigerian-made products and direct-from-source bulk pricing — No Middlemen, No Stress.</p>
                <div className="w-full bg-darkgray"></div>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Footer