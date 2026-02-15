import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CoffeeParticles from './CoffeeParticles';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animación de letras individuales
  const titleWords = ['Café', 'Optimeals'];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotationX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotationX: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-coffee-900"
    >
      {/* Video de fondo con efectos cinematográficos */}
      <div className="absolute inset-0">
        {/* Video container */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        >
          <source src="/assets/video/location.mp4" type="video/mp4" />
        </video>

        {/* Overlay cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/30 via-coffee-900/50 to-coffee-900/80" />

        {/* Efecto grano/ruido */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '400px 400px',
            animation: 'grain 8s steps(10) infinite',
          }}
        />

        {/* Efecto parallax sutil */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-coffee-900/20 via-transparent to-coffee-900/20"
          animate={{
            x: mousePosition.x * 30 - 15,
            y: mousePosition.y * 30 - 15,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />
      </div>

      {/* Partículas */}
      <div className="absolute inset-0">
        <CoffeeParticles />
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Subtítulo */}
          <motion.p
            className="text-coffee-300 text-sm md:text-base tracking-widest uppercase font-semibold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            ✦ Especialidad en Café de Tercera Ola ✦
          </motion.p>

          {/* Título con animación de letras */}
          <motion.div
            className="flex flex-col items-center justify-center flex-wrap gap-2 md:gap-6 mb-6"
            variants={containerVariants}
          >
            {titleWords.map((word, wordIndex) => (
              <div key={wordIndex} className="flex gap-1 md:gap-3">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    className="font-display text-6xl md:text-8xl font-bold gradient-text glow-effect"
                    variants={letterVariants}
                    style={{
                      perspective: '1000px',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Subtítulo descriptivo */}
          <motion.p
            className="text-coffee-200 text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Cada taza cuenta una historia de pasión, precisión y tradición
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Primary CTA */}
            <motion.a
              href="#menu"
              className="relative px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold text-coffee-900 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cream-400 to-cream-300 rounded-full transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(240,218,179,0.6)]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explorar Menú
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#location"
              className="px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold text-cream-400 border-2 border-cream-400 hover:border-cream-300 hover:text-cream-300 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Ubicación
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-coffee-300 text-xs uppercase tracking-widest">Desliza</span>
              <motion.svg
                className="w-6 h-6 text-cream-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes grain {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-20%, -5%); }
          60% { transform: translate(15%, 5%); }
          70% { transform: translate(0%, 10%); }
          80% { transform: translate(3%, 0%); }
          90% { transform: translate(-10%, -10%); }
          100% { transform: translate(0, 0); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f0dab3 0%, #e5c68d 50%, #c89b75 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-effect {
          filter: drop-shadow(0 0 20px rgba(240, 218, 179, 0.4));
        }
      `}</style>
    </section>
  );
};

export default Hero;
