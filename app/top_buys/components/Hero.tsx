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
        <GlobalContainer className='flex flex-col md:w-[65%] ms-auto gap-10 md:gap-20 pb-20 md:pb-40 pt-80 items-start'>
            <div className="flex justify-between items-center w-full">
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
                <Plus strokeWidth={1} size={25} className='text-darkgray' />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-6xl md:text-8xl font-bold text-semimajorgreen -tracking-[6px]">Top Buys</h1>
                <p className="font-semibold text-lg md:text-2xl text-darkgray">Active Monthly Shoppers: 30K+.</p>
            </div>
            <p className="text-darkgray text-lg">As internet penetration nears 70% by 2030, we aim for Naijazone to be the home screen of 1 in every 5 adult Nigerian</p>
            <AnimatedButton text='Discover more' className='rounded-full' hover='bg-majorgreen hover:bg-semimajorgreen' textClassname='text-white' />
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <ThreeColGrid>
                <ProductCard 
                    src={'https://framerusercontent.com/images/fPaJwt1QddTe1oMk68Dx3SN7B0.jpeg?width=690&height=964'} 
                    title="Home & Office Furniture"
                    description="Handcrafted furniture that blends local artistry with modern ergonomic standards."
                    buttons
                    button1Text='hin-Chin & Peanuts'
                />
                <ProductCard src='https://framerusercontent.com/images/5z5VskxwWl7lOtDfo8krwoi0FyU.jpeg?scale-down-to=512&width=736&height=736' buttons button1Text='Treatment & Glow' button2Text='Organic & Natural' title='Beauty, Health & Wellness' description='Skincare and beauty products formulated specifically for our climate adn skin types.' height={2} />
                <ProductCard src='https://framerusercontent.com/images/wx9cIiFvA3R2uziMHdpMnBs3Y8.jpeg?width=736&height=879' buttons button1Text='Smart TVs' button2Text='Corporate & Office' title='Fashion & Ready-to-Wear' description='Top Notch Nigerian-made fashion items.' height={3} />
            </ThreeColGrid>
        </GlobalContainer>
        <GlobalContainer className='pb-20'>
            <ThreeColGrid>
                <ProductCard 
                    src={'https://framerusercontent.com/images/vrIMXQp9uN9rWzCcEOit3VRjJ0.jpeg?width=498&height=595'} 
                    title="Footwear & Premium Leather Goods"
                    description="Durable, stylish footwear crafted by Nigeria's finest leatherworkers."
                    height={2}
                />
                <ProductCard src='https://framerusercontent.com/images/Dya6uGpPE1o4p2Sy70bKlnacXR4.jpeg?scale-down-to=1024&width=736&height=1104' buttons buttonAmount={2} button1Text='Smart TVs' button2Text='hin-Chin & Peanuts'  title='Electronics & Power Solutions' description='Smart Nigerian tech and renewable energy solutions to keep your life and business "Always On."' height={1} />
                <ProductCard src='https://framerusercontent.com/images/T7ADBWoaOswwQFwu8RiIflrFdY.jpeg?scale-down-to=1024&width=720&height=1080' buttons button1Text='hin-Chin & Peanuts' title='Snacks & Beverages' description='Fueling the hustle with authentic Nigerian flavors and refreshing local blends.' height={3} />
            </ThreeColGrid>
        </GlobalContainer>
    </>
  )
}

export default Hero