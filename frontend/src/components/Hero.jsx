import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ language, t }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-start overflow-hidden px-4 lg:px-12 pt-32 lg:pt-40">
      {/* Background with large geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Islamic/Arabic pattern */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='240' height='240' viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23BA9B70' stroke-width='2'%3E%3Cpath d='M120 40 L160 80 L120 120 L80 80 Z'/%3E%3Ccircle cx='120' cy='80' r='30'/%3E%3Cpath d='M120 160 L160 200 L120 240 L80 200 Z' transform='translate(0,-80)'/%3E%3Cpath d='M40 120 L80 160 L40 200 L0 160 Z'/%3E%3Cpath d='M200 120 L240 160 L200 200 L160 160 Z'/%3E%3Cpath d='M90 50 L130 90 L150 70'/%3E%3Cpath d='M150 90 L130 110 L110 90'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            backgroundPosition: 'center center',
          }}
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60\" />
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
          style={{ fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif" }}
        >
          <motion.span 
            className="block mb-2"
            style={{ color: '#BA9B70' }}
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.hero.title1}
          </motion.span>
          <motion.span 
            className="block"
            style={{ color: '#553B2E' }}
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