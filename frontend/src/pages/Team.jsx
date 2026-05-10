import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// أعضاء الفريق - بيانات افتراضية
const teamMembers = [
  {
    name: 'عبير إسماعيل المناصرة',
    role: 'مديرة شؤون الموظفين',
    department: 'الإدارة',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80',
  },
  {
    name: 'أحمد محمود السلايمة',
    role: 'مدير المشاريع',
    department: 'المشاريع الهندسية',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80',
  },
  {
    name: 'سامي عبد الرحمن الجعبري',
    role: 'منسق ميداني',
    department: 'الترميم',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
  },
  {
    name: 'فاطمة يوسف القاضي',
    role: 'مهندسة معمارية',
    department: 'الهندسة المعمارية',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80',
  },
];

const intro =
  'يُشكِّل موظفو لجنة إعمار البلدة القديمة الركيزة الأساسية في عملية التطوير والإحياء المستمر، حيث يعملون بتفانٍ ومسؤولية على تنفيذ مشاريع الترميم، وتنسيق الجهود الميدانية، ومتابعة احتياجات المنطقة. إن جهودهم اليومية تسهم بشكل مباشر في الحفاظ على هوية البلدة القديمة وتعزيز استدامتها.';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Team = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = teamMembers.length;
  const current = teamMembers[index];
  const nextIndex = (index + 1) % total;
  const next = teamMembers[nextIndex];

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % total);
  };
  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + total) % total);
  };

  // اتجاه الأسهم: في RTL السهم اليمين هو "السابق" واليسار هو "التالي"
  const PrevIcon = isAr ? ArrowRight : ArrowLeft;
  const NextIcon = isAr ? ArrowLeft : ArrowRight;

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? (isAr ? -60 : 60) : isAr ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? (isAr ? 60 : -60) : isAr ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="team-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      <section
        className="pt-36 lg:pt-44 pb-24 lg:pb-32 px-6 lg:px-12"
        data-testid="team-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* العنوان والمقدمة */}
          <div
            className={`mb-16 lg:mb-24 ${isAr ? 'text-right' : 'text-left'}`}
          >
            <div className="max-w-3xl me-auto">
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
                data-testid="team-title"
              >
                فريق العمل
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] w-32 mb-10"
                style={{
                  backgroundColor: '#BA9B70',
                  transformOrigin: isAr ? 'right' : 'left',
                }}
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
          </div>

          {/* قسم السلايدر */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* الصور — على اليسار في RTL */}
            <div
              className={`lg:col-span-7 ${
                isAr ? 'order-2 lg:order-1' : 'order-2'
              }`}
            >
              <div className="relative h-[440px] lg:h-[560px] flex items-center">
                {/* البطاقة الخلفية (الشخص التالي) */}
                <motion.div
                  key={`bg-${nextIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    isAr ? 'right-0' : 'left-0'
                  }`}
                  style={{ width: '38%', height: '85%' }}
                  data-testid="team-card-back"
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-md bg-gray-100">
                    <img
                      src={next.image}
                      alt={next.name}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                </motion.div>

                {/* البطاقة الأمامية (الشخص الحالي) */}
                <div
                  className={`absolute top-0 ${
                    isAr ? 'left-0' : 'right-0'
                  } w-[60%] h-full`}
                >
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={index}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
                      data-testid="team-card-front"
                    >
                      <img
                        src={current.image}
                        alt={current.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/30 to-transparent pointer-events-none" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* أزرار التنقل */}
              <div
                className={`mt-8 flex items-center gap-4 ${
                  isAr ? 'justify-start' : 'justify-end'
                }`}
              >
                <button
                  onClick={goPrev}
                  aria-label="السابق"
                  data-testid="team-prev-btn"
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-[#553B2E] hover:text-white hover:border-[#553B2E]"
                  style={{ borderColor: '#553B2E', color: '#553B2E' }}
                >
                  <PrevIcon className="w-5 h-5" strokeWidth={2} />
                </button>
                <button
                  onClick={goNext}
                  aria-label="التالي"
                  data-testid="team-next-btn"
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:bg-[#553B2E] hover:text-white hover:border-[#553B2E]"
                  style={{ borderColor: '#553B2E', color: '#553B2E' }}
                >
                  <NextIcon className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* بيانات العضو — على اليمين في RTL */}
            <div
              className={`lg:col-span-5 ${
                isAr ? 'order-1 lg:order-2 text-right' : 'order-1 text-left'
              }`}
            >
              {/* شارة القسم */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={`dept-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium mb-8"
                  style={{
                    backgroundColor: '#F1E9D6',
                    color: '#553B2E',
                  }}
                  data-testid="team-department"
                >
                  {current.department}
                </motion.span>
              </AnimatePresence>

              {/* الاسم والوظيفة */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${index}`}
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isAr ? -20 : 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2
                    className="text-3xl lg:text-4xl font-bold mb-3"
                    style={{
                      color: '#553B2E',
                      fontFamily:
                        "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                    }}
                    data-testid="team-name"
                  >
                    {current.name}
                  </h2>
                  <p
                    className="text-base lg:text-lg"
                    style={{ color: '#7a7a7a' }}
                    data-testid="team-role"
                  >
                    {current.role}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* مؤشرات */}
              <div
                className={`flex gap-2 mt-10 ${
                  isAr ? 'justify-end' : 'justify-start'
                }`}
              >
                {teamMembers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`عضو ${i + 1}`}
                    data-testid={`team-dot-${i}`}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? '32px' : '8px',
                      backgroundColor:
                        i === index ? '#553B2E' : '#D9CDB6',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Team;
