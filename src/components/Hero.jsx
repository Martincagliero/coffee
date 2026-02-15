import { useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden bg-coffee-900"
    >
      {/* Video Background - Ultra Elegante */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.35) contrast(1.05)',
          }}
        >
          <source src="/assets/video/location.mp4" type="video/mp4" />
        </video>

        {/* Overlay Minimalista */}
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/40 via-coffee-900/50 to-coffee-900/70" />
      </div>

      {/* Contenido - Tipografía Dominante */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Subtítulo Elegante */}
          <motion.p
            className="text-cream-400/80 tracking-widest text-xs md:text-sm uppercase font-light mb-12 md:mb-16"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Café Especializado
          </motion.p>

          {/* Título Principal - Tipografía Pura */}
          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-cream-100 leading-none mb-8 md:mb-12 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Optimeals
          </motion.h1>

          {/* Descripción Minimalista */}
          <motion.p
            className="text-cream-300 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-12 md:mb-16 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Experiencia sensorial de café premium de tercera ola
          </motion.p>

          {/* CTA Minimalista */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Botón Primario */}
            <motion.a
              href="#menu"
              className="px-10 py-3 md:py-4 text-cream-900 bg-cream-300/90 hover:bg-cream-100 text-sm md:text-base font-light tracking-wide transition-colors duration-500 relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explorar</span>
              <motion.div
                className="absolute inset-0 border border-cream-300 opacity-0 group-hover:opacity-0"
                animate={{ opacity: [0, 0] }}
              />
            </motion.a>

            {/* Botón Secundario */}
            <motion.a
              href="#location"
              className="px-10 py-3 md:py-4 text-cream-300 border border-cream-400/50 hover:border-cream-300 text-sm md:text-base font-light tracking-wide transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ubicación
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Minimalista */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-5 h-5 text-cream-400/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
