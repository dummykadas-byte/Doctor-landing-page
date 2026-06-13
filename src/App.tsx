import Lenis from 'lenis';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import TrustSection from './components/TrustSection';
import GoalSection from './components/GoalSection';
import TeamSection from './components/TeamSection';
import VisionSection from './components/VisionSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <CustomCursor />
      
      {!loading && (
        <div className="relative selection:bg-primary/20 selection:text-primary min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <StatsSection />
            <TrustSection />
            <GoalSection />
            <TeamSection />
            <VisionSection />
            <CtaBanner />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
