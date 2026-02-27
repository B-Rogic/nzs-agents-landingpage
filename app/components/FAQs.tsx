'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import JustifyBetween from './JustifyBetween'
import { ArrowRight, Question, UsersThreeIcon } from '@phosphor-icons/react'
import AnimatedText from './AnimatedText'
import AnimatedButton from './AnimatedButton'
import FlexCol from './FlexCol'
import { Plus, Star, StarHalf } from 'lucide-react'

type Props = {}

const FAQs = (props: Props) => {
    const [active, setActive] = useState<string>("")
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const accordionArray = [
        {
            title: "How do i know the products on Naijazone are authentic?",
            description: `Every vendor goes through our Multi-Stage Verification process. We don't just check IDs; we verify physical business locations and sample product quality before they receive the "Verified Vendor" badge. Our Skincare and Furniture categories undergo extra security to ensure they meet indigenous quality standards`, 
        },
        {
            title: `What is "Smart Pricing" and how does it benefit me?`,
            description: `Smart Pricing is our way of ensuring market fairness. Our system monitors the average market price for indigenous goods (like a bag of Garri or a yard of Aso-Oke). If a vendor’s price is significantly higher than the market average without a "Premium" justification, our system flags it to ensure you are always getting the best value.`, 
        },
        {
            title: "When will i receive my order?",
            descriptionArray: ['With our Quick Sales & Service initiative, we aim for "High-Speed."', "Standard Items (Skincare/Fashion): 24-74 hours depending on your city.", "Large Items (Furniture): 3-7 working days, as these require specialized handling to ensure they arrive in perfec condition."], 
        },
        {
            title: "Is my money safe if a vendor doesn't ship my items?",
            description: `Absolutely. Naijazone uses a Secure Escrow System. When you make a payment, the money is held by Naijazone. We only release the funds to the vendor after you have confirmed receipt of the item in good condition. If the item never arrives, you get a full refund.`, 
        },
        {
            title: "I am a small artisan; can I sell on Naigazone?",
            description: `Yes! Our Vendor Account Plan is designed specifically for small-scale entrepreneurs. With a low one-time verification fee and no massive upfront costs, you can move your business from WhatsApp to a nationwide audience instantly.`, 
        },
        {
            title: "What happens if I receive a product that doesn't match the description?",
            description: `Our 24hr Support team is here to help. You have 48 hours after delivery to lodge a dispute. Simply click "Dispute" on your dashboard or message our WhatsApp line. We will investigate and, if the product is found to be misrepresented, we facilitate a return and refund.`, 
        },
    ]
  return (
    <GlobalContainer className='bg-superlightgreen flex flex-col gap-10 md:gap-20'>
        <JustifyBetween className='items-start md:flex-row flex-col gap-5'>
            <div className="flex items-center gap-3 flex-shrink-0 md:w-[30%]">
                <Question size={25} className='text-semimajorgreen' />
                <p className="text-semimajorgreen font-semibold">FAQ</p>
            </div>
            <FlexCol className='items-start'>
                <AnimatedText textClass='md:text-5xl text-2xl font-bold' className='md:pe-20 tracking-tighter' text='Before you start, here are some of the things most people want to know' />
            </FlexCol>
        </JustifyBetween>
        <JustifyBetween className='items-start md:flex-row flex-col gap-5'>
            <FlexCol className='md:w-[30%] md:h-170 justify-between flex-shrink-0 items-start'>
                <FlexCol className='items-start'>
                    <p className="text-xl font-semibold text-semimajorgreen">Not finding what you need?</p>
                    <p className="text-lg font-semibold text-darkgray md:pe-20">Reach out anytime. We're happy to answer any questions before you begin.</p>
                    <div className="flex items-center gap-3">
                        <Image src={'https://framerusercontent.com/images/mCD1VlJCvIfXKjek5viuP2SafX4.jpeg?width=736&height=981'} className='w-17 h-18 object-cover rounded-xl' width={1000} height={1000} alt='image' />
                    </div>
                </FlexCol>
                <AnimatedButton padding='md:p-3 p-0' className='mt-' hover='bg-transparent text-semimajorgreen' text='Ask a question' add={<ArrowRight />} border />
            </FlexCol>
            <FlexCol>
                {accordionArray.map((accordion, index) => (
                    <FlexCol key={index} handleClick={() => setActive(prev => prev === accordion.title ? "" : accordion.title)} gap={`${active === accordion.title ? "gap-3" : "gap-0"} transition-gap duration-500 ease-in-out`} className='md:p-8 p-3 rounded-2xl bg-white'>
                        <div className="flex items-center justify-between">
                            <p className="text-semimajorgreen md:text-lg font-semibold">{accordion.title}</p>
                            <div className={`"flex justify-center items-center bg-semimajorgreen text-white rounded-2xl cursor-pointer py-1 px-2`}>
                                <Plus size={25} strokeWidth={1} />
                            </div>
                        </div>
                        <div ref={(el) => {accordionRefs.current[index] = el}} className="flex flex-col transition-height duration-500 ease-in-out gap-2 overflow-hidden"
                            style={{
                                height: active === accordion.title ? `${accordionRefs.current[index]?.scrollHeight}px` : "0px"
                            }}
                        >
                            {accordion.descriptionArray ? accordion.descriptionArray.map((description, index) => (
                                <p key={index} className='text-darkgray'>{description}</p>
                            )): (
                                <p className='text-darkgray'>{accordion.description}</p>
                            )}
                        </div>
                    </FlexCol>
                ))}
            </FlexCol>
        </JustifyBetween>
    </GlobalContainer>
  )
}

export default FAQs