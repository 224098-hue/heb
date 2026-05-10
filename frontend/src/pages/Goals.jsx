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

  // النصوص حسب الصورة المرفقة
  const intro =
    'نسعى إلى حماية الهوية التاريخية والعمرانية لمدينة الخليل من خلال مشاريع تنموية وترميمية مستدامة تُعيد الحياة إلى البلدة القديمة وتحافظ على روحها الأصيلة.';

  const goals = [
    {
      title: 'الحفاظ على التراث',
      text:
        'حماية وصيانة المباني التاريخية والمعالم الأثرية بما يحفظ الهوية المعمارية والثقافية للبلدة القديمة.',
      image:
        'https://images.unsplash.com/photo-1562457141-8c1df886f92c?w=900&q=80',
      alt: 'الحفاظ على التراث',
    },
    {
      title: 'إعمار وتأهيل البلدة القديمة',
      text:
        'تنفيذ مشاريع ترميم وإعادة تأهيل للمباني والأسواق والأحياء التاريخية وفق معايير هندسية متخصصة.',
      image: '/old-town.webp',
      alt: 'إعمار وتأهيل البلدة القديمة',
    },
    {
      title: 'تطوير البنية التحتية',
      text:
        'تحقيق تنمية متوازنة تحافظ على الطابع التاريخي والثقافي للمدينة للأجيال القادمة.',
      image:
        'https://images.unsplash.com/photo-1633788229431-a9683c7388dd?w=900&q=80',
      alt: 'تطوير البنية التحتية',
    },
  ];

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="goals-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      <section
        className="pt-36 lg:pt-44 pb-24 lg:pb-32 px-6 lg:px-12"
        data-testid="goals-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* العنوان والمقدمة */}
          <div className={`mb-16 lg:mb-24 ${isAr ? 'text-right' : 'text-left'} flex flex-col ${isAr ? 'items-start' : 'items-start'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl lg:text-5xl font-bold mb-4"
              style={{
                color: '#553B2E',
                fontFamily:
                  "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
              }}
              data-testid="goals-title"
            >
              أهداف لجنة إعمار الخليل
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] w-32 mb-10"
              style={{ backgroundColor: '#BA9B70', transformOrigin: isAr ? 'right' : 'left' }}
            />

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.15 }}
              className="text-base lg:text-lg max-w-2xl"
              style={{
                color: '#3a3a3a',
                lineHeight: '2.1',
              }}
            >
              {intro}
            </motion.p>
          </div>

          {/* الكروت الثلاثة */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12"
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
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                data-testid={`goal-card-${i}`}
              >
                {/* صورة بطول البطاقة */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={g.image}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/15 to-transparent pointer-events-none" />
                </div>

                {/* العنوان أسفل الكرت */}
                <div className="px-6 py-6 text-center">
                  <h3
                    className="text-lg lg:text-xl font-bold"
                    style={{
                      color: '#553B2E',
                      fontFamily:
                        "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                    }}
                  >
                    {g.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* النصوص الوصفية تحت كل كرت */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {goals.map((g, i) => (
              <motion.p
                key={`desc-${g.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-sm lg:text-base text-center px-2"
                style={{
                  color: '#5a5a5a',
                  lineHeight: '2',
                }}
                data-testid={`goal-desc-${i}`}
              >
                {g.text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Goals;
