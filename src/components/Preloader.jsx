import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2000;
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
          }, 400);
        }, 200);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-coffee-950"
        >
          {/* Minimalista Background */}
          <div className="absolute inset-0 bg-coffee-950" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-md px-8">
            {/* Brand Name */}
            <motion.h1
              className="font-display text-6xl md:text-7xl font-light text-cream-100 text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Optimeals
            </motion.h1>

            {/* Progress Bar */}
            <div className="w-full max-w-xs">
              <div className="h-px bg-cream-400/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-cream-400/60"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.05, ease: 'easeOut' }}
                />
              </div>

              {/* Progress Text */}
              <motion.p
                className="text-cream-400/50 text-xs tracking-widest uppercase text-center mt-6 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {progress}%
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
