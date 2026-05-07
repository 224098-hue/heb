import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Footer = ({ language, t }) => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <div className="border-t border-b border-white/10 py-8 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-bold leading-relaxed mb-8"
              style={{ color: '#b9a779' }}
            >
              {t.sections.footerTitle}
            </motion.h2>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full transition-all duration-200 font-semibold"
              style={{ backgroundColor: '#b9a779' }}
            >
              {t.sections.footerButton}
              {language === 'ar' ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <img
                src="/hebron-logo.png"
                alt="Hebron Reconstruction Committee"
                className="h-16 w-16 object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(16%) saturate(746%) hue-rotate(358deg) brightness(92%) contrast(88%)' }}
              />
              <div className={`text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="font-semibold text-gray-200">
                  {language === 'ar' ? 'الجمهورية العربية السورية' : 'SYRIAN ARAB REPUBLIC'}
                </div>
              </div>
            </div>
            <p className="text-sm opacity-50">© 2025 {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;