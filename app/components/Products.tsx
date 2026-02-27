import React from 'react'
import ThreeColGrid from './ThreeColGrid'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import { Plus } from 'lucide-react'
import ProductCard from './ProductCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

type Props = {}

const Products = (props: Props) => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".product-trigger",
                    start: "top center",
                }
            }).from(".product-animate", {
                y: 200,
                opacity: 0,
                duration: 1.5,
                ease: "expo.inOut",
                stagger: 0.05
            })
        })
        mm.add("(max-width: 768px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".product-trigger",
                    start: "top center",
                }
            }).from(".product-animate", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "expo.inOut",
                stagger: 0.05
            })
        })
    })
  return (
    <GlobalContainer className='product-trigger'>
        <ThreeColGrid>
            <ProductCard className='first product-animate' src='https://framerusercontent.com/images/5z5VskxwWl7lOtDfo8krwoi0FyU.jpeg?scale-down-to=512&width=736&height=736' buttons button1Text='Treatment & Glow' button2Text='Organic & Natural' title='Beauty, Health & Wellness' description='Skincare and beauty products formulated specifically for our climate adn skin types.' buttonAmount={2} />
            <ProductCard className='second product-animate' src='https://framerusercontent.com/images/wx9cIiFvA3R2uziMHdpMnBs3Y8.jpeg?width=736&height=879' buttons button1Text='Smart TVs' button2Text='Corporate & Office' title='Fashion & Ready-to-Wear' description='Top Notch Nigerian-made fashion items.' height={2} buttonAmount={2} />
            <ProductCard className='third product-animate'
                src={'https://framerusercontent.com/images/vrIMXQp9uN9rWzCcEOit3VRjJ0.jpeg?width=498&height=595'} 
                title="Footwear & Premium Leather Goods"
                description="Durable, stylish footwear crafted by Nigeria's finest leatherworkers."
                height={3}
            />
        </ThreeColGrid>
    </GlobalContainer>
  )
}

export default Products