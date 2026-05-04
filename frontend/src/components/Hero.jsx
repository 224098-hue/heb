import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ language, t }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern - faint */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Large faint eagle watermark in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
        <img
          src="/syrian-eagle-logo.svg"
          alt=""
          className="w-[80%] h-auto max-w-4xl"
        />
      </div>

      {/* Animated golden glow behind text */}
      <motion.div
        className="absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(217, 179, 89, 0.15) 0%, rgba(217, 179, 89, 0) 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -20, 0, 20, 0],
          scale: [1, 1.08, 1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
        >
          <motion.span 
            className="text-teal-700 block mb-1 sm:mb-2"
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.title1}
          </motion.span>
          <motion.span 
            className="text-red-900 block"
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero.title2}
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;