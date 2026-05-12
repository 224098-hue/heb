import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  HandHeart,
  CheckCircle2,
  Building2,
  LayoutGrid,
  ArrowLeft,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountUp from '../components/CountUp';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const STATS_BASE = [
  { numericValue: 10,   Icon: User },
  { numericValue: 1500, Icon: HandHeart },
  { numericValue: 1000, Icon: CheckCircle2 },
  { numericValue: 3,    Icon: Building2 },
  { numericValue: 11,   Icon: LayoutGrid },
];

const districts = {
  intro: 'تضم البلدة القديمة عدداً من الحارات التاريخية مثل:',
  list1: [
    'حارة القزازين',
    'حارة العقابة',
    'حارة بني دار',
    'حارة الأكراد',
    'حارة المدرسة',
    'حارة المشارقة',
  ],
  intro2: 'كما ظهرت أحياء خارج النسيج التقليدي مثل:',
  list2: ['حي باب الزاوية', 'حي قيطون', 'حي الشيخ علي بكا'],
};

const markets = {
  intro: 'من أشهر الأسواق التاريخية في البلدة القديمة في الخليل:',
  list: [
    'سوق اللبن',
    'سوق القزازين',
    'سوق العطارين',
    'سوق الحدادين',
    'سوق السكاكيني',
    'سوق الخضار القديم',
    'سوق الحصر',
    'سوق الإسكافية',
    'سوق الذهب',
    'سوق الحبوب',
    'سوق القصابين',
    'سوق الخواجات',
  ],
};

const ARCH_DATA = {
  ar: {
    title: 'مدينة الخليل القديمة: النشأة والعمران',
    p1: 'تشكلت مدينة الخليل القديمة تدريجياً حول المسجد الإبراهيمي الشريف، متأثرة بثلاثة عناصر رئيسية: موقعها الديني المميز، ووادي الخليل الغني بالمياه والأشجار والطرق التجارية، وتل الرميدة الذي يُعد النواة الكنعانية الأولى للمدينة.',
    p2: 'مع مرور الزمن، توسعت المدينة من تل الرميدة نحو موقعها الحالي، وازدهرت بشكل واضح بعد الفتح الإسلامي، وبلغت ذروة تطورها العمراني في العصر المملوكي، ثم استمر تطورها في العهد العثماني.',
    learnMore: 'اعرف المزيد',
    statsLabels: ['أسواق', 'وحدة سكنية تراثية', 'مبنى تاريخي', 'أحياء', 'حارة أساسية'],
    districtsIntro: 'تضم البلدة القديمة عدداً من الحارات التاريخية مثل:',
    districtsIntro2: 'كما ظهرت أحياء خارج النسيج التقليدي مثل:',
    marketsIntro: 'من أشهر الأسواق التاريخية في البلدة القديمة في الخليل:',
    challengesTitle: 'التحديات التي واجهت العمران',
    challengesText: 'تعرضت البلدة القديمة عبر تاريخها للعديد من الكوارث والتغيرات، منها الزلازل، والحروب، والقصف، إضافة إلى أعمال الهدم والتغيير التي أثرت على المباني التاريخية وأدت إلى هجرة عدد من السكان من الحارات القديمة.',
    servicesTitle: 'الخدمات العامة والتطوير',
    servicesText: 'شهدت البلدة القديمة تطوراً تدريجياً في الخدمات مثل شبكات المياه والصرف الصحي والكهرباء والطرق المعبدة، خاصة منذ أواخر العهد العثماني وحتى اليوم، حيث تستمر مشاريع الترميم وإعادة الإعمار للحفاظ على الهوية التاريخية للمدينة.',
  },
  en: {
    title: 'The Old City of Hebron: Origin & Urbanism',
    p1: 'The Old City of Hebron gradually formed around the Ibrahimi Mosque, influenced by three main elements: its distinctive religious location, the Hebron valley rich in water, trees, and trade routes, and Tell Rumeida — considered the first Canaanite nucleus of the city.',
    p2: 'Over time, the city expanded from Tell Rumeida toward its current location, flourishing notably after the Islamic conquest, reaching its urban peak in the Mamluk era, and continuing to develop during the Ottoman period.',
    learnMore: 'Learn More',
    statsLabels: ['Markets', 'Heritage Housing Units', 'Historic Buildings', 'Districts', 'Main Quarters'],
    districtsIntro: 'The Old Town includes several historic quarters such as:',
    districtsIntro2: 'And neighborhoods beyond the traditional fabric also emerged, such as:',
    marketsIntro: 'Among the most famous historic markets in the Old City of Hebron:',
    challengesTitle: 'Challenges Facing Urbanism',
    challengesText: 'Throughout its history, the Old Town has faced many disasters and changes, including earthquakes, wars, and bombardment, as well as demolition and alteration that affected historic buildings and led to migration of residents from the old quarters.',
    servicesTitle: 'Public Services & Development',
    servicesText: 'The Old Town has seen gradual development in services such as water and sewage networks, electricity, and paved roads, especially since the late Ottoman period, with ongoing restoration and reconstruction projects to preserve the city\'s historic identity.',
  },
};

