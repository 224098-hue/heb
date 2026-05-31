import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// صور الذكور والإناث
const MALE_IMG = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80';
const FEMALE_IMG = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80';
const MALE_IMG_2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80';
const FEMALE_IMG_2 = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80';

const TEAM_DATA = {
  ar: {
    title: 'فريق العمل',
    intro:
      'يُشكِّل موظفو لجنة إعمار البلدة القديمة الركيزة الأساسية في عملية التطوير والإحياء المستمر، حيث يعملون بتفانٍ ومسؤولية على تنفيذ مشاريع الترميم، وتنسيق الجهود الميدانية، ومتابعة احتياجات المنطقة.',
    members: [
      { name: 'أ. مهند الجعبري',            role: 'المدير العام',                          gender: 'male' },
      { name: 'عبير إسماعيل المناصره',       role: 'مديرة شؤون الموظفين',                  gender: 'female' },
      { name: 'محمود جلال ملحم',             role: 'مدير مالي',                            gender: 'male' },
      { name: 'منال جهاد الحرباوي',          role: 'مسؤولة قسم العطاءات',                  gender: 'female' },
      { name: 'م. زياد جابر',               role: 'مدير فني',                             gender: 'male' },
      { name: 'توفيق "عبد الرحمن" جحشن',    role: 'محامي - المكتب القانوني',              gender: 'male' },
      { name: 'ميسره ايوب صلاح',            role: 'منسقة أنشطة وفعاليات',                 gender: 'female' },
      { name: 'نهى عزمي دنديس',             role: 'مهندسة',                               gender: 'female' },
      { name: 'هشام محمود عويضات',           role: 'رئيس شعبة - القسم الهندسي',            gender: 'male' },
      { name: 'وفاء زلوم',                  role: 'مهندسة',                               gender: 'female' },
      { name: 'غسان ابو الفيلات',           role: 'مهندس',                                gender: 'male' },
      { name: 'ميساء محرم',                 role: 'مهندسة',                               gender: 'female' },
      { name: 'حسام ادريس',                 role: 'مهندس',                                gender: 'male' },
      { name: 'منتصر مرقه',                 role: 'مهندس',                                gender: 'male' },
      { name: 'سرين مناصره',                role: 'مهندسة',                               gender: 'female' },
      { name: 'حسن السلامين',               role: 'باحث إجتماعي - المكتب القانوني',        gender: 'male' },
      { name: 'لمى عبد الحافظ شبانه',       role: 'سكرتيرة - المكتب القانوني',            gender: 'female' },
      { name: 'فاديه عبد العليم دعنا',      role: 'منسقة - المكتب القانوني',              gender: 'female' },
      { name: 'خولة ناصر المحتسب',          role: 'سكرتيرة محاسبة',                       gender: 'female' },
      { name: 'ندى الفلاح',                 role: 'محاسبة',                               gender: 'female' },
      { name: 'هناء عبد المغني مجاهد',      role: 'مسؤولة صفحة الويب والارشيف',           gender: 'female' },
      { name: 'ديانا "عبد المنعم" زلوم',    role: 'باحثة إجتماعية',                       gender: 'female' },
      { name: 'ايمان ذيب العداربه',         role: 'باحثة إجتماعية',                       gender: 'female' },
      { name: 'سامح جبر المحتسب',           role: 'فني',                                  gender: 'male' },
      { name: 'خالد جمال شريف',             role: 'فني',                                  gender: 'male' },
    ],
  },
  en: {
    title: 'Our Team',
    intro:
      'The staff of the Hebron Rehabilitation Committee form the cornerstone of the ongoing development and revival process. They work with dedication and responsibility to execute restoration projects, coordinate field efforts, and address the needs of the area.',
    members: [
      { name: 'Muhannad Al-Jabari',          role: 'General Director',                     gender: 'male' },
      { name: 'Abeer Ismail Al-Manasrah',    role: 'HR Manager',                           gender: 'female' },
      { name: 'Mahmoud Jalal Mulhem',        role: 'Financial Director',                   gender: 'male' },
      { name: 'Manal Jihad Al-Harbawy',      role: 'Tenders Department Officer',           gender: 'female' },
      { name: 'Eng. Ziad Jaber',             role: 'Technical Director',                   gender: 'male' },
      { name: 'Tawfiq Jahshan',              role: 'Lawyer - Legal Office',                gender: 'male' },
      { name: 'Maysara Ayoub Salah',         role: 'Activities & Events Coordinator',      gender: 'female' },
      { name: 'Noha Azmi Dandis',            role: 'Engineer',                             gender: 'female' },
      { name: 'Hisham Mahmoud Oweida',       role: 'Head of Engineering Division',         gender: 'male' },
      { name: 'Wafa Zaloum',                 role: 'Engineer',                             gender: 'female' },
      { name: 'Ghassan Abu Al-Feelat',       role: 'Engineer',                             gender: 'male' },
      { name: 'Maysaa Moharam',              role: 'Engineer',                             gender: 'female' },
      { name: 'Husam Idris',                 role: 'Engineer',                             gender: 'male' },
      { name: 'Muntaser Marqa',              role: 'Engineer',                             gender: 'male' },
      { name: 'Sirin Manasrah',              role: 'Engineer',                             gender: 'female' },
      { name: 'Hassan Al-Salamin',           role: 'Social Researcher - Legal Office',     gender: 'male' },
      { name: 'Lama Abd Al-Hafez Shabana',   role: 'Secretary - Legal Office',             gender: 'female' },
      { name: 'Fadya Abd Al-Aleem Dana',     role: 'Coordinator - Legal Office',           gender: 'female' },
      { name: 'Khawla Naser Al-Muhtaseb',    role: 'Accounting Secretary',                 gender: 'female' },
      { name: 'Nada Al-Fallah',              role: 'Accountant',                           gender: 'female' },
      { name: 'Hanaa Abd Al-Mughni',         role: 'Web & Archive Officer',                gender: 'female' },
      { name: 'Diana Zaloum',                role: 'Social Researcher',                    gender: 'female' },
      { name: 'Iman Theeb Al-Adarba',        role: 'Social Researcher',                    gender: 'female' },
      { name: 'Sameh Jaber Al-Muhtaseb',     role: 'Technician',                           gender: 'male' },
      { name: 'Khaled Jamal Shareef',        role: 'Technician',                           gender: 'male' },
    ],
  },
};

