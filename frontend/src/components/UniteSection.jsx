import React from 'react';
import { motion } from 'framer-motion';
import { sectionImages } from '../utils/mockData';

const UniteSection = ({ language, t }) => {
  return (
    <section className={`py-20 px-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-[16/9] relative">
            <img
              src={sectionImages.uniteSection}
              alt="Syria Unite"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold mb-4 leading-relaxed"
            >
              {t.sections.uniteText}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm opacity-80"
            >
              {t.sections.uniteSubtitle}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniteSection;