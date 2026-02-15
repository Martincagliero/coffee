import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds
    const steps = 100;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-coffee-900 overflow-hidden"
        >
          {/* Fondo cinematográfico */}
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-950" />

          {/* Efecto grano sutil */}
          <motion.div
            className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
            animate={{ opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '400px 400px',
            }}
          />

          {/* Contenido */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            {/* Logo / Marca */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Coffee Bean Icon */}
              <motion.div
                className="w-24 h-24 mx-auto mb-6 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="relative w-20 h-20">
                  {/* Outer circle glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cream-400"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      boxShadow: [
                        '0 0 20px rgba(240, 218, 179, 0.4)',
                        '0 0 40px rgba(240, 218, 179, 0.7)',
                        '0 0 20px rgba(240, 218, 179, 0.4)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Coffee bean shape */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M50 10 Q70 30 70 50 Q70 70 50 85 Q30 70 30 50 Q30 30 50 10 Z"
                      fill="url(#beanGradient)"
                      stroke="#e5c68d"
                      strokeWidth="1.5"
                      animate={{
                        filter: [
                          'drop-shadow(0 0 10px rgba(240, 218, 179, 0.4))',
                          'drop-shadow(0 0 20px rgba(240, 218, 179, 0.6))',
                          'drop-shadow(0 0 10px rgba(240, 218, 179, 0.4))',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <defs>
                      <linearGradient id="beanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c89b75" />
                        <stop offset="50%" stopColor="#a0653f" />
                        <stop offset="100%" stopColor="#7d4e31" />
                      </linearGradient>
                    </defs>

                    {/* Bean split line */}
                    <motion.path
                      d="M50 15 Q50 50 50 85"
                      stroke="#e5c68d"
                      strokeWidth="0.8"
                      opacity="0.6"
                      animate={{ strokeDashoffset: [100, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      strokeDasharray="100"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Brand Name */}
              <motion.h1
                className="font-display text-5xl md:text-6xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="gradient-preloader">Café</span>
                <br />
                <span className="gradient-preloader">Optimeals</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-coffee-300 text-sm tracking-widest uppercase mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Premium Coffee Experience
              </motion.p>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cream-400 to-transparent mb-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            {/* Progress Bar Container */}
            <div className="w-64 h-1 bg-coffee-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cream-400 via-coffee-400 to-cream-300 rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              />
            </div>

            {/* Progress Text */}
            <motion.p
              className="text-coffee-300 text-sm mt-4 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {progress}%
            </motion.p>

            {/* Loading Dots */}
            <div className="flex gap-2 mt-8">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #f0dab3 0%, #e5c68d 100%)',
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </div>

          <style>{`
            .gradient-preloader {
              background: linear-gradient(135deg, #f0dab3 0%, #e5c68d 50%, #c89b75 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              filter: drop-shadow(0 0 15px rgba(240, 218, 179, 0.3));
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
