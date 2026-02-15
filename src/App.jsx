import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AudioController from './components/AudioController';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Handle preloader completion
  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // GSAP ScrollTrigger refresh on load
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [isLoading]);

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main App */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Grain Texture Overlay */}
        <div className="grain-overlay" />

        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Hero Section */}
        <Hero />

        {/* Gallery Section */}
        <Gallery />

        {/* Menu Section */}
        <Menu />

        {/* Location Section */}
        <Location />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Floating Components */}
        <AudioController />
        <BackToTop />
      </motion.div>
    </>
  );
}

export default App;
