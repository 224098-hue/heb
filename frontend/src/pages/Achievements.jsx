import React, { useState } from 'react';
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
      'https://images.unsplash.com/photo-1580310219243-dbad8c44e576?w=1000&q=80',
    after:
      'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1000&q=80',
    title: 'إعادة ترميم جانب من منزل إبراهيم الرجبي',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1633788229431-a9683c7388dd?w=600&q=75',
  'https://images.unsplash.com/photo-1580310219243-dbad8c44e576?w=600&q=75',
  'https://images.unsplash.com/photo-1562457141-8c1df886f92c?w=600&q=75',
  'https://images.unsplash.com/photo-1591456983933-0d680b2dca0d?w=600&q=75',
  'https://images.unsplash.com/photo-1604154687425-50fa53b16b1d?w=600&q=75',
  'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=600&q=75',
  'https://images.unsplash.com/photo-1542896644-b2c95cf83bf6?w=600&q=75',
  'https://images.unsplash.com/photo-1542596594-649edbc13630?w=600&q=75',
];

// ───────── Before/After Toggle ─────────
const BeforeAfter = ({ before, after, isAr }) => {
  const [showAfter, setShowAfter] = useState(false);
  return (
    <div className="flex items-center gap-5" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Labels column */}
      <div className="flex flex-col items-center justify-between py-4 select-none">
        <button
          onClick={() => setShowAfter(false)}
          className={`text-base lg:text-lg font-semibold transition-colors ${
            !showAfter ? '' : 'opacity-50'
          }`}
          style={{ color: '#553B2E' }}
          data-testid="achievements-before-btn"
        >
          قبل
        </button>
        <div className="my-3 flex flex-col items-center text-2xl" style={{ color: '#553B2E' }}>
          <ArrowLeft className="w-6 h-6" strokeWidth={2} />
        </div>
        <button
          onClick={() => setShowAfter(true)}
          className={`text-base lg:text-lg font-semibold transition-colors ${
            showAfter ? '' : 'opacity-50'
          }`}
          style={{ color: '#553B2E' }}
          data-testid="achievements-after-btn"
        >
          بعد
        </button>
      </div>

      {/* Image */}
      <div
        className="relative flex-1 max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-md bg-gray-100 cursor-pointer"
        onClick={() => setShowAfter((p) => !p)}
        data-testid="achievements-ba-image"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={showAfter ? 'after' : 'before'}
            src={showAfter ? after : before}
            alt={showAfter ? 'بعد' : 'قبل'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

// ───────── Auto-scroll carousel (re-used) ─────────
const AutoCarousel = ({ images, isAr }) => {
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
          تواصل معنا
        </Link>
      </div>
    </div>
  );
};

const Achievements = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const project = projectImages[0];

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="achievements-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* SECTION 1: Project hero */}
      <section className="pt-32 lg:pt-40 pb-12 lg:pb-16 px-6 lg:px-12" data-testid="achievements-hero">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 ${isAr ? 'text-right' : 'text-left'}`}
            style={{
              color: '#553B2E',
              fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
              letterSpacing: '0.05em',
            }}
            data-testid="achievements-title"
          >
            انجــازات اللجنــة
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className={`text-xl lg:text-2xl mb-12 lg:mb-16 ${isAr ? 'text-right' : 'text-left'}`}
            style={{
              color: '#553B2E',
              fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
            }}
          >
            {project.title}
          </motion.p>

          {/* Before/After slider */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex justify-center"
          >
            <BeforeAfter before={project.before} after={project.after} isAr={isAr} />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Awards & Carousel */}
      <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 px-6 lg:px-12" data-testid="achievements-gallery">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 ${isAr ? 'text-right' : 'text-left'}`}
            style={{
              color: '#553B2E',
              fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
            }}
          >
            بعض الجوائز والانجــازات
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className={`text-base lg:text-lg mb-12 lg:mb-16 ${isAr ? 'text-right' : 'text-left'}`}
            style={{ color: '#5a5249', lineHeight: '2' }}
          >
            تراث الخليل... أمانة تُبنى للمستقبل.
          </motion.p>

          <AutoCarousel images={galleryImages} isAr={isAr} />
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Achievements;
