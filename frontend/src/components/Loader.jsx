import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ASSETS = [
  '/logo-optimized.webp',
  '/old-town.webp',
  '/pattern-original.webp',
  '/pattern.webp',
  '/logo-full.webp',
];

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loaded = 0;
    let finished = false;
    const total = ASSETS.length;

    const finish = () => {
      if (finished) return;
      finished = true;
      onLoadComplete();
    };

    const preloadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          setProgress(Math.round((loaded / total) * 100));
          resolve();
        };
        img.onerror = () => {
          loaded++;
          setProgress(Math.round((loaded / total) * 100));
          resolve();
        };
        img.src = src;
      });

    Promise.all(ASSETS.map(preloadImage)).then(() => {
      setTimeout(finish, 300);
    });

    // Hard cap so the loader never blocks longer than 1.8s
    const failsafe = setTimeout(() => {
      setProgress(100);
      finish();
    }, 1800);

    return () => clearTimeout(failsafe);
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
          className="text-center flex flex-col items-center"
        >
          {/* الشعار بدائرة — مع crop للجزء البني فقط */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="
              w-20 h-20
              lg:w-28 lg:h-28
              rounded-full
              border border-white/10
              bg-white/5
              flex items-center justify-center
              mb-6 lg:mb-8
              overflow-hidden
            "
          >
            
            <img
              src="/logo-optimized.webp"
              alt="لجنة إعمار الخليل"
              className="
                h-full w-auto
                object-cover object-right
                scale-110
              "
            />
          </motion.div>

          {/* الاسم */}
          <p className="text-white text-lg lg:text-2xl font-medium mb-1 lg:mb-2">
            لجنة إعمار الخليل
          </p>
          <p className="text-white/40 text-sm lg:text-base mb-6 lg:mb-8">
            Hebron Reconstruction Committee
          </p>

          {/* Progress Bar */}
          <div className="w-44 lg:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: '#b9a779',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* النسبة */}
          <p className="text-white/40 text-sm lg:text-base">{progress}%</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;