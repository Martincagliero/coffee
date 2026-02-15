import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Product = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const products = [
    {
      id: 1,
      name: 'Single Origin',
      description: 'Cafés puros de múltiples orígenes. Cada taza cuenta la historia de su tierra.',
      price: '$18',
      image: '/assets/gallery/cafe2.jpg',
    },
    {
      id: 2,
      name: 'Blend Premium',
      description: 'Mezclas diseñadas por expertos. Balance perfecto de sabor y cuerpo.',
      price: '$16',
      image: '/assets/gallery/cafe3.jpg',
    },
    {
      id: 3,
      name: 'Reserve Edition',
      description: 'Lotes limitados. Selección reservada para paladares exigentes.',
      price: '$24',
      image: '/assets/gallery/cafe4.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      id="product"
      ref={ref}
      className="relative py-48 md:py-64 bg-black overflow-hidden"
    >
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl"
        >
          <p className="text-cream-500 text-sm tracking-widest uppercase font-light mb-4">
            Colección
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-tight">
            Cafés Artesanales
          </h2>
        </motion.div>
      </div>

      {/* Grid de Productos */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 container mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              {/* Card Container */}
              <motion.div
                className="relative overflow-hidden"
                whileHover={{
                  y: -20,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Imagen */}
                <div className="relative aspect-square overflow-hidden mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-2xl font-black text-white">
                      {product.name}
                    </h3>
                    <span className="text-cream-500 font-light text-lg">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-cream-400 text-sm leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Hover CTA */}
                  <motion.button
                    className="mt-6 px-6 py-3 border border-cream-500 text-cream-400 hover:text-cream-100 text-sm font-light tracking-widest uppercase transition-colors duration-300 w-full opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{
                      backgroundColor: 'rgba(200, 155, 117, 0.1)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Conocer más
                  </motion.button>
                </div>

                {/* Borde Sutil */}
                <motion.div
                  className="absolute inset-0 border border-cream-600/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Shadow Hover */}
              <motion.div
                className="absolute -inset-4 bg-amber-900/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Secundario */}
      <motion.div
        className="relative z-10 mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a
          href="#menu"
          className="inline-block px-12 py-4 border border-cream-500 text-cream-400 hover:text-cream-100 text-sm font-light tracking-widest uppercase transition-all duration-300 hover:border-cream-300"
        >
          Ver Todas las Opciones
        </a>
      </motion.div>
    </section>
  );
};

export default Product;
