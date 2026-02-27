import Awards from "./components/Awards";
import Hero from "./components/Hero";
import OurVision from "./components/OurVision";
import TheFuture from "./components/TheFuture";
import WhoWeAre from "./components/WhoWeAre";


export default function Home() {
  return (
    <div className="bg-superlightgreen tracking-tighter">
        <Hero />
        <WhoWeAre />
        <OurVision />
        <TheFuture />
        <Awards />
    </div>
  );
}
