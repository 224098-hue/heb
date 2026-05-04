import React from 'react';
import { motion } from 'framer-motion';
import { pressArticles } from '../utils/mockData';

const PressSection = ({ language, t }) => {
  return (
    <section id="press" className={`py-20 px-6 bg-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="border-t-2 border-gray-300 w-24 mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t.sections.pressTitle}</h2>
            <div className="border-b-2 border-gray-300 w-24 mt-4 mx-auto" />
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={language === 'ar' ? article.titleAr : article.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-200">
                  {language === 'ar' ? article.titleAr : article.titleEn}
                </h3>
                <p className="text-sm text-gray-600">{article.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;