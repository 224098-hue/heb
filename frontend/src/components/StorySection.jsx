import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ← أضف هذا

const StorySection = ({ language, t }) => {
  const navigate = useNavigate(); // ← أضف هذا

  return (
    <section id="story" className={`py-20 px-6 bg-gray-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Syria is the Heart */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            <div className="border-t-2 border-gray-300 pt-8 mb-8" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.sections.heartTitle}</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{t.sections.heartText}</p>
          </motion.div>

          {/* Our Story to the World */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            <div className="border-t-2 border-gray-300 pt-8 mb-8" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.sections.storyTitle}</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">{t.sections.storyText}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')} // ← أضف هذا
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-colors duration-200 font-medium"
            >
              {t.sections.storyButton}
              {language === 'ar' ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;