const getImage = (gender, index) => {
  if (gender === 'female') {
    return index % 2 === 0 ? FEMALE_IMG : FEMALE_IMG_2;
  }
  return index % 2 === 0 ? MALE_IMG : MALE_IMG_2;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Team = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const data = TEAM_DATA[language];
  const { title, intro } = data;
  const teamMembers = data.members.map((m, i) => ({
    ...m,
    image: getImage(m.gender, i),
  }));

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
  className="pt-36 lg:pt-40 pb-14 lg:pb-20 px-6 lg:px-12"
  data-testid="team-section"
>
  <div className="max-w-7xl mx-auto">
    {/* العنوان والمقدمة - يمين */}
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
        data-testid="team-title"
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
        style={{ color: '#3a3a3a', lineHeight: '1.85' }}
      >
        {intro}
      </motion.p>
    </div>
          {/* السلايدر */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* الصور */}
            <div className={`lg:col-span-7 ${isAr ? 'order-2 lg:order-1' : 'order-2'}`}>
              <div className="relative h-[440px] lg:h-[560px] flex items-center">
                {/* البطاقة الخلفية */}
                <motion.div
                  key={`bg-${nextIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-1/2 -translate-y-1/2 ${isAr ? 'right-0' : 'left-0'}`}
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

                {/* البطاقة الأمامية */}
                <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} w-[60%] h-full`}>
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={index}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
              <div className={`mt-8 flex items-center gap-4 ${isAr ? 'justify-start' : 'justify-end'}`}>
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

            {/* بيانات العضو */}
            <div className={`lg:col-span-5 ${isAr ? 'order-1 lg:order-2 text-right' : 'order-1 text-left'}`}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`dept-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium mb-8"
                  style={{ backgroundColor: '#F1E9D6', color: '#553B2E' }}
                  data-testid="team-department"
                >
                  {`${index + 1} / ${total}`}
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${index}`}
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isAr ? -20 : 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2
                    className="text-2xl lg:text-3xl font-bold mb-3"
                    style={{
                      color: '#553B2E',
                      fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                    }}
                    data-testid="team-name"
                  >
                    {current.name}
                  </h2>
                  <p
                    className="text-sm lg:text-base"
                    style={{ color: '#7a7a7a' }}
                    data-testid="team-role"
                  >
                    {current.role}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* مؤشرات — نقاط صغيرة بدل كل الـ 25 */}
              <div className={`flex gap-2 mt-10 flex-wrap ${isAr ? 'justify-end' : 'justify-start'}`}>
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
                      width: i === index ? '24px' : '6px',
                      backgroundColor: i === index ? '#553B2E' : '#D9CDB6',
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