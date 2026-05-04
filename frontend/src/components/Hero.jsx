import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ language, t }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-start overflow-hidden px-4 lg:px-12 pt-32 lg:pt-40">
      {/* Background with large geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Large visible geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A030' stroke-width='1.5'%3E%3Cpath d='M100 20 L180 100 L100 180 L20 100 Z'/%3E%3Ccircle cx='100' cy='100' r='60'/%3E%3Ccircle cx='100' cy='100' r='40'/%3E%3Cpath d='M100 40 L160 100 L100 160 L40 100 Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            backgroundPosition: 'center center',
          }}
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
      </div>

      {/* Large faint eagle watermark - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-0 opacity-[0.05] pointer-events-none">
        <img
          src="/syrian-eagle-official.png"
          alt=""
          className="w-full h-auto max-w-3xl object-contain"
        />
      </div>

      {/* Content - Aligned to right for Arabic, positioned higher */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          <motion.span 
            className="text-teal-700 block mb-2"
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

      {/* Scroll indicator arrow - positioned above the eagle image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className={`absolute bottom-[280px] md:bottom-[320px] lg:bottom-[380px] z-20 ${language === 'ar' ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <ChevronDown className="w-10 h-10 lg:w-12 lg:h-12 text-gray-700" strokeWidth={2} />
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
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className={`absolute bottom-5 ${language === 'ar' ? 'right-5' : 'left-5'}`}>
              <p className="text-white font-bold text-xl mb-1">{t.cards.brandStory}</p>
              <p className="text-white/90 text-sm">{t.cards.brandStorySubtitle}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;