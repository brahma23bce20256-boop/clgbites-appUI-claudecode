import IntroSplash from '@/components/IntroSplash';
import SmoothScroll from '@/components/SmoothScroll';
import StickyCTA from '@/components/StickyCTA';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Timeline from '@/components/sections/Timeline';
import EightyParcels from '@/components/sections/EightyParcels';
import VijayawadaLeap from '@/components/sections/VijayawadaLeap';
import WhatWeOffer from '@/components/sections/WhatWeOffer';
import Vision from '@/components/sections/Vision';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <IntroSplash />
      <SmoothScroll />
      <StickyCTA />
      <main className="relative">
        <Hero />
        <Problem />
        <Timeline />
        <EightyParcels />
        <VijayawadaLeap />
        <WhatWeOffer />
        <Vision />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
