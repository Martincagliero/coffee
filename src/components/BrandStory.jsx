import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const BrandStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-coffee-900 to-coffee-800"
    >
      {/* Fondo con textura */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                #c89b75,
                #c89b75 10px,
                transparent 10px,
                transparent 20px
              )
            `,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Elemento flotante decorativo */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full border border-coffee-500/20"
        style={{ y, opacity }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.p
            className="text-cream-400 text-sm tracking-widest uppercase font-semibold mb-4"
            variants={textVariants}
            custom={0}
          >
            ✦ Nuestra Historia ✦
          </motion.p>

          <motion.h2
            className="font-display text-5xl md:text-6xl font-bold mb-6"
            variants={textVariants}
            custom={1}
          >
            <span className="gradient-text">Pasión por el Café Perfecto</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-cream-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text with reveal animation */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {[
              {
                title: 'Filosofía de Excelencia',
                text: 'En Café Optimeals, no solo servimos café. Creamos experiencias sensoriales donde cada taza cuenta una historia de dedicación, selección cuidadosa de granos premium y un proceso de tostado artesanal.',
              },
              {
                title: 'Tercera Ola de Café',
                text: 'Somos especialistas en café de tercera ola, enfocados en la calidad, origen y trazabilidad. Cada grano es seleccionado meticulosamente de productores que comparten nuestra visión.',
              },
              {
                title: 'Experiencia Integral',
                text: 'Combinamos el arte del café con comida saludable y un ambiente único. Nuestro espacio es diseñado para que cada visita sea memorable y especial.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group"
                variants={textVariants}
                custom={i}
              >
                <h3 className="text-xl font-semibold text-cream-300 mb-3 group-hover:text-cream-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-coffee-200 leading-relaxed">
                  {item.text}
                </p>
                <div className="mt-3 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-cream-400 to-transparent transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            className="relative h-96 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Floating card */}
            <motion.div
              className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl"
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Gradiente background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream-400/20 to-coffee-600/40 backdrop-blur-sm" />

              {/* Content */}
              <div className="relative inset-0 p-8 flex flex-col justify-between h-full">
                {/* Top decorative */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-300 text-sm tracking-widest uppercase font-semibold mb-2">
                      Café Premium
                    </p>
                    <h4 className="font-display text-3xl font-bold text-cream-100">
                      Optimeals
                    </h4>
                  </div>
                  <motion.div
                    className="w-12 h-12 rounded-full border-2 border-cream-400 flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-cream-300" />
                  </motion.div>
                </div>

                {/* Center stats */}
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-cream-300 text-sm uppercase tracking-widest mb-2">
                      Años de Experiencia
                    </p>
                    <p className="font-display text-5xl font-bold gradient-text">5+</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />
                  <div className="text-center">
                    <p className="text-cream-300 text-sm uppercase tracking-widest">
                      Clientes Satisfechos
                    </p>
                    <p className="font-display text-4xl font-bold text-cream-100 mt-1">
                      1000+
                    </p>
                  </div>
                </div>

                {/* Bottom badge */}
                <motion.div
                  className="bg-coffee-700/60 backdrop-blur-sm px-4 py-3 rounded-full text-center"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(240, 218, 179, 0.2)',
                      '0 0 40px rgba(240, 218, 179, 0.4)',
                      '0 0 20px rgba(240, 218, 179, 0.2)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-cream-300 font-semibold text-sm">
                    Café Artesanal Premium
                  </p>
                </motion.div>
              </div>

              {/* Border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-cream-400/20 pointer-events-none"
                animate={{
                  boxShadow: [
                    'inset 0 0 20px rgba(240, 218, 179, 0.1)',
                    'inset 0 0 40px rgba(240, 218, 179, 0.2)',
                    'inset 0 0 20px rgba(240, 218, 179, 0.1)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #f0dab3 0%, #e5c68d 50%, #c89b75 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default BrandStory;