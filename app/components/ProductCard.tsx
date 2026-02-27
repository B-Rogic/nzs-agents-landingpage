import React from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

type Props = {
    src: string, 
    button1Text?: string, 
    button2Text?: string,
    title: string,
    description: string
    height?: number
    styleHeight?: string
    buttons?: boolean
    buttonAmount?: number
    card2?: boolean
    className?: string
}

const ProductCard = ({src, button1Text, button2Text, title, description, height, buttons, buttonAmount, card2, styleHeight, className}: Props) => {
  return (
    <div className={`flex flex-col gap-3 group ${className}`}>
        <div className={`rounded-3xl flex gap-1 relative overflow-hidden ${height === 2 ? 'h-80' : height === 3 ? 'h-110' : "h-140"} ${styleHeight ? styleHeight : ''}`}>
            <Image src={src} width={1000} height={1000} alt='beauty' className='w-full h-full object-cover group-hover:scale-120' style={{
                transition: "scale 1s cubic-bezier(1, 0, 0.3, 1.5)"
            }} />
            {card2  ? null : (
                <div className="flex gap-2 absolute z-5 p-2">
                    {buttons && <>
                        {buttonAmount === 2 ? <>
                                <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">{button1Text}</button>
                                <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">{button2Text}</button>
                            </> : <>
                                <button className="px-5 py-2 text-white backdrop-blur rounded-xl bg-white/10 cursor-pointer">{button1Text}</button>
                            </>
                        }
                    </>}
                </div>
            )}
            {card2  ? (
                <div className="w-full h-full absolute top-0 left-0 z-1 flex justify-end bg-gradient-to-t from-black/50 to-black/10 flex-col gap-5 text-white p-5">
                    <p className="font-light">{title}</p>
                    <p className="text-3xl font-semibold ">{description}</p>
                </div>
            ) : (
                <div className="bg-semimajorgreen/20 w-full h-full absolute top-0 left-0 z-1 mix-blend-screen flex justify-center items-center group-hover:backdrop-blur transition-blur duration-200 ease-in-out">
                    <div className="w-12 h-12 opacity-0 group-hover:opacity-100 ease-linear transition-opacity duration-500 rounded-full flex justify-center items-center text-white bg-lightgreen">
                        <Plus strokeWidth={1} size={20} />
                    </div>
                </div>
            )}
        </div>
        {card2 ? null : (
            <div className="mt-3">
                <p className="text-xl text-semimajorgreen font-semibold">{title}</p>
                <p className="text-lg text-darkgray font-semibold">{description}</p>
            </div>
        )}
    </div>
  )
}

export default ProductCard