import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.img
            src="/logo-original.jpg"
            alt="لجنة إعمار الخليل"
            className="h-20 w-auto mx-auto mb-8 object-contain"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-2xl font-bold mb-4"
          >
            جاري التحميل
          </motion.p>
          
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ 
                width: `${progress}%`,
                backgroundColor: '#b9a779'
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Progress Number */}
          <motion.p
            className="text-white/60 text-lg mt-4"
            key={progress}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
