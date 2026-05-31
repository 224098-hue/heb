import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const projectImages = [
  {
    before:
      'صورة2.jpg',
    after:
      'p5.jpg',
    title: 'إعادة ترميم جانب من منزل إبراهيم الرجبي',
  },
];

const galleryImages = [
  'لقطة الشاشة 2026-05-13 200722.png',
  'Gemini_Generated_Image_pp9xdvpp9xdvpp9x.png',
  'word-habitat.jpg',
  '1000134585.jpg',
  '684202805_1381655957319771_1006406700362135953_n.jpg',
  'IMG_1478.jpg',
  'after-p3.jpg',
];

// ───────── Before/After Toggle ─────────
// ───────── Auto Before/After Slider ─────────
const BeforeAfter = ({ before, after, isAr }) => {
  const [showAfter, setShowAfter] = useState(false);

  // Auto-toggle every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setShowAfter((p) => !p);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[420px] mx-auto" dir="ltr">
      {/* Back card (slightly offset) */}
      <motion.div
        animate={{
          x: showAfter ? -12 : 12,
          y: showAfter ? -8 : 8,
          rotate: showAfter ? -2 : 2,
        }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-3xl overflow-hidden shadow-md bg-gray-100"
      >
        <img
          src={showAfter ? before : after}
          alt={showAfter ? 'قبل' : 'بعد'}
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      {/* Front card */}
      <div
        className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 cursor-pointer"
        onClick={() => setShowAfter((p) => !p)}
        data-testid="achievements-ba-image"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={showAfter ? 'after' : 'before'}
            src={showAfter ? after : before}
            alt={showAfter ? 'بعد' : 'قبل'}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Floating label */}
        <div
          className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(255,255,255,0.92)',
            color: '#553B2E',
          }}
          data-testid={showAfter ? 'achievements-after-btn' : 'achievements-before-btn'}
        >
          {showAfter ? 'بعد' : 'قبل'}
        </div>
      </div>
    </div>
  );
};

// ───────── Auto-scroll carousel (re-used) ─────────
const AutoCarousel = ({ images, isAr, language }) => {
  const trackRef = React.useRef(null);
  const x = useMotionValue(0);
  const [direction, setDirection] = useState(isAr ? 1 : -1);
  const [paused, setPaused] = useState(false);
  const [loopTick, setLoopTick] = useState(0);
  const animationRef = React.useRef(null);

  React.useEffect(() => {
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
      if (current <= -halfWidth) {
        x.set(0);
        from = 0;
      }
      to = -halfWidth;
    } else {
      if (current >= 0) {
        x.set(-halfWidth);
        from = -halfWidth;
      }
      to = 0;
    }
    const distance = Math.abs(to - from);
    if (distance < 1) {
      x.set(direction < 0 ? 0 : -halfWidth);
      setLoopTick((n) => n + 1);
      return;
    }
    const speed = 60;
    const duration = distance / speed;
    animationRef.current?.stop();
    animationRef.current = animate(x, to, {
      duration,
      ease: 'linear',
      onComplete: () => setLoopTick((n) => n + 1),
    });
    return () => animationRef.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction, paused, loopTick]);

  const PrevIcon = isAr ? ArrowRight : ArrowLeft;
  const NextIcon = isAr ? ArrowLeft : ArrowRight;
  const looped = [...images, ...images];

  return (
    <div className="w-full">
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
            >
              <img src={src} alt={`إنجاز ${(i % images.length) + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDirection(1)}
            aria-label="السابق"
            data-testid="achievements-prev-btn"
            className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-[#553B2E] hover:text-white hover:border-[#553B2E]"
            style={{ borderColor: '#553B2E', color: '#553B2E' }}
          >
            <PrevIcon className="w-5 h-5" strokeWidth={2} />
          </button>
          <button
            onClick={() => setDirection(-1)}
            aria-label="التالي"
            data-testid="achievements-next-btn"
            className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-[#553B2E] hover:text-white hover:border-[#553B2E]"
            style={{ borderColor: '#553B2E', color: '#553B2E' }}
          >
            <NextIcon className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        <Link
          to="/contact"
          className="px-7 py-2.5 rounded-full font-semibold text-sm border-2 transition-all duration-300 hover:bg-[#553B2E] hover:text-white"
          style={{ borderColor: '#553B2E', color: '#553B2E' }}
          data-testid="achievements-contact-btn"
        >
          {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
        </Link>
      </div>
    </div>
  );
};

const ACH_DATA = {
  ar: {
    title: 'انجــازات اللجنــة',
    projectLabel: 'مشروع',
    projectName: 'إعادة ترميم جانب من منزل إبراهيم الرجبي',
    projectDesc: 'ضمن جهود لجنة إعمار الخليل للحفاظ على البلدة القديمة، تم ترميم جانب من منزل عائلة الرجبي بأسلوب هندسي يحترم الطابع التاريخي للحيّ ويعيد الحياة إلى تفاصيله الأصلية.',
    awardsTitle: 'بعض الجوائز والانجــازات',
    awardsSub: 'تراث الخليل... أمانة تُبنى للمستقبل.',
    contactCta: 'تواصل معنا',
  },
  en: {
    title: 'Committee Achievements',
    projectLabel: 'PROJECT',
    projectName: 'Restoration of part of Ibrahim Al-Rajabi\'s house',
    projectDesc: 'As part of the Hebron Rehabilitation Committee\'s efforts to preserve the Old Town, a section of the Al-Rajabi family home was restored using an engineering approach that respects the historic character of the quarter and brings life back to its original details.',
    awardsTitle: 'Some Awards & Achievements',
    awardsSub: 'Hebron\'s heritage... a trust built for the future.',
    contactCta: 'Contact Us',
  },
};

const Achievements = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const project = projectImages[0];
  const d = ACH_DATA[language];

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="achievements-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* SECTION 1: Project hero */}
      <section className="pt-24 lg:pt-28 pb-12 lg:pb-16 px-6 lg:px-12" data-testid="achievements-hero">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-center"
            style={{
              color: '#553B2E',
              fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
              letterSpacing: '0.05em',
            }}
            data-testid="achievements-title"
          >
            {d.title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] w-24 mx-auto mb-8 lg:mb-10"
            style={{ backgroundColor: '#BA9B70' }}
          />

          {/* 2-column layout: project info on LEFT, slider on RIGHT (RTL) */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Slider — on RIGHT in RTL (DOM-first) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-5 order-1 lg:order-1"
            >
              <BeforeAfter before={project.before} after={project.after} isAr={isAr} />
            </motion.div>

            {/* Project info — on LEFT in RTL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className={`lg:col-span-7 order-2 lg:order-2 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <p
                className="text-xs font-medium mb-2"
                style={{ color: '#7a6248', letterSpacing: '0.1em' }}
              >
                {d.projectLabel}
              </p>
              <div className="h-[2px] w-16 mb-6" style={{ backgroundColor: '#BA9B70' }} />
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-5 leading-tight"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {d.projectName}
              </h2>
              <p
                className="text-sm lg:text-base"
                style={{ color: '#5a5249', lineHeight: '1.9' }}
              >
                {d.projectDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Awards & Carousel */}
      <section className="pt-12 lg:pt-16 pb-14 lg:pb-20 px-6 lg:px-12" data-testid="achievements-gallery">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 ${isAr ? 'text-right' : 'text-left'}`}
            style={{
              color: '#553B2E',
              fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
            }}
          >
            {d.awardsTitle}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className={`text-sm lg:text-base mb-8 lg:mb-12 ${isAr ? 'text-right' : 'text-left'}`}
            style={{ color: '#5a5249', lineHeight: '1.85' }}
          >
            {d.awardsSub}
          </motion.p>

          <AutoCarousel images={galleryImages} isAr={isAr} language={language} />
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Achievements;
