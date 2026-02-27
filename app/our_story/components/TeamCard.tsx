import { Plus } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    src?: string | StaticImageData,
    name: string, 
    position: string,
}

const TeamCard = ({src, name, position}: Props) => {
  return (
    <div className="rounded-4xl text-majorgray relative overflow-hidden h-120">
        <div className="w-full h-full z-1 bg-gradient-to-t from-black/60 to-black/20 rounded-2xl absolute left-0 top-0 flex flex-col justify-end p-5">
            <p className="text-lg font-semibold text-white">{name}</p>
            <p className=" text-white">{position}</p>
        </div>
        <Plus size={25} strokeWidth={1} className='absolute right-5 top-5' />
        <Image width={1000} height={1000} alt='image' className='w-full object-cover rounded-4xl' src={src || 'https://framerusercontent.com/images/QYUIrwEcQVJJfdqgfG5sgEv2s.png?scale-down-to=1024&width=1583&height=2163'} />
    </div>
  )
}

export default TeamCard