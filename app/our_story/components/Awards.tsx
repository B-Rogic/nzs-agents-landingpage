"use client"
import FlexCol from '@/app/components/FlexCol'
import GlobalContainer from '@/app/components/GlobalContainer'
import JustifyBetween from '@/app/components/JustifyBetween'
import { Trophy } from '@phosphor-icons/react'
import { MessageCircle } from 'lucide-react'
import React from 'react'

type Props = {}

const Awards = (props: Props) => {
  return (
    <GlobalContainer className='bg-white py-20'>
        <JustifyBetween className='items-start relative z-2 md:flex-row flex-col gap-5'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[33%]">
                <Trophy size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold font-bold">Awards</p>
            </div>
            <FlexCol className='items-start gap-10'>
                <span className="text-2xl md:text-5xl font-semibold text-semimajorgreen italic tracking-[-2px]">
                    Our goal is to digitize the traditional Nigerian market spirit—the haggling, the community, the trust—and make it accessible to all 36 states and beyond.
                </span>
                <div className="flex items-end justify-between">
                    <p className="text-darkgray md:pe-40 text-lg font-semibold">For decades, the label "Made in Italy" carried a weight that "Made in Aba" didn't. But in 2026, the tables have turned. At Naijazone, we are witnessing a "Leather Renaissance" where Nigerian artisans are producing footwear and accessories that rival European luxury houses—at a fraction of the cost.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3 py-5 border-b border-majorgray">
                        <p className="text-darkgray">
                            Verified Vendors
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-semimajorgreen text-xl font-semibold md:pe-28">
                                With over 40 million small businesses in Nigeria, we aim to be the primary digital home for the top 2.5% of verified producers.
                            </p>
                            <p className="text-darkgray text-sm flex-shrink-0">May 2025</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 py-5 border-b border-majorgray">
                        <p className="text-darkgray">
                            Naijazone Verification Agents
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-semimajorgreen text-xl font-semibold md:pe-28">
                                A presence in every district to ensure that "Naijazone Verified" remains the gold standard of trust.
                            </p>
                            <p className="text-darkgray text-sm flex-shrink-0">January 2025</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 py-5 border-b border-majorgray">
                        <p className="text-darkgray">
                            Area Coverage
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-semimajorgreen text-xl font-semibold md:pe-28">
                                100% (All 774 Local Government Areas). From the heart of Lagos to the remote borders of Borno.
                            </p>
                            <p className="text-darkgray text-sm flex-shrink-0">September 2024</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 py-5 border-b border-majorgray">
                        <p className="text-darkgray">
                            Direct-from-Farm/Factory Partnerships
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-semimajorgreen text-xl font-semibold md:pe-28">
                                10,000+ exclusive partnerships with local mills, factories, and farms to guarantee floor-bottom pricing.
                            </p>
                            <p className="text-darkgray text-sm flex-shrink-0">November 2024</p>
                        </div>
                    </div>
                </div>
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default Awards