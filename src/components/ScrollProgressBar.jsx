import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-coffee-500 via-coffee-400 
               to-coffee-600 origin-left z-[9998]"
      style={{
        scaleX: 0,
      }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: false }}
    >
      <motion.div
        className="absolute inset-0 shimmer-bg"
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
};

export default ScrollProgressBar;
