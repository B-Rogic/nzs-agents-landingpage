import { Plus } from 'lucide-react'
import React from 'react'

type Props = {
    count?: number,
    stringCount: string,
    content: string, 
}

const Card = ({count, stringCount, content}: Props) => {
  return (
    <div className="flex flex-col gap-40 justify-between bg-white rounded-2xl p-5">
        <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    {count === 2 ? (
                        <>
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen" />
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen" />
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen/20" />
                        </>
                    ) : count === 3 ? (
                        <>
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen" />
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen" />
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen" />
                        </>
                    ) : (
                        <>
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen" />
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen/20" />
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen/20" />
                            <div className="w-2 h-2 rounded-full bg-semimajorgreen/20" />
                        </>
                    )}
                </div>
                <Plus className='text-darkgray' size={25} strokeWidth={1}  />
            </div>
            <p className="text-4xl md:text-7xl font-bold text-semimajorgreen">{stringCount}</p>
        </div>
        <div className="flex items-end justify-between">
            <p className="text-lg font-semibold text-darkgray pe-10">{content}</p>
            <Plus className='text-darkgray flex-shrink-0' size={25} strokeWidth={1}  />
        </div>
    </div>
  )
}

export default Card