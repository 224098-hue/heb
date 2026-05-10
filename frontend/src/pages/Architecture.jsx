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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stats = [
  { value: '+10', label: 'أسواق', Icon: User },
  { value: '+1500', label: 'وحدة سكنية تراثية', Icon: HandHeart },
  { value: '+1000', label: 'مبنى تاريخي', Icon: CheckCircle2 },
  { value: '+3', label: 'أحياء', Icon: Building2 },
  { value: '+11', label: 'حارة أساسية', Icon: LayoutGrid },
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

const Architecture = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="architecture-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* ─────────────── SECTION 1: Origin & Urban Formation ─────────────── */}
      <section
        className="pt-32 lg:pt-40 pb-12 lg:pb-16 px-6 lg:px-12"
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
                className="text-3xl lg:text-5xl font-bold mb-4 leading-tight"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
                data-testid="arch-title"
              >
                مدينة الخليل القديمة: النشأة والعمران
              </h1>
              <div
                className="h-[2px] w-32 mb-8"
                style={{ backgroundColor: '#BA9B70' }}
              />

              <p
                className="text-base lg:text-lg mb-5"
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                تشكلت مدينة الخليل القديمة تدريجياً حول المسجد الإبراهيمي الشريف،
                متأثرة بثلاثة عناصر رئيسية: موقعها الديني المميز، ووادي الخليل
                الغني بالمياه والأشجار والطرق التجارية، وتل الرميدة الذي يُعد
                النواة الكنعانية الأولى للمدينة.
              </p>
              <p
                className="text-base lg:text-lg mb-10"
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                مع مرور الزمن، توسعت المدينة من تل الرميدة نحو موقعها الحالي،
                وازدهرت بشكل واضح بعد الفتح الإسلامي، وبلغت ذروة تطورها العمراني
                في العصر المملوكي، ثم استمر تطورها في العهد العثماني.
              </p>

              <a
                href="#challenges"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-2"
                style={{ borderColor: '#553B2E', color: '#553B2E' }}
                data-testid="arch-cta"
              >
                <span>اعرف المزيد</span>
                <ArrowLeft className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
              </a>
            </motion.div>

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

          {/* Stats Bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-16 lg:mt-20 rounded-3xl shadow-md overflow-hidden"
            style={{ backgroundColor: '#F1E9D6' }}
            data-testid="arch-stats"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {stats.map(({ value, label, Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center justify-center text-center px-4 py-8 lg:py-10 border-l border-white/50 first:border-l-0 [&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:border-l lg:[&:nth-child(n)]:border-l lg:first:border-l-0"
                  data-testid={`arch-stat-${i}`}
                >
                  <Icon
                    className="w-10 h-10 lg:w-12 lg:h-12 mb-4"
                    style={{ color: '#1a1a1a' }}
                    strokeWidth={2.2}
                  />
                  <div
                    className="text-2xl lg:text-3xl font-bold mb-1"
                    style={{ color: '#553B2E' }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs lg:text-sm font-medium"
                    style={{ color: '#7a6248' }}
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── SECTION 2: Districts ─────────────── */}
      <section
        className="px-6 lg:px-12 py-12 lg:py-16"
        data-testid="arch-districts-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-200 pt-12 lg:pt-16">
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Image — Right in RTL (DOM-first) */}
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

              {/* Text — Left in RTL */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`md:col-span-7 ${isAr ? 'text-right' : 'text-left'}`}
              >
                <p
                  className="text-base lg:text-lg mb-3"
                  style={{ color: '#3a3a3a', lineHeight: '2' }}
                >
                  {districts.intro}
                </p>
                <ul className="mb-6 space-y-1.5">
                  {districts.list1.map((item) => (
                    <li
                      key={item}
                      className="text-base lg:text-lg flex items-center gap-3"
                      style={{ color: '#3a3a3a' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: '#553B2E' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <p
                  className="text-base lg:text-lg mb-3"
                  style={{ color: '#3a3a3a', lineHeight: '2' }}
                >
                  {districts.intro2}
                </p>
                <ul className="space-y-1.5">
                  {districts.list2.map((item) => (
                    <li
                      key={item}
                      className="text-base lg:text-lg flex items-center gap-3"
                      style={{ color: '#3a3a3a' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: '#553B2E' }}
                      />
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
        className="px-6 lg:px-12 py-12 lg:py-16"
        data-testid="arch-markets-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-200 pt-12 lg:pt-16">
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Image — Right in RTL */}
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

              {/* Text — Left in RTL */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`md:col-span-7 ${isAr ? 'text-right' : 'text-left'}`}
              >
                <p
                  className="text-base lg:text-lg mb-3"
                  style={{ color: '#3a3a3a', lineHeight: '2' }}
                >
                  {markets.intro}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  {markets.list.map((item) => (
                    <li
                      key={item}
                      className="text-base lg:text-lg flex items-center gap-3"
                      style={{ color: '#3a3a3a' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: '#553B2E' }}
                      />
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
        className="px-6 lg:px-12 py-16 lg:py-20 mt-8"
        data-testid="arch-challenges-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* Challenges banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-3xl px-8 lg:px-12 py-10 lg:py-14 mb-12 lg:mb-16"
            style={{ backgroundColor: '#E5DCC9' }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* Title — Right in RTL */}
              <h2
                className={`md:col-span-4 text-2xl lg:text-4xl font-bold leading-tight ${
                  isAr ? 'text-right' : 'text-left'
                }`}
                style={{
                  color: '#553B2E',
                  fontFamily:
                    "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                التحديات التي واجهت العمران
              </h2>

              {/* Paragraph — Left in RTL */}
              <p
                className={`md:col-span-8 text-base lg:text-lg ${
                  isAr ? 'text-right' : 'text-left'
                }`}
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                تعرضت البلدة القديمة عبر تاريخها للعديد من الكوارث والتغيرات،
                منها الزلازل، والحروب، والقصف، إضافة إلى أعمال الهدم والتغيير
                التي أثرت على المباني التاريخية وأدت إلى هجرة عدد من السكان من
                الحارات القديمة.
              </p>
            </div>
          </motion.div>

          {/* 2 challenge images — staggered (left higher, right lower in RTL) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12 lg:mb-16 max-w-4xl mx-auto" dir={isAr ? 'rtl' : 'ltr'}>
            {[
              {
                src: '/old-town.webp',
                alt: 'مخاطر داخل البلدة',
                offset: 'md:mt-12 lg:mt-16',
              },
              {
                src: 'https://images.unsplash.com/photo-1580310219243-dbad8c44e576?w=900&q=80',
                alt: 'تحديات العمران',
                offset: 'md:mt-0',
              },
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
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Services banner */}
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
                className={`md:col-span-4 text-2xl lg:text-4xl font-bold leading-tight ${
                  isAr ? 'text-right' : 'text-left'
                }`}
                style={{
                  color: '#553B2E',
                  fontFamily:
                    "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                الخدمات العامة والتطوير
              </h2>

              <p
                className={`md:col-span-8 text-base lg:text-lg ${
                  isAr ? 'text-right' : 'text-left'
                }`}
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                شهدت البلدة القديمة تطوراً تدريجياً في الخدمات مثل شبكات المياه
                والصرف الصحي والكهرباء والطرق المعبدة، خاصة منذ أواخر العهد
                العثماني وحتى اليوم، حيث تستمر مشاريع الترميم وإعادة الإعمار
                للحفاظ على الهوية التاريخية للمدينة.
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
