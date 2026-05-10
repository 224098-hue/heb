import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Architecture = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="architecture-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      <section className="pt-36 lg:pt-44 pb-24 lg:pb-32 px-6 lg:px-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`${isAr ? 'text-right' : 'text-left'}`}
          >
            <h1
              className="text-3xl lg:text-5xl font-bold mb-4"
              style={{
                color: '#553B2E',
                fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
              }}
              data-testid="architecture-title"
            >
              الطبيعة المعمارية
            </h1>
            <div
              className="h-[2px] w-32 mb-10"
              style={{ backgroundColor: '#BA9B70' }}
            />
            <p
              className="text-base lg:text-lg max-w-3xl"
              style={{ color: '#3a3a3a', lineHeight: '2.1' }}
            >
              قيد الإعداد — ستضم هذه الصفحة تفاصيل عن الطبيعة المعمارية للبلدة القديمة في الخليل، وأبرز عناصرها وطُرز البناء التراثية فيها.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Architecture;
