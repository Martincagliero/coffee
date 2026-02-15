import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Fondo Radial Sutil */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a1410] via-black to-black opacity-90" />

      {/* Luz Ambiental Volumétrica */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />

      {/* Contenido Principal */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Grid de Granos Flotantes - Background */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-700 rounded-full"
              style={{
                left: `${20 + (i % 4) * 25}%`,
                top: `${30 + Math.floor(i / 4) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
                filter: i % 2 === 0 ? ['blur(0px)', 'blur(1px)', 'blur(0px)'] : 'blur(0px)',
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Centro: Bolsa de Café 3D */}
        <motion.div
          className="relative mb-12 perspective"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            rotateX: mousePosition.y * 5,
            rotateY: mousePosition.x * 5,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Sombra Suave */}
          <motion.div
            className="absolute top-[120%] left-1/2 transform -translate-x-1/2 w-48 h-12 bg-black rounded-full blur-2xl opacity-30"
            animate={{
              scaleX: [1, 1.3, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bolsa SVG Estilizada */}
          <svg
            viewBox="0 0 200 280"
            className="w-48 h-auto drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8)) drop-shadow(40px 20px 60px rgba(180, 100, 20, 0.2))',
            }}
          >
            {/* Gradiente de Iluminación */}
            <defs>
              <linearGradient id="bagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a0653f" />
                <stop offset="50%" stopColor="#7d4e31" />
                <stop offset="100%" stopColor="#5a3a23" />
              </linearGradient>
              <radialGradient id="highlight" cx="30%" cy="20%">
                <stop offset="0%" stopColor="#c89b75" />
                <stop offset="100%" stopColor="rgba(200, 155, 117, 0)" />
              </radialGradient>
            </defs>

            {/* Bolsa Principal */}
            <motion.path
              d="M 50 40 Q 50 30 60 30 L 140 30 Q 150 30 150 40 L 150 200 Q 150 220 140 230 L 60 230 Q 50 220 50 200 Z"
              fill="url(#bagGradient)"
              stroke="#3d2817"
              strokeWidth="1"
              animate={{
                d: ["M 50 40 Q 50 30 60 30 L 140 30 Q 150 30 150 40 L 150 200 Q 150 220 140 230 L 60 230 Q 50 220 50 200 Z", 
                    "M 48 42 Q 48 32 58 32 L 142 32 Q 152 32 152 42 L 152 200 Q 152 220 142 230 L 58 230 Q 48 220 48 200 Z",
                    "M 50 40 Q 50 30 60 30 L 140 30 Q 150 30 150 40 L 150 200 Q 150 220 140 230 L 60 230 Q 50 220 50 200 Z"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Highlight Brillante */}
            <ellipse cx="80" cy="60" rx="25" ry="35" fill="url(#highlight)" opacity="0.8" />

            {/* Textura - Granos Visibles */}
            <motion.text
              x="100"
              y="140"
              textAnchor="middle"
              fontSize="12"
              fill="#5a3a23"
              opacity="0.6"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              OPTIMEALS
            </motion.text>

            {/* Sello/Logo en la Bolsa */}
            <circle cx="100" cy="100" r="20" fill="none" stroke="#c89b75" strokeWidth="1" opacity="0.5" />
            <motion.circle
              cx="100"
              cy="100"
              r="20"
              fill="none"
              stroke="#c89b75"
              strokeWidth="1"
              opacity="0.3"
              animate={{ r: [20, 24, 20] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
        </motion.div>

        {/* Texto - Editorial */}
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <motion.h1
            className="font-display text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Optimeals
          </motion.h1>

          <motion.p
            className="text-cream-400 text-sm md:text-base tracking-widest uppercase font-light mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Café Artesanal de Especialidad
          </motion.p>

          <motion.p
            className="text-cream-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Experiencia sensorial. Tercera ola. Precision craft.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#story"
            className="inline-block px-12 py-4 border border-cream-500 text-cream-400 hover:text-cream-100 text-base font-light tracking-widest uppercase transition-all duration-500 relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <span>Descubrir</span>
            <motion.div
              className="absolute inset-0 border border-cream-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                boxShadow: ['0 0 0px rgba(200, 155, 117, 0)', '0 0 20px rgba(200, 155, 117, 0.3)', '0 0 0px rgba(200, 155, 117, 0)'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-5 h-8 text-cream-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, rgba(26, 20, 16, 0.5) 0%, rgba(0, 0, 0, 1) 100%);
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
