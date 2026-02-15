import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-48 md:py-64 px-4 md:px-8 overflow-hidden bg-coffee-950"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900 to-coffee-950" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-32 md:mb-48"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-cream-400/60 tracking-widest text-xs md:text-sm uppercase font-light mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Galería Visual
          </motion.p>
          
          <motion.h2
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-cream-100 leading-none mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Cada Momento
          </motion.h2>
          
          <motion.p
            className="text-cream-400/70 text-base md:text-lg font-light max-w-2xl tracking-wide"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Una colección editorial de momentos que define nuestra marca
          </motion.p>
        </motion.div>

        {/* SECCIÓN 1: Imagen Dominante + Texto Pequeño */}
        <motion.div
          className="grid grid-cols-12 gap-8 md:gap-12 items-center mb-32 md:mb-48"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Imagen Grande 70% */}
          <div className="col-span-12 md:col-span-8">
            <motion.div
              className="aspect-video overflow-hidden bg-coffee-800"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.1 }}
            >
              <img
                src="/assets/gallery/place-2.jpg"
                alt="Interior Premium"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Texto 30% */}
          <motion.div
            className="col-span-12 md:col-span-4 md:pl-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-light text-cream-100 mb-6">
              El Espacio
            </h3>
            <p className="text-cream-400/80 text-base font-light leading-relaxed tracking-wide">
              Un ambiente cuidadosamente diseñado para la conversación, el trabajo y la contemplación.
            </p>
            <motion.div
              className="w-8 h-px bg-cream-400/40 mt-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cream-400/20 to-transparent mb-32 md:mb-48"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* SECCIÓN 2: Imagen Vertical Izquierda + Texto Narrativo Derecha */}
        <motion.div
          className="grid grid-cols-12 gap-8 md:gap-16 items-center mb-32 md:mb-48"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {/* Imagen Vertical 40% */}
          <div className="col-span-12 md:col-span-4 order-2 md:order-1">
            <motion.div
              className="aspect-[3/4] overflow-hidden bg-coffee-800"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <img
                src="/assets/gallery/coffee-3.jpg"
                alt="Detalle de Café"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Texto Narrativo 60% */}
          <motion.div
            className="col-span-12 md:col-span-8 order-1 md:order-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-light text-cream-100 mb-8">
              El Ritual del Café
            </h3>
            <p className="text-cream-400/80 text-base font-light leading-relaxed tracking-wide mb-6">
              Cada taza es el resultado de un proceso meticuloso. Desde la selección de granos hasta la extracción perfecta, cada paso cuenta.
            </p>
            <p className="text-cream-400/70 text-sm font-light leading-relaxed tracking-wide">
              Nuestros baristas entienden el café no como una bebida, sino como una forma de expresión. Cada taza es única.
            </p>
            <motion.div
              className="w-8 h-px bg-cream-400/40 mt-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
            />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cream-400/20 to-transparent mb-32 md:mb-48"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* SECCIÓN 3: Imagen Full Width */}
        <motion.div
          className="mb-32 md:mb-48"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="aspect-[16/9] overflow-hidden bg-coffee-800"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.25 }}
          >
            <img
              src="/assets/gallery/place-4.jpg"
              alt="Panorámica del Café"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* SECCIÓN 4: Imagen Pequeña + Mucho Aire */}
        <motion.div
          className="max-w-2xl ml-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <motion.div
            className="aspect-square overflow-hidden bg-coffee-800 mb-12"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <img
              src="/assets/gallery/food-2.jpg"
              alt="Arte de Comida"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.35 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-light text-cream-100">
              La Propuesta
            </h3>
            <p className="text-cream-400/80 text-base font-light leading-relaxed tracking-wide">
              Comida que complementa. Experiencia que perdura.
            </p>
          </motion.div>
        </motion.div>

        {/* Final CTA - Mucho Espacio */}
        <motion.div
          className="mt-48 md:mt-64 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.a
            href="https://www.instagram.com/cafeoptimeals/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 md:py-4 text-cream-300 border border-cream-400/40 hover:border-cream-300 text-sm md:text-base font-light tracking-wide transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Más en Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