const Architecture = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const c = ARCH_DATA[language];

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="architecture-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* ─────────────── SECTION 1: Origin & Urban Formation ─────────────── */}
      <section
        className="pt-24 lg:pt-28 pb-12 lg:pb-16 px-6 lg:px-12"
        data-testid="arch-origin-section"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Text — Right in RTL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`lg:col-span-7 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
                data-testid="arch-title"
              >
                {c.title}
              </h1>
              <div className="h-[2px] w-32 mb-8" style={{ backgroundColor: '#BA9B70' }} />

              <p
                className="text-sm lg:text-base mb-5"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {c.p1}
              </p>
              <p
                className="text-sm lg:text-base mb-10"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {c.p2}
              </p>

              <button
                onClick={() => document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-2"
                style={{ borderColor: '#553B2E', color: '#553B2E' }}
                data-testid="arch-cta"
              >
                <span>{c.learnMore}</span>
                <ArrowLeft className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
              </button>
            </motion.div>
            {/* ← هون كان ناقص إغلاق motion.div */}

            {/* Image — Left in RTL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-gray-100">
                <img
                  src="/committee-building.webp"
                  alt="مدينة الخليل القديمة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Stats Bar — مع CountUp */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-10 lg:mt-12 rounded-3xl shadow-md overflow-hidden px-6 py-10 lg:px-10 lg:py-12"
            style={{ backgroundColor: '#F1E9D6' }}
            data-testid="arch-stats"
          >
            <div className="flex flex-wrap justify-around items-center gap-y-8 gap-x-6">
              {STATS_BASE.map(({ numericValue, Icon }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center px-3 min-w-[120px]"
                  data-testid={`arch-stat-${i}`}
                >
                  <Icon
                    className="w-8 h-8 lg:w-10 lg:h-10 mb-3"
                    style={{ color: '#553B2E' }}
                    strokeWidth={2}
                  />
                  <div
                    className="text-xl lg:text-2xl font-bold mb-1"
                    style={{ color: '#553B2E' }}
                  >
                    <CountUp to={numericValue} prefix="+" duration={2} />
                  </div>
                  <div
                    className="text-xs lg:text-sm font-medium"
                    style={{ color: '#7a6248' }}
                  >
                    {c.statsLabels[i]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── SECTION 2: Districts ─────────────── */}
      <section
        className="px-6 lg:px-12 py-10 lg:py-14"
        data-testid="arch-districts-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-200 pt-12 lg:pt-16">
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              <motion.div
                initial={{ opacity: 0, x: isAr ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="md:col-span-5"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1633788229431-a9683c7388dd?w=900&q=80"
                    alt="حارات البلدة القديمة"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`md:col-span-7 ${isAr ? 'text-right' : 'text-left'}`}
              >
                <p className="text-sm lg:text-base mb-3" style={{ color: '#3a3a3a', lineHeight: '1.85' }}>
                  {c.districtsIntro}
                </p>
                <ul className="mb-6 space-y-1.5">
                  {districts.list1.map((item) => (
                    <li key={item} className="text-sm lg:text-base flex items-center gap-3" style={{ color: '#3a3a3a' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#553B2E' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm lg:text-base mb-3" style={{ color: '#3a3a3a', lineHeight: '1.85' }}>
                  {c.districtsIntro2}
                </p>
                <ul className="space-y-1.5">
                  {districts.list2.map((item) => (
                    <li key={item} className="text-sm lg:text-base flex items-center gap-3" style={{ color: '#3a3a3a' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#553B2E' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 3: Markets ─────────────── */}
      <section
        className="px-6 lg:px-12 py-10 lg:py-14"
        data-testid="arch-markets-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-200 pt-12 lg:pt-16">
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              <motion.div
                initial={{ opacity: 0, x: isAr ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="md:col-span-5"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1562457141-8c1df886f92c?w=900&q=80"
                    alt="أسواق البلدة القديمة"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`md:col-span-7 ${isAr ? 'text-right' : 'text-left'}`}
              >
                <p className="text-sm lg:text-base mb-3" style={{ color: '#3a3a3a', lineHeight: '1.85' }}>
                  {c.marketsIntro}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  {markets.list.map((item) => (
                    <li key={item} className="text-sm lg:text-base flex items-center gap-3" style={{ color: '#3a3a3a' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#553B2E' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 4: Challenges ─────────────── */}
      <section
        id="challenges"
        className="px-6 lg:px-12 py-10 lg:py-14 mt-8"
        data-testid="arch-challenges-section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-3xl px-8 lg:px-12 py-10 lg:py-14 mb-8 lg:mb-12"
            style={{ backgroundColor: '#E5DCC9' }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              <h2
                className={`md:col-span-4 text-base lg:text-lg font-bold leading-tight ${isAr ? 'text-right' : 'text-left'}`}
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {c.challengesTitle}
              </h2>
              <p
                className={`md:col-span-8 text-sm lg:text-base ${isAr ? 'text-right' : 'text-left'}`}
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {c.challengesText}
              </p>
            </div>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-8 lg:mb-12 max-w-4xl mx-auto"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {[
              { src: '/old-town.webp', alt: 'مخاطر داخل البلدة', offset: 'md:mt-12 lg:mt-16' },
              { src: 'https://images.unsplash.com/photo-1580310219243-dbad8c44e576?w=900&q=80', alt: 'تحديات العمران', offset: 'md:mt-0' },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100 ${img.offset}`}
                data-testid={`arch-challenge-img-${i}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-3xl px-8 lg:px-12 py-10 lg:py-14"
            style={{ backgroundColor: '#E5DCC9' }}
            data-testid="arch-services-banner"
          >
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              <h2
                className={`md:col-span-4 text-base lg:text-lg font-bold leading-tight ${isAr ? 'text-right' : 'text-left'}`}
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {c.servicesTitle}
              </h2>
              <p
                className={`md:col-span-8 text-sm lg:text-base ${isAr ? 'text-right' : 'text-left'}`}
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {c.servicesText}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Architecture;