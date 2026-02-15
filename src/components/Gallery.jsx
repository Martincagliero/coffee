import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  console.log('🖼️ Gallery rendering with images:', [
    '/assets/gallery/coffee-1.jpg',
    '/assets/gallery/coffee-2.jpg', 
    '/assets/menu/menu.jpg'
  ]);

  // Gallery images
  const images = [
    { id: 1, src: '/assets/gallery/coffee-1.jpg', alt: 'Café Premium', title: 'Espresso Artesanal' },
    { id: 2, src: '/assets/gallery/coffee-2.jpg', alt: 'Latte Art', title: 'Latte Art' },
    { id: 3, src: '/assets/gallery/coffee-3.jpg', alt: 'Cappuccino', title: 'Cappuccino' },
    { id: 4, src: '/assets/gallery/coffee-4.jpg', alt: 'Cold Brew', title: 'Cold Brew' },
    { id: 5, src: '/assets/gallery/food-1.jpg', alt: 'Comida Saludable', title: 'Bowl Saludable' },
    { id: 6, src: '/assets/gallery/food-2.jpg', alt: 'Desayuno', title: 'Desayuno Premium' },
    { id: 7, src: '/assets/gallery/food-3.jpg', alt: 'Snacks', title: 'Snacks Saludables' },
    { id: 8, src: '/assets/gallery/place-1.jpg', alt: 'Nuestro Espacio', title: 'Ambiente Acogedor' },
    { id: 9, src: '/assets/gallery/place-2.jpg', alt: 'Interior', title: 'Interior Moderno' },
    { id: 10, src: '/assets/gallery/place-3.jpg', alt: 'Barra', title: 'Barra de Café' },
    { id: 11, src: '/assets/gallery/place-4.jpg', alt: 'Zona de Estar', title: 'Zona Confortable' },
    { id: 12, src: '/assets/gallery/place-5.jpg', alt: 'Detalles', title: 'Detalles Únicos' },
    { id: 13, src: '/assets/gallery/place-6.jpg', alt: 'Espacio', title: 'Nuestro Lugar' },
    { id: 14, src: '/assets/gallery/place-7.jpg', alt: 'Cafetería', title: 'Café Optimeals' },
  ];

  useEffect(() => {
    const galleryItems = gsap.utils.toArray('.gallery-item');

    galleryItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=100',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotationX: -15,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-coffee-900 via-coffee-800 to-coffee-900"
    >
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-coffee-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-coffee-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-coffee-400 font-mono text-sm tracking-widest uppercase">
              // Nuestra Galería
            </span>
          </motion.div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text glow-effect">
              Momentos Perfectos
            </span>
          </h2>
          
          <p className="text-coffee-300 text-lg md:text-xl max-w-2xl mx-auto">
            Cada taza cuenta una historia, cada plato es una obra de arte
          </p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-coffee-500 to-transparent mx-auto mt-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-full bg-coffee-800">
                {/* Actual Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`);
                    e.target.style.display = 'none';
                  }}
                />

                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-transparent to-transparent 
                                opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Hover Particles Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-coffee-300 rounded-full"
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
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 border-2 border-coffee-500/0 group-hover:border-coffee-500/50 
                                rounded-2xl transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform 
                                translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <motion.h3
                    className="text-white font-display text-2xl font-bold mb-2 opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    {image.title}
                  </motion.h3>
                  
                  <motion.div
                    className="w-12 h-0.5 bg-coffee-400 opacity-0 group-hover:opacity-100 
                               transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"
                  />
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="https://www.instagram.com/cafeoptimeals/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-premium"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ver más en Instagram</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
