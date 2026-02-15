import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Menu = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const menuUrl = 'https://menu.fu.do/optimealscafedeespecialidad/qr-menu?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnOXzchbzEK-xrUCi3-PuNslydxCrF2UNauOe-ROgbVRE5NlXB2FKZ6dv045A_aem_r0bKzYBj5PtQHBvSQ3P5gg';

  const menuCategories = [
    { title: 'Café Especializado', count: '8 opciones' },
    { title: 'Bebidas Complementarias', count: '6 opciones' },
    { title: 'Comida Saludable', count: '12 opciones' },
  ];

  return (
    <section
      id="menu"
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
            Nuestro Menú
          </motion.p>

          <motion.h2
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream-100 leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
          >
            Explorar
          </motion.h2>

          <motion.p
            className="text-cream-300/80 text-base md:text-lg font-light max-w-2xl tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Acceso digital a nuestro menú completo, actualizado y siempre disponible
          </motion.p>
        </motion.div>

        {/* Menu Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {menuCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + idx * 0.1 }}
            >
              <div className="group p-8 border border-cream-400/20 hover:border-cream-400/40 transition-colors duration-500">
                <h3 className="font-display text-xl md:text-2xl font-light text-cream-100 mb-3">
                  {cat.title}
                </h3>
                <p className="text-cream-400/60 text-sm font-light tracking-wide">
                  {cat.count}
                </p>
                <motion.div
                  className="w-8 h-px bg-cream-400/40 mt-6"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 md:py-5 text-cream-900 bg-cream-300/90 hover:bg-cream-100 text-sm md:text-base font-light tracking-wide transition-colors duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Menú Completo
          </motion.a>

          <motion.p
            className="text-cream-400/50 text-xs tracking-widest uppercase mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Powered by Fu.do
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;