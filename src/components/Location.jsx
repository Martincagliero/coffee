import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Location = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const address = 'Constitución 665, X5800 Río Cuarto, Córdoba';
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.1234567890!2d-64.3504567!3d-33.1267890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d1d1d1d1d1d1d1%3A0x0!2sCaf%C3%A9%20Optimeals!5e0!3m2!1ses!2sar!4v1234567890`;

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative py-48 md:py-64 px-4 md:px-8 overflow-hidden bg-coffee-950"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900 to-coffee-950" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-32 md:mb-48"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-cream-400/70 tracking-widest text-xs md:text-sm uppercase font-light mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Ubicación
          </motion.p>

          <motion.h2
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream-100 leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
          >
            Visítanos
          </motion.h2>

          <motion.p
            className="text-cream-300/80 text-base md:text-lg font-light max-w-2xl tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Encuentra nuestro café y descubre la experiencia sensorial
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Maps */}
          <motion.div
            className="relative w-full aspect-square rounded-sm overflow-hidden bg-coffee-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div>
              <p className="text-cream-400/60 tracking-widest text-xs uppercase font-light mb-3">
                Dirección
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-cream-100">
                {address}
              </h3>
            </div>

            <motion.div
              className="w-12 h-px bg-cream-400/40"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            <div className="space-y-6">
              <div>
                <p className="text-cream-400/60 tracking-widest text-xs uppercase font-light mb-2">
                  Horarios
                </p>
                <p className="text-cream-300 text-base font-light">
                  Lunes a Domingo: 8:00 - 20:00
                </p>
              </div>

              <div>
                <p className="text-cream-400/60 tracking-widest text-xs uppercase font-light mb-2">
                  Conecta con Nosotros
                </p>
                <motion.a
                  href="https://www.instagram.com/cafeoptimeals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-300 hover:text-cream-100 font-light transition-colors"
                >
                  @cafeoptimeals
                </motion.a>
              </div>
            </div>

            <motion.a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3 md:py-4 text-cream-900 bg-cream-300/90 hover:bg-cream-100 text-sm md:text-base font-light tracking-wide transition-colors duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Obtener Indicaciones
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;