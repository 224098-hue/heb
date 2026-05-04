import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Footer = ({ language, t }) => {
  return (
    <footer className="bg-gradient-to-b from-teal-900 to-teal-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <div className="border-t border-b border-white/20 py-8 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold leading-relaxed mb-8"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-900 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium"
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Coat_of_arms_of_Syria_%282024%29.svg/200px-Coat_of_arms_of_Syria_%282024%29.svg.png"
                alt="Syrian Arab Republic"
                className="h-16 w-auto brightness-0 invert"
              />
              <div className="text-sm text-left">
                <div className="font-semibold">
                  {language === 'ar' ? 'الجمهورية العربية السورية' : 'SYRIAN ARAB REPUBLIC'}
                </div>
              </div>
            </div>
            <p className="text-sm opacity-60">© 2025 {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;