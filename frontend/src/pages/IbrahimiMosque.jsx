import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const previewCards = [
  'https://images.unsplash.com/photo-1591456983933-0d680b2dca0d?w=800&q=80',
  'https://images.unsplash.com/photo-1542596594-649edbc13630?w=800&q=80',
  'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80',
  'https://images.unsplash.com/photo-1604154687425-50fa53b16b1d?w=800&q=80',
];

const carouselImages = [
  'https://images.unsplash.com/photo-1591456983933-0d680b2dca0d?w=600&q=75',
  'https://images.unsplash.com/photo-1542596594-649edbc13630?w=600&q=75',
  'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=600&q=75',
  'https://images.unsplash.com/photo-1604154687425-50fa53b16b1d?w=600&q=75',
  'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=600&q=75',
  'https://images.unsplash.com/photo-1542896644-b2c95cf83bf6?w=600&q=75',
  'https://images.unsplash.com/photo-1633788229431-a9683c7388dd?w=600&q=75',
  'https://images.unsplash.com/photo-1580310219243-dbad8c44e576?w=600&q=75',
];

// ───────────── Auto-scroll Carousel ─────────────
const AutoCarousel = ({ images, isAr }) => {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [direction, setDirection] = useState(isAr ? 1 : -1);
  const [paused, setPaused] = useState(false);
  const [loopTick, setLoopTick] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    if (paused) {
      animationRef.current?.stop();
      return;
    }
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (halfWidth < 1) return;

    const current = x.get();
    let from = current;
    let to;

    if (direction < 0) {
      // scroll toward -halfWidth
      if (current <= -halfWidth) {
        x.set(0);
        from = 0;
      }
      to = -halfWidth;
    } else {
      // scroll toward 0 (from negative)
      if (current >= 0) {
        x.set(-halfWidth);
        from = -halfWidth;
      }
      to = 0;
    }

    const distance = Math.abs(to - from);
    if (distance < 1) {
      // reset & trigger again
      x.set(direction < 0 ? 0 : -halfWidth);
      setLoopTick((n) => n + 1);
      return;
    }
    const speed = 60; // px per second
    const duration = distance / speed;

    animationRef.current?.stop();
    animationRef.current = animate(x, to, {
      duration,
      ease: 'linear',
      onComplete: () => {
        setLoopTick((n) => n + 1);
      },
    });

    return () => animationRef.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, paused, loopTick]);

  const handleArrow = (dir) => {
    setDirection(dir);
  };

  const PrevIcon = isAr ? ArrowRight : ArrowLeft;
  const NextIcon = isAr ? ArrowLeft : ArrowRight;

  // Duplicate images for seamless looping
  const looped = [...images, ...images];

  return (
    <div className="w-full" data-testid="haram-carousel-wrap">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-4 lg:gap-5"
          style={{ x, willChange: 'transform' }}
          dir="ltr"
        >
          {looped.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-32 sm:w-40 lg:w-48 aspect-[3/5] rounded-2xl overflow-hidden shadow-md bg-gray-100"
              data-testid={`haram-carousel-img-${i % images.length}`}
            >
              <img
                src={src}
                alt={`الحرم الإبراهيمي ${(i % images.length) + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Arrow controls */}
      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={() => handleArrow(1)}
          aria-label="السابق"
          data-testid="haram-prev-btn"
          className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-[#553B2E] hover:text-white hover:border-[#553B2E]"
          style={{ borderColor: '#553B2E', color: '#553B2E' }}
        >
          <PrevIcon className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          onClick={() => handleArrow(-1)}
          aria-label="التالي"
          data-testid="haram-next-btn"
          className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-[#553B2E] hover:text-white hover:border-[#553B2E]"
          style={{ borderColor: '#553B2E', color: '#553B2E' }}
        >
          <NextIcon className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

const HARAM_DATA = {
  ar: {
    pageTitle: 'الحرم الإبراهيمي',
    exploreTitle: 'استكشف الحرم الإبراهيمي\nالشريف',
    historyLabel: 'نبذة تاريخية',
    p1: 'يُعتبر الحرم الإبراهيمي من أقدم الأماكن المقدسة في العالم التي ما زالت مستخدمة حتى اليوم دون انقطاع تقريباً. وترتبط قدسيته باحتوائه على مقامات النبي إبراهيم عليه السلام وزوجته سارة، إضافة إلى النبيين إسحاق ويعقوب وزوجتيهما.',
    p2: 'وقد شكَّل الحرم عبر التاريخ مركزاً دينياً وحضارياً مهماً، وأسهم في شهرة مدينة الخليل عالمياً، حتى أن اسم "Hebron" أُطلق على مدن ومناطق أخرى حول العالم.',
    s1Title: 'الأهمية الدينية',
    s1Text: 'يحمل الحرم مكانة روحية كبيرة لدى المسلمين، ويُعد من أبرز المعالم الإسلامية والتاريخية في فلسطين. كما ارتبط اسم مدينة الخليل بالنبي إبراهيم عليه السلام المعروف بـ "خليل الرحمن".',
    s2Title: 'العمارة والتصميم',
    s2Lead: 'يتكوّن الحرم من سور حجري ضخم أُقيم فوق مغارة مزدوجة، ويتميّز بطراز معماري هيرودياني يعتمد على استخدام الحجارة الضخمة والمتقنة.',
    s2SubTitle: 'أبرز المواصفات المعمارية:',
    s2Specs: [
      'طول المبنى: حوالي 59 متر',
      'العرض: حوالي 34 متر',
      'الارتفاع: 16 متر',
      'سماكة الجدران: نحو 2.6 متر',
      'عدد الدعامات الحجرية: 48 دعامة',
    ],
    s2Outro: 'وقد بُنيت بعض الحجارة بأحجام ضخمة يصل طول بعضها إلى أكثر من 7 أمتار.',
    s3Title: 'موقع الحرم في المدينة',
    s3Text: 'يقع الحرم الإبراهيمي في قلب البلدة القديمة بمدينة الخليل، وكان نقطة محورية في تشكل النسيج العمراني والأسواق والحارات المحيطة به، حيث امتدت الأزقة والطرق القديمة باتجاهه.',
    resilTitle: 'الصمود عبر التاريخ',
    resilText: 'رغم مرور أكثر من ألفي عام على بناء الحرم، وتعرض مدينة الخليل للعديد من الزلازل والحروب، حافظ المبنى على متانته وطابعه المعماري الفريد، ولم يتعرض لأضرار كبيرة تستدعي إعادة بنائه.',
  },
  en: {
    pageTitle: 'The Ibrahimi Mosque',
    exploreTitle: 'Explore the Holy\nIbrahimi Mosque',
    historyLabel: 'Historical Overview',
    p1: 'The Ibrahimi Mosque is considered one of the oldest holy sites in the world that has remained in continuous use until today. Its sanctity is linked to housing the tombs of Prophet Abraham (peace be upon him) and his wife Sarah, as well as Prophets Isaac and Jacob and their wives.',
    p2: 'Throughout history, the mosque has served as an important religious and civilizational center, contributing to Hebron\'s global fame — the name "Hebron" has been given to cities and regions around the world.',
    s1Title: 'Religious Significance',
    s1Text: 'The mosque holds great spiritual importance for Muslims, and is one of the most prominent Islamic and historic landmarks in Palestine. The name of Hebron is associated with the Prophet Abraham, known as "Khalil al-Rahman" (Friend of the Most Merciful).',
    s2Title: 'Architecture & Design',
    s2Lead: 'The mosque consists of a massive stone wall built over a double cave, and is distinguished by Herodian-style architecture relying on huge, finely crafted stones.',
    s2SubTitle: 'Key Architectural Specifications:',
    s2Specs: [
      'Building length: approx. 59 meters',
      'Width: approx. 34 meters',
      'Height: 16 meters',
      'Wall thickness: approx. 2.6 meters',
      'Number of stone piers: 48',
    ],
    s2Outro: 'Some stones were built at massive sizes, with some reaching over 7 meters in length.',
    s3Title: 'Location in the City',
    s3Text: 'The Ibrahimi Mosque lies in the heart of Hebron\'s Old Town and was a pivotal point in shaping the urban fabric, markets, and surrounding quarters — old alleys and roads extended toward it.',
    resilTitle: 'Resilience Through History',
    resilText: 'Despite more than two thousand years since the mosque was built, and Hebron\'s exposure to many earthquakes and wars, the building has maintained its strength and unique architectural character, sustaining no major damage requiring rebuilding.',
  },
};

const IbrahimiMosque = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const d = HARAM_DATA[language];

  const sections = [
    {
      title: d.s1Title,
      content: <>{d.s1Text}</>,
    },
    {
      title: d.s2Title,
      content: (
        <>
          {d.s2Lead}
          <br />
          <span className="font-semibold block mt-3 mb-2">{d.s2SubTitle}</span>
          <ul className="space-y-1.5 mb-3">
            {d.s2Specs.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#553B2E' }}
                />
                {item}
              </li>
            ))}
          </ul>
          {d.s2Outro}
        </>
      ),
    },
    {
      title: d.s3Title,
      content: <>{d.s3Text}</>,
    },
  ];

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="haram-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* ───────────── HERO BANNER + TITLE ───────────── */}
      <section
        className="pt-24 lg:pt-28 px-6 lg:px-12 pb-12 lg:pb-16"
        data-testid="haram-hero"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1591456983933-0d680b2dca0d?w=1600&q=80"
              alt="الحرم الإبراهيمي"
              className="w-full h-[220px] sm:h-[320px] lg:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#553B2E]/70 via-[#553B2E]/30 to-[#553B2E]/40 pointer-events-none" />
            <div
              className={`absolute inset-0 flex items-start pt-10 lg:pt-16 ${
                isAr ? 'justify-end pr-8 lg:pr-16' : 'justify-start pl-8 lg:pl-16'
              }`}
            >
              <h1
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg ${
                  isAr ? 'text-right' : 'text-left'
                }`}
                style={{
                  fontFamily:
                    "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
                data-testid="haram-title"
              >
                {d.pageTitle}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── EXPLORE SECTION ───────────── */}
      <section
        className="px-6 lg:px-12 py-10 lg:py-14"
        data-testid="haram-explore"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Title — Right in RTL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`lg:col-span-5 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h2
                className="text-base lg:text-lg font-bold leading-tight"
                style={{
                  color: '#553B2E',
                  fontFamily:
                    "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {d.exploreTitle}
              </h2>
            </motion.div>

            {/* Paragraph — Left in RTL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className={`lg:col-span-7 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <p
                className="text-sm font-medium mb-3"
                style={{ color: '#7a6248' }}
              >
                {d.historyLabel}
              </p>
              <p
                className="text-sm lg:text-base mb-4"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.p1}
              </p>
              <p
                className="text-sm lg:text-base"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.p2}
              </p>
            </motion.div>
          </div>

          {/* 4 preview cards */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {previewCards.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                data-testid={`haram-preview-${i}`}
              >
                <img
                  src={src}
                  alt={`الحرم الإبراهيمي ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── 3 INFO BANNER SECTIONS ───────────── */}
      <section
        className="px-6 lg:px-12 py-6 lg:py-10"
        data-testid="haram-info-section"
      >
        <div className="max-w-7xl mx-auto space-y-10 lg:space-y-14">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl px-8 lg:px-16 py-10 lg:py-14"
              style={{ backgroundColor: '#F5EFE3' }}
              data-testid={`haram-info-${i}`}
            >
              <div
                className={`max-w-3xl ${
                  isAr ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'
                }`}
              >
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-10 leading-[1.2]"
                  style={{
                    color: '#553B2E',
                    fontFamily:
                      "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                  }}
                >
                  {section.title}
                </h3>
                <div
                  className="text-sm lg:text-base"
                  style={{ color: '#5a5249', lineHeight: '1.85' }}
                >
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── الصمود عبر التاريخ ─────────────  */}
      <section
        className="px-6 lg:px-12 py-10 lg:py-14"
        data-testid="haram-resilience-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-200 pt-12 lg:pt-16 mb-8 lg:mb-12" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-3xl px-8 lg:px-16 py-10 lg:py-14 mb-8 lg:mb-12"
            style={{ backgroundColor: '#F5EFE3' }}
          >
            <div
              className={`max-w-3xl ${
                isAr ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'
              }`}
            >
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-10 leading-[1.2]"
                style={{
                  color: '#553B2E',
                  fontFamily:
                    "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {d.resilTitle}
              </h3>
              <p
                className="text-sm lg:text-base"
                style={{ color: '#5a5249', lineHeight: '1.85' }}
              >
                {d.resilText}
              </p>
            </div>
          </motion.div>

          {/* Auto-scroll Carousel */}
          <AutoCarousel images={carouselImages} isAr={isAr} />
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default IbrahimiMosque;
