import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const OLDTOWN_DATA = {
  ar: {
    title: 'البلدة القديمة',
    paragraphs: [
      'تقع البلدة القديمة في قلب مدينة الخليل، وتُعد من أقدم المناطق التاريخية في فلسطين، حيث تمتد جذورها لآلاف السنين وتحمل بين أزقتها ذاكرة حضارية وثقافية غنية.',
      'تتميز البلدة بطابعها المعماري الأصيل، وأسواقها التراثية، ومبانيها الحجرية القديمة التي تعكس تاريخ المدينة وهويتها العربية والإسلامية.',
      'وتضم البلدة القديمة العديد من المعالم الدينية والأثرية والأسواق التقليدية التي ما زالت تنبض بالحياة حتى اليوم، مما يجعلها شاهدًا حيًا على تعاقب الحضارات عبر الزمن.',
    ],
    cards: [
      { title: 'الطبيعة المعمارية', alt: 'الطبيعة المعمارية' },
      { title: 'المهن والحرف', alt: 'المهن والحرف' },
    ],
  },
  en: {
    title: 'The Old Town',
    paragraphs: [
      'The Old Town lies at the heart of Hebron and is considered one of the oldest historic areas in Palestine. Its roots stretch back thousands of years, and its alleys hold rich cultural and civilizational memories.',
      'The town is distinguished by its authentic architectural character, heritage markets, and ancient stone buildings that reflect the city\'s Arab and Islamic identity.',
      'The Old Town hosts many religious and archaeological landmarks as well as traditional markets that remain alive today, making it a living witness to the succession of civilizations through time.',
    ],
    cards: [
      { title: 'Architecture', alt: 'Architecture' },
      { title: 'Crafts & Trades', alt: 'Crafts & Trades' },
    ],
  },
};

const OldTown = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const c = OLDTOWN_DATA[language];
  const { paragraphs } = c;
  const cards = [
    { ...c.cards[0], to: '/architecture', image: 'WhatsApp Image 2026-05-19 at 5.42.07 PM.jpeg' },
    { ...c.cards[1], to: '/crafts', image: 'المهن.jpg' },
  ];

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="oldtown-page">

      {/* ── HERO: نفس ارتفاع وعرض صفحة المهن والحرف ── */}
      <div className="relative w-full h-screen min-h-[500px] max-h-[700px]">
        {/* الصورة */}
        <img
          src="/committee-building.webp"
          alt="البلدة القديمة - الخليل"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay داكن من الأسفل */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

        {/* Header فوق الصورة */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header
            language={language}
            setLanguage={setLanguage}
            t={t}
            transparent
          />
        </div>

        {/* العنوان — أسفل يمين */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`absolute bottom-12 lg:bottom-16 ${isAr ? 'right-8 lg:right-16 text-right' : 'left-8 lg:left-16 text-left'}`}
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif" }}
            data-testid="oldtown-title"
          >
            {c.title}
          </h1>
        </motion.div>
      </div>

      {/* ── المحتوى: فقرات + كرتين ── */}
      <section
        className="pt-16 lg:pt-20 pb-14 lg:pb-20 px-6 lg:px-12"
        data-testid="oldtown-section"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Title + Paragraphs (Right in RTL) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`lg:col-span-6 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h2
                className="text-2xl lg:text-3xl font-bold mb-4"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {c.title}
              </h2>
              <div
                className="h-[2px] w-32 mb-8"
                style={{ backgroundColor: '#BA9B70' }}
              />
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-sm lg:text-base mb-5"
                  style={{ color: '#3a3a3a', lineHeight: '1.85' }}
                  data-testid={`oldtown-p-${i}`}
                >
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Two clickable image cards (Left in RTL) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-5 lg:gap-6">
              {cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <Link
                    to={c.to}
                    className="relative block w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-md group hover:shadow-2xl transition-shadow duration-300"
                    data-testid={`oldtown-card-${i}`}
                  >
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/70 via-[#553B2E]/15 to-transparent" />

                    {/* Pill button */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[80%]">
                      <div
                        className="bg-white rounded-full py-2.5 lg:py-3 text-center font-bold text-sm lg:text-base shadow-md transition-transform duration-300 group-hover:-translate-y-0.5"
                        style={{
                          color: '#553B2E',
                          fontFamily:
                            "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                        }}
                      >
                        {c.title}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default OldTown;