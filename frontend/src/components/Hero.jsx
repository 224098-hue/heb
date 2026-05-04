import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ language, t }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden px-4 lg:px-12">
      {/* Background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Large geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0L120 60L60 120L0 60Z' fill='none' stroke='%23C9A030' stroke-width='0.5'/%3E%3Ccircle cx='60' cy='60' r='40' fill='none' stroke='%23C9A030' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60" />
      </div>

      {/* Large faint eagle watermark in background - positioned lower */}
      <div className="absolute inset-0 flex items-end justify-center pb-24 lg:pb-32 opacity-[0.04]">
        <img
          src="/syrian-eagle-official.png"
          alt=""
          className="w-[70%] h-auto max-w-2xl object-contain"
        />
      </div>

      {/* Animated golden glow behind text */}
      <motion.div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(201, 160, 48, 0.12) 0%, rgba(201, 160, 48, 0) 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [-50, 30, -50],
          y: [-30, 20, -30],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content - Aligned to right for Arabic */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto ${language === 'ar' ? 'text-right' : 'text-left'} mt-20 lg:mt-0`}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
        >
          <motion.span 
            className="text-teal-700 block mb-1"
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.hero.title1}
          </motion.span>
          <motion.span 
            className="text-red-900 block"
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t.hero.title2}
          </motion.span>
        </motion.h1>
      </div>

      {/* Scroll indicator arrow - positioned lower and to the right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className={`absolute bottom-20 lg:bottom-32 z-10 ${language === 'ar' ? 'left-8 lg:left-16' : 'right-8 lg:right-16'}`}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <ChevronDown className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* First image preview at bottom - visible on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10 lg:hidden"
      >
        <div className="w-full px-4 pb-4">
          <div className="relative rounded-t-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1700387340416-2e2ee7690191"
              alt="Syrian Heritage"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className={`absolute bottom-4 ${language === 'ar' ? 'right-4' : 'left-4'}`}>
              <p className="text-white font-bold text-lg">{t.cards.brandStory}</p>
              <p className="text-white/80 text-sm">{t.cards.brandStorySubtitle}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;