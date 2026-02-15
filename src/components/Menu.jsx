import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Menu = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [tiltData, setTiltData] = useState({ x: 0, y: 0 });

  const menuUrl = 'https://menu.fu.do/optimealscafedeespecialidad/qr-menu?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnOXzchbzEK-xrUCi3-PuNslydxCrF2UNauOe-ROgbVRE5NlXB2FKZ6dv045A_aem_r0bKzYBj5PtQHBvSQ3P5gg';

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientY - centerY) * 0.05;
    const y = (centerX - e.clientX) * 0.05;
    
    setTiltData({ x, y });
  };

  const handleMouseLeave = () => {
    setTiltData({ x: 0, y: 0 });
  };

  const menuItems = [
    {
      category: 'Café Especialidad',
      items: ['Espresso Puro', 'Cappuccino Artesanal', 'Latte Premium', 'Cold Brew'],
    },
    {
      category: 'Bebidas',
      items: ['Matcha Latte', 'Chocolate Belga', 'Infusiones Naturales', 'Smoothies'],
    },
    {
      category: 'Comida Saludable',
      items: ['Bowls Nutritivos', 'Sándwiches Gourmet', 'Ensaladas Frescas', 'Postres Saludables'],
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-coffee-900 to-coffee-800"
    >
      {/* Fondo decorativo */}
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

      {/* Elementos flotantes */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 rounded-full border border-coffee-500/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full border border-coffee-600/10"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
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
            ✦ Menú Digital ✦
          </motion.p>

          <motion.h2
            className="font-display text-5xl md:text-6xl font-bold mb-6"
            variants={textVariants}
            custom={1}
          >
            <span className="gradient-text">Descubre Nuestras Delicias</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-cream-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.p
            className="text-coffee-300 text-lg max-w-2xl mx-auto"
            variants={textVariants}
            custom={2}
          >
            Menú completo, actualizado y disponible en cualquier momento
          </motion.p>
        </motion.div>

        {/* Menu Preview Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {menuItems.map((menu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="bg-gradient-to-br from-coffee-700/40 to-coffee-600/20 backdrop-blur-sm border border-cream-400/10 rounded-2xl p-8 h-full hover:border-cream-400/30 transition-all duration-300 group relative"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <h3 className="font-display text-2xl font-bold text-cream-100 mb-6">
                  {menu.category}
                </h3>

                <ul className="space-y-3">
                  {menu.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-coffee-200 group-hover:text-cream-200 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cream-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-cream-400/0 group-hover:border-cream-400/20 transition-all duration-300"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(240, 218, 179, 0)',
                      '0 0 20px rgba(240, 218, 179, 0.1)',
                      '0 0 0px rgba(240, 218, 179, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                  style={{ pointerEvents: 'none' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Main Menu Card with 3D Tilt */}
        <motion.div
          className="relative max-w-2xl mx-auto perspective mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
              style={{
                rotateX: tiltData.x,
                rotateY: tiltData.y,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Menu Image Container */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/assets/menu/menu.jpg"
                  alt="Menú Café Optimeals"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    console.error('Error al cargar imagen del menú');
                    e.target.style.display = 'none';
                  }}
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Hover Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cream-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, -60],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Border Glow */}
              <motion.div
                className="absolute inset-0 border-2 border-cream-400/0 group-hover:border-cream-400/50 rounded-3xl transition-all duration-300"
                animate={{
                  boxShadow: [
                    'inset 0 0 20px rgba(240, 218, 179, 0.1), 0 0 40px rgba(240, 218, 179, 0)',
                    'inset 0 0 40px rgba(240, 218, 179, 0.2), 0 0 80px rgba(240, 218, 179, 0.2)',
                    'inset 0 0 20px rgba(240, 218, 179, 0.1), 0 0 40px rgba(240, 218, 179, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* CTA Badge */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 bg-coffee-900/80 backdrop-blur-sm px-6 py-4 rounded-full border border-cream-400/20 text-center transform group-hover:translate-y-0 translate-y-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span className="text-cream-300 font-semibold flex items-center justify-center gap-2">
                  Ver Menú Completo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.div>
            </motion.div>
          </motion.a>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.p
            className="text-coffee-300 mb-6"
            variants={textVariants}
            custom={0}
          >
            Acceso rápido a nuestro menú digital actualizado
          </motion.p>

          <motion.a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block"
            variants={textVariants}
            custom={1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative px-10 py-5 rounded-full font-semibold text-coffee-900 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cream-400 to-cream-300 rounded-full transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(240,218,179,0.7)]" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Menú Digital Completo en Fu.do
              </span>
            </div>
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #f0dab3 0%, #e5c68d 50%, #c89b75 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Menu;