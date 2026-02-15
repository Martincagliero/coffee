import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Story = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="story"
      ref={ref}
      className="relative py-48 md:py-64 bg-black overflow-hidden"
    >
      {/* Fondo Ambiental */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Imagen con Overlay */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-square overflow-hidden group"
          >
            <img
              src="/assets/gallery/cafe1.jpg"
              alt="Historia de Optimeals"
              className="w-full h-full object-cover"
            />
            {/* Overlay Oscuro Dramático */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.6 }}
            />

            {/* Punto de Luz Sutil */}
            <motion.div
              className="absolute top-12 right-12 w-24 h-24 bg-amber-600/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <p className="text-cream-500 text-sm tracking-widest uppercase font-light">
                Nuestra Historia
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-tight">
                Pasión por el Café
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-cream-300 text-lg leading-relaxed font-light"
            >
              Nacimos con la pasión de compartir los mejores cafés del mundo. Cada grano cuenta una historia de montañas lejanas, cultivos artesanales y precisión en cada etapa.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-cream-400 text-base leading-relaxed font-light"
            >
              Trabajamos directamente con productores pequeños, asegurando trazabilidad total y compensación justa. Porque el café premium es también coffee con propósito.
            </motion.p>

            {/* CTA Subtle */}
            <motion.a
              href="#experience"
              variants={itemVariants}
              className="inline-block mt-8 text-cream-400 hover:text-cream-200 text-sm tracking-widest uppercase font-light transition-colors duration-300 pb-2 border-b border-transparent hover:border-cream-500"
              whileHover={{ x: 5 }}
            >
              Conoce el Proceso →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
