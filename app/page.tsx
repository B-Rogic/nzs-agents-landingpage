import Image from "next/image";
import Navbar from "./components/Navbar";
import AnimatedButton from "./components/AnimatedButton";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeAbout />
    </>
  );
}
