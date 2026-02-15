import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Location = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const mapY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const address = 'Constitución 665, X5800 Río Cuarto, Córdoba';
  const phone = '+54 358 XXXX-XXXX';
  const email = 'info@cafeoptimeals.com';
  const hours = 'Lun-Dom: 8:00 - 20:00';
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.1234567890!2d-64.3504567!3d-33.1267890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d1d1d1d1d1d1d1%3A0x0!2sCaf%C3%A9%20Optimeals!5e0!3m2!1ses!2sar!4v1234567890`;

  const contactItems = [
    {
      icon: '📍',
      label: 'Dirección',
      value: address,
      action: 'Cómo llegar',
      link: `https://maps.google.com/?q=${encodeURIComponent(address)}`,
    },
    {
      icon: '📞',
      label: 'Teléfono',
      value: phone,
      action: 'Llamar',
      link: `tel:${phone.replace(/\s/g, '')}`,
    },
    {
      icon: '✉️',
      label: 'Email',
      value: email,
      action: 'Escribir',
      link: `mailto:${email}`,
    },
    {
      icon: '⏰',
      label: 'Horarios',
      value: hours,
      action: 'Ver más',
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
      id="location"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-coffee-800 to-coffee-900"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(182, 127, 86, 0.4) 0%, transparent 50%)`,
            backgroundPosition: 'center',
            backgroundSize: '400px 400px',
          }}
        />
      </div>

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
            ✦ Visítanos ✦
          </motion.p>

          <motion.h2
            className="font-display text-5xl md:text-6xl font-bold mb-6"
            variants={textVariants}
            custom={1}
          >
            <span className="gradient-text">Ubicación Premium</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-cream-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Maps */}
          <motion.div
            className="relative h-96 lg:h-full rounded-3xl overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            style={{ y: mapY }}
          >
            {/* Map Container */}
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10"
            />

            {/* Overlay superior */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none z-20" />

            {/* Border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-cream-400/20 pointer-events-none z-30"
              animate={{
                boxShadow: [
                  'inset 0 0 20px rgba(240, 218, 179, 0.1)',
                  'inset 0 0 40px rgba(240, 218, 179, 0.2)',
                  'inset 0 0 20px rgba(240, 218, 179, 0.1)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none z-20"
            />
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {/* Contact Cards */}
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block ${!item.link ? 'pointer-events-none' : ''}`}
                variants={textVariants}
                custom={index}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-coffee-700/40 to-coffee-600/20 backdrop-blur-sm border border-cream-400/10 rounded-2xl p-6 transition-all duration-300 group-hover:border-cream-400/30 group-hover:bg-coffee-700/60"
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
                    delay: index * 0.2,
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-cream-300 text-sm uppercase tracking-widest font-semibold mb-2">
                        {item.icon} {item.label}
                      </p>
                      <p className="text-white text-lg font-light leading-relaxed">
                        {item.value}
                      </p>
                    </div>

                    {item.action && (
                      <motion.button
                        className="mt-1 px-4 py-2 rounded-lg bg-cream-400/10 border border-cream-400/30 text-cream-300 text-sm font-semibold whitespace-nowrap group-hover:bg-cream-400/20 group-hover:text-cream-100 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.action}
                        <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </motion.a>
            ))}

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-cream-400/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* CTA Button */}
            <motion.a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full"
              variants={textVariants}
              custom={4}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative px-6 py-4 rounded-full font-semibold text-coffee-900 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cream-400 to-cream-300 rounded-full transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(240,218,179,0.6)]" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Obtener Indicaciones
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </motion.a>

            {/* Social Proof */}
            <motion.div
              className="pt-6 border-t border-cream-400/10"
              variants={textVariants}
              custom={5}
            >
              <p className="text-coffee-300 text-sm mb-4">Síguenos en Redes Sociales</p>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', icon: '📱', link: 'https://instagram.com/cafeoptimeals' },
                  { name: 'Facebook', icon: '👥', link: '#' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-coffee-600/40 border border-cream-400/20 flex items-center justify-center text-lg hover:bg-coffee-600/60 hover:border-cream-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
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

export default Location;