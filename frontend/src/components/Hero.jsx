import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ language, t }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-start overflow-hidden px-4 lg:px-12 pt-32 lg:pt-40">
      {/* Background with pattern image on left side */}
      <div className="absolute inset-0 bg-white">
        {/* Pattern background - positioned on left, semi-transparent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/3 opacity-[0.15]"
          style={{
            backgroundImage: `url('/pattern-original.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            backgroundRepeat: 'repeat-y',
          }}
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/70 to-white" />
      </div>

      {/* Large faint eagle watermark - REMOVED */}

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
            className="block mb-4 lg:mb-6"
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

      {/* Scroll indicator arrow - positioned at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20"
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
              src="https://customer-assets.emergentagent.com/job_syrian-ui-replica/artifacts/tved29br_IMG_0005.HEIC.heif"
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