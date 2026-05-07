import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = ({ language, t }) => {
  return (
    <section className={`py-20 px-6 bg-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="border-t border-b border-gray-300 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-3xl md:text-5xl font-bold leading-relaxed md:leading-loose ${language === 'ar' ? 'text-right' : 'text-left'} text-gray-900`}
            style={{ lineHeight: '1.9' }}
          >
            {t.sections.manifesto}
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;