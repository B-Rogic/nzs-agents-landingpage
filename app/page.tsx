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

export default function Home() {
  return (
    <div className="bg-superlightgreen tracking-tighter">
      <Navbar />
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
      <Contact />
    </div>
  );
}
