import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Goals = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';

  const content = {
    ar: {
      title: 'أهداف لجنة إعمار الخليل',
      intro:
        'نسعى إلى حماية الهوية التاريخية والعمرانية لمدينة الخليل من خلال مشاريع تنموية وترميمية مستدامة تُعيد الحياة إلى البلدة القديمة وتحافظ على روحها الأصيلة.',
      goals: [
        {
          title: 'الحفاظ على التراث',
          text: 'حماية وصيانة المباني التاريخية والمعالم الأثرية بما يحفظ الهوية المعمارية والثقافية للبلدة القديمة.',
          image: '/th.webp',
          alt: 'الحفاظ على التراث',
        },
        {
          title: 'إعمار وتأهيل البلدة القديمة',
          text: 'تنفيذ مشاريع ترميم وإعادة تأهيل للمباني والأسواق والأحياء التاريخية وفق معايير هندسية متخصصة.',
          image: '/image (34).webp',
          alt: 'إعمار وتأهيل البلدة القديمة',
        },
        {
          title: 'تطوير البنية التحتية',
          text: 'تحقيق تنمية متوازنة تحافظ على الطابع التاريخي والثقافي للمدينة للأجيال القادمة.',
          image: '/٢٠٢٦٠٥٠٥_١١٢٤٠٣.webp',
          alt: 'تطوير البنية التحتية',
        },
      ],
    },
    en: {
      title: 'Hebron Reconstruction Committee Goals',
      intro:
        'We seek to protect the historic and architectural identity of Hebron through sustainable development and restoration projects that bring life back to the Old Town while preserving its authentic spirit.',
      goals: [
        {
          title: 'Heritage Preservation',
          text: 'Protecting and maintaining historic buildings and archaeological landmarks to preserve the architectural and cultural identity of the Old Town.',
          image: '/hrc-frames.webp',
          alt: 'Heritage Preservation',
        },
        {
          title: 'Old Town Restoration & Rehabilitation',
          text: 'Carrying out restoration and rehabilitation projects for historic buildings, markets, and neighborhoods according to specialized engineering standards.',
          image: '/old-town.webp',
          alt: 'Old Town Restoration',
        },
        {
          title: 'Infrastructure Development',
          text: 'Achieving balanced development that preserves the historic and cultural character of the city for future generations.',
          image: '/hrc-plaque.webp',
          alt: 'Infrastructure Development',
        },
      ],
    },
  }[language];

  const { title, intro, goals } = content;

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="goals-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      <section
        className="pt-36 lg:pt-40 pb-14 lg:pb-20 px-6 lg:px-12"
        data-testid="goals-section"
      >
        <div className="max-w-7xl mx-auto">
         {/* العنوان والمقدمة - يمين زي About */}
<div className="mb-10 lg:mb-14" dir={isAr ? 'rtl' : 'ltr'}>
  <motion.h1
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isAr ? 'text-right' : 'text-left'}`}
    style={{
      color: '#553B2E',
      fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
    }}
    data-testid="goals-title"
  >
    {title}
  </motion.h1>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className={`h-[2px] w-32 mb-8 ${isAr ? 'mr-0' : 'ml-0'}`}
    style={{ backgroundColor: '#BA9B70' }}
  />

  <motion.p
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    transition={{ delay: 0.15 }}
    className={`text-sm lg:text-base max-w-2xl ${isAr ? 'text-right' : 'text-left'}`}
    style={{
      color: '#3a3a3a',
      lineHeight: '1.85',
    }}
  >
    {intro}
  </motion.p>
</div>

          {/* الكروت الثلاثة — image + desc ينظمو سويا على الموبايل */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {goals.map((g, i) => (
              <motion.div
                key={g.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col"
                data-testid={`goal-card-${i}`}
              >
                {/* صورة */}
                <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden mb-5">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={g.image}
                      alt={g.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/15 to-transparent pointer-events-none" />
                  </div>
                  <div className="px-6 py-5 text-center">
                    <h3
                      className="text-base lg:text-lg font-bold"
                      style={{
                        color: '#553B2E',
                        fontFamily:
                          "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                      }}
                    >
                      {g.title}
                    </h3>
                  </div>
                </div>

                {/* النص الوصفي مباشرة تحت الصورة */}
                <p
                  className="text-sm lg:text-base text-center px-2"
                  style={{
                    color: '#5a5a5a',
                    lineHeight: '1.85',
                  }}
                  data-testid={`goal-desc-${i}`}
                >
                  {g.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Goals;
