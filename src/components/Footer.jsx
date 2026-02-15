import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Historia', href: '#story' },
      { label: 'Café', href: '#product' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Ubicación', href: '#location' },
    ],
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/cafeoptimeals/', icon: 'instagram' },
      { label: 'WhatsApp', href: 'https://wa.me/52XXXXXXXXXX', icon: 'whatsapp' },
    ],
  };

  return (
    <footer className="relative bg-black text-cream-400 overflow-hidden">
      {/* Top Border - Sutil */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-900/20 to-transparent" />

      {/* Contenido Principal */}
      <div className="relative z-10">
        {/* Grid Principal */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
            {/* Marca */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <h3 className="font-display text-4xl font-black text-white">
                Optimeals
              </h3>
              <p className="text-cream-500 text-base leading-relaxed font-light max-w-sm">
                Café artesanal de especialidad. Tercera ola. Experiencia sensorial premium.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-cream-900/40 flex items-center justify-center text-cream-500 hover:text-cream-200 hover:border-cream-500/50 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgba(200, 155, 117, 0.05)',
                    }}
                  >
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      </svg>
                    )}
                    {social.icon === 'whatsapp' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enlaces - Columna 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-display text-sm font-black text-white uppercase tracking-widest">
                Navegación
              </h4>
              <ul className="space-y-3">
                {footerLinks.main.map((link, index) => (
                  <motion.li key={index}>
                    <a
                      href={link.href}
                      className="text-cream-500 hover:text-cream-300 text-sm font-light transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Enlaces - Columna 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-display text-sm font-black text-white uppercase tracking-widest">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-cream-500 hover:text-cream-300 text-sm font-light transition-colors duration-300"
                  >
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream-500 hover:text-cream-300 text-sm font-light transition-colors duration-300"
                  >
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream-500 hover:text-cream-300 text-sm font-light transition-colors duration-300"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cream-900/20 to-transparent my-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* Copyright */}
            <p className="text-cream-600 text-sm font-light">
              © {currentYear} Optimeals. Todos los derechos reservados.
            </p>

            {/* Credit */}
            <p className="text-cream-600 text-sm font-light">
              Diseñado con precisión y pasión por el café
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
