"use client"
import { useRef } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import AnimatedButton from "./components/AnimatedButton";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import WhyNaijazone from "./components/WhyNaijazone";
import Shop from "./components/Shop";
import Products from "./components/Products";
import Experience from "./components/Experience";
import Think from "./components/Think";
import Watch from "./components/Watch";
import Talk from "./components/Talk";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import { useGSAP } from "@gsap/react";
import { useClickContext } from "./context/ContextProvider";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const {click} = useClickContext()
  // useGSAP(() => {
  //   if(!click) {
  //     homeRef.current?.classList.add('opacity-0')
  //   }
  // })

//   useGSAP(() => {
//   if(pathname === "/") {
//     gsap.from(homeRef.current, {
//       y: 1000,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out"
//     });
//   } else {
//     gsap.to(homeRef.current, {
//       y: 1000,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out"
//     });
//   }
// }, { scope: homeRef });
  return (
    <div ref={homeRef} className={`bg-superlightgreen tracking-tighter`}>
      <Hero />
      <HomeAbout />
      <WhyNaijazone />
      <Shop />
      <Products />
      <Experience />
      <Think />
      <Watch />
      <Talk />
      <Pricing />
      <FAQs />
      <Insights />
    </div>
  );
}
