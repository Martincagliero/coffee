import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: 'Cata Sensorial',
      description: 'Descubre los matices y aromas únicos de cada grano en nuestras sesiones de cata profesional.',
      icon: '☕',
    },
    {
      id: 2,
      title: 'Tueste Artesanal',
      description: 'Observa nuestro proceso de tueste en vivo. Arte y ciencia en cada lote.',
      icon: '🔥',
    },
    {
      id: 3,
      title: 'Trazabilidad Total',
      description: 'Conoce el origen exacto de tu café. Del grano a tu taza, 100% transparencia.',
      icon: '🌍',
    },
    {
      id: 4,
      title: 'Espacio Premium',
      description: 'Relájate en nuestro lounge minimalista. Diseño y confort de primera categoría.',
      icon: '✨',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-48 md:py-64 bg-gradient-to-b from-black to-[#0f0f0f] overflow-hidden"
    >
      {/* Fondo Ambiental */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <p className="text-cream-500 text-sm tracking-widest uppercase font-light mb-4">
            Experiencia Optimeals
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Más que Café
          </h2>
          <p className="text-cream-400 text-lg font-light">
            Una experiencia multisensorial diseñada para apreciar la excelencia
          </p>
        </motion.div>

        {/* Grid de Experiencias */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group"
            >
              {/* Card */}
              <motion.div
                className="relative p-8 border border-cream-900/20 bg-cream-950/5 hover:bg-cream-950/10 transition-all duration-500"
                whileHover={{
                  borderColor: 'rgba(200, 155, 117, 0.3)',
                  backgroundColor: 'rgba(200, 155, 117, 0.05)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {exp.icon}
                </motion.div>

                {/* Título */}
                <h3 className="font-display text-2xl font-black text-white mb-4">
                  {exp.title}
                </h3>

                {/* Descripción */}
                <p className="text-cream-400 text-base font-light leading-relaxed">
                  {exp.description}
                </p>

                {/* Línea Decorativa Hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-700/50 to-transparent"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-24 h-px bg-gradient-to-r from-transparent via-cream-900/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Texto Final */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-cream-400 text-lg font-light mb-8">
            Cada taza es una invitación a descubrir nuevo mundo de sabores
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-12 py-4 border border-cream-500 text-cream-400 hover:text-cream-100 text-sm font-light tracking-widest uppercase transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Reservar Experiencia
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
