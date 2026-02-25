import { ArrowRight, Folder, FolderOpen, Plus, Star, StarHalf } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import AnimatedButton from './AnimatedButton'
import AnimatedText from './AnimatedText'
import FlexCol from './FlexCol'
import { UsersThreeIcon } from '@phosphor-icons/react'
import JustifyBetween from './JustifyBetween'
import GlobalContainer from './GlobalContainer'

type Props = {}

const Shop = (props: Props) => {
  return (
    <GlobalContainer className='bg-superlightgreen flex flex-col gap-20 pt-50 pb-50'>
        <JustifyBetween className='items-start'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <FolderOpen size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">Shop Naijazone</p>
            </div>
            <FlexCol className='items-start gap-20'>
                <div className="flex flex-col gap-3">
                    <span className="text-8xl font-bold text-semimajorgreen">Shop Naija!</span>
                    <p className="text-darkgray text-2xl font-semibold">Naijazone isn't just another e-commerce site.</p>
                </div>
                <div className="flex flex-col gap-10 items-start">
                    <p className="text-darkgray text-xl md:pe-90">Our Mission: To become the primary engine for SMEs in West Africa, providing the tools fo rany Nigerian with a product and a dream to scale globally.</p>
                    <AnimatedButton className='rounded-full' hover='hover:bg-semimajorgreen bg-majorgreen text-white' border  text='Shop all categories' />
                </div>
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default Shop