import React from 'react'
import ThreeColGrid from './ThreeColGrid'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import { Plus } from 'lucide-react'

type Props = {}

const Products = (props: Props) => {
  return (
    <GlobalContainer>
        <ThreeColGrid>
            <div className="flex flex-col gap-3 group">
                <div className="rounded-xl flex gap-1 relative overflow-hidden h-140">
                    <Image src={'https://framerusercontent.com/images/5z5VskxwWl7lOtDfo8krwoi0FyU.jpeg?scale-down-to=512&width=736&height=736'} width={1000} height={1000} alt='beauty' className='w-full h-full object-cover group-hover:scale-120' style={{
                        transition: "scale 1s cubic-bezier(1, 0, 0.3, 1.5"
                    }} />
                    <div className="flex gap-2 absolute z-5 p-2">
                        <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">Treatment & Glow</button>
                        <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">Organic & Natural</button>
                    </div>
                    <div className="bg-semimajorgreen/20 w-full h-full absolute top-0 left-0 z-1 mix-blend-screen flex justify-center items-center group-hover:backdrop-blur transition-blur duration-200 ease-in-out">
                        <div className="w-12 h-12 opacity-0 group-hover:opacity-100 ease-linear transition-opacity duration-500 rounded-full flex justify-center items-center text-white bg-lightgreen">
                            <Plus strokeWidth={1} size={20} />
                        </div>
                    </div>
                </div>
                <div className="felx flex-col gap-2">
                    <p className="text-2xl text-semimajorgreen font-semibold">Beauty, Health & Wellness</p>
                    <p className="text-lg text-darkgray font-semibold">Skincare and beauty products formulated specifically for our climate adn skin types.</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 group">
                <div className="rounded-xl flex gap-1 relative overflow-hidden h-80">
                    <Image src={'https://framerusercontent.com/images/wx9cIiFvA3R2uziMHdpMnBs3Y8.jpeg?width=736&height=879'} width={1000} height={1000} alt='beauty' className='w-full h-full object-cover group-hover:scale-120' style={{
                        transition: "scale 1s cubic-bezier(1, 0, 0.3, 1.5"
                    }} />
                    <div className="flex gap-2 absolute z-5 p-2">
                        <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">Treatment & Glow</button>
                        <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">Organic & Natural</button>
                    </div>
                    <div className="bg-semimajorgreen/20 w-full h-full absolute top-0 left-0 z-1 mix-blend-screen flex justify-center items-center group-hover:backdrop-blur transition-blur duration-200 ease-in-out">
                        <div className="w-12 h-12 opacity-0 group-hover:opacity-100 ease-linear transition-opacity duration-500 rounded-full flex justify-center items-center text-white bg-lightgreen">
                            <Plus strokeWidth={1} size={20} />
                        </div>
                    </div>
                </div>
                <div className="felx flex-col gap-2">
                    <p className="text-2xl text-semimajorgreen font-semibold">Fashion & Ready-to-Wear</p>
                    <p className="text-lg text-darkgray font-semibold">Top Notch Nigerian-Made fashion items.</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 group">
                <div className="rounded-xl flex gap-1 relative overflow-hidden h-110">
                    <Image src={'https://framerusercontent.com/images/vrIMXQp9uN9rWzCcEOit3VRjJ0.jpeg?width=498&height=595'} width={1000} height={1000} alt='beauty' className='w-full h-full object-cover group-hover:scale-120' style={{
                        transition: "scale 1s cubic-bezier(1, 0, 0.3, 1.5"
                    }} />
                    <div className="flex gap-2 absolute z-5 p-2">
                        <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">Treatment & Glow</button>
                        <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">Organic & Natural</button>
                    </div>
                    <div className="bg-semimajorgreen/20 w-full h-full absolute top-0 left-0 z-1 mix-blend-screen flex justify-center items-center group-hover:backdrop-blur transition-blur duration-200 ease-in-out">
                        <div className="w-12 h-12 opacity-0 group-hover:opacity-100 ease-linear transition-opacity duration-500 rounded-full flex justify-center items-center text-white bg-lightgreen">
                            <Plus strokeWidth={1} size={20} />
                        </div>
                    </div>
                </div>
                <div className="felx flex-col gap-2">
                    <p className="text-2xl text-semimajorgreen font-semibold">Footwear & Premium Leather Goods</p>
                    <p className="text-lg text-darkgray font-semibold">Durable, stylish footwear crafted by Nigeria's finest leatherworkers.</p>
                </div>
            </div>
        </ThreeColGrid>
    </GlobalContainer>
  )
}

export default Products