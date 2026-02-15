import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const galleryBlocks = [
    {
      id: 1,
      image: '/assets/gallery/coffee-1.jpg',
      title: 'Ritual Perfecto',
      description: 'Espresso artesanal de molienda fina',
      align: 'left',
    },
    {
      id: 2,
      image: '/assets/gallery/place-1.jpg',
      title: 'Nuestro Espacio',
      description: 'Ambiente acogedor diseñado para la experiencia',
      align: 'right',
    },
    {
      id: 3,
      image: '/assets/gallery/food-1.jpg',
      title: 'Nutrición Premium',
      description: 'Comida saludable que complementa tu café',
      align: 'left',
    },
    {
      id: 4,
      image: '/assets/gallery/place-5.jpg',
      title: 'Detalles Únicos',
      description: 'Cada rincón cuenta una historia',
      align: 'right',
    },
  ];


  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-4 md:px-8 overflow-hidden bg-coffee-950"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900 to-coffee-950" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-24 md:mb-32"
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
            Galería
          </motion.p>
          
          <motion.h2
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream-100 leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Nuestro Arte
          </motion.h2>
          
          <motion.p
            className="text-cream-300/80 text-base md:text-lg font-light max-w-2xl tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Cada momento capturado en nuestra cafetería cuenta la historia de pasión y dedicación
          </motion.p>
        </motion.div>

        {/* Gallery Blocks */}
        <div className="space-y-32 md:space-y-40">
          {galleryBlocks.map((block, index) => (
            <motion.div
              key={block.id}
              className={`flex flex-col ${block.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} 
                          items-center gap-8 md:gap-16 lg:gap-24`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.15 }}
            >
              {/* Image */}
              <motion.div
                className="w-full md:w-1/2 aspect-[3/4] overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: index * 0.15 }}
                />
              </motion.div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: block.align === 'left' ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.15 + 0.2 }}
                >
                  <h3 className="font-display text-3xl md:text-5xl font-light text-cream-100 mb-4 leading-tight">
                    {block.title}
                  </h3>
                  
                  <p className="text-cream-400/80 text-base md:text-lg font-light mb-8 tracking-wide leading-relaxed">
                    {block.description}
                  </p>

                  <motion.div
                    className="w-12 h-px bg-cream-400/40"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Link */}
        <motion.div
          className="mt-32 md:mt-40 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="https://www.instagram.com/cafeoptimeals/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 md:py-4 text-cream-300 border border-cream-400/40 hover:border-cream-300 text-sm md:text-base font-light tracking-wide transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explorar más
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
