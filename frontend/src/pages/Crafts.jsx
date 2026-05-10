import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// المحتوى — صور حرف يدوية مناسبة للموضوع
const crafts = [
  {
    title: 'صناعة الزجاج',
    text: [
      'في الخليل تتركز تاريخياً في حارة القزازين داخل البلدة القديمة، واعتمدت على صهر رمل بريّة الخليل داخل أفران تصل حرارتها إلى 1500 درجة مئوية لتشكيل الزجاج.',
      'في بداية القرن العشرين أصبحت المهنة مرتبطة بعائلة النتشة وتوارثتها عبر الأجيال، ومع الوقت حدثت تغييرات في المواد حيث استُخدم الزجاج المكسّر بدل الرمل.',
      'انتقلت بعض المصانع إلى مدخل المدينة، وتحوّلت المنتجات من الاستخدام اليومي قديماً إلى أغراض الزينة حالياً، مع تنويع أساليب الزخرفة باستخدام الألوان والمواد المختلفة.',
    ],
    image:
      'https://images.unsplash.com/photo-1606590580676-c5cf1fec04ad?w=900&q=80',
  },
  {
    title: 'صناعة الخزف',
    text: [
      'في الخليل ظهرت في النصف الثاني من القرن العشرين، وبدأت مرتبطة بالفخار حيث كانت الأدوات تُطلى بالطين الأبيض وتُحرق ثم تُزجَّج وتُزيَّن.',
      'تطورت لاحقاً لتقوم على استيراد مادة الطين الخام وتشكيلها بقوالب جبسية، ثم حرقها في أفران بدرجات حرارة عالية، يليها الرسم والتزجيج وإعادة الحرق.',
      'تُنتَج أدوات مثل الصحون والكاسات والجاطات، ويتم بيعها محلياً وتصدير جزءاً كبيراً منها إلى أوروبا وأمريكا اللاتينية.',
    ],
    image:
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80',
  },
  {
    title: 'صناعة الفخار',
    text: [
      'في الخليل من أقدم الحرف في البلدة القديمة، وارتبطت بعائلات مثل عائلة الفأخوري التي ورثت المهنة جيلاً بعد جيل.',
      'انتشرت في عدة مناطق داخل البلدة القديمة، وكانت تعتمد على الطين المحلي لصناعة أدوات منزلية مثل الصحون والجرار والزبادي، باستخدام الدولاب ثم تزيينها وحرقها في الأفران.',
      'كانت تُباع منتجاتها في الأسواق المحلية، وشكَّلت جزءاً مهماً من الحياة اليومية في المدينة.',
    ],
    image:
      'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=900&q=80',
  },
  {
    title: 'معاصر زيت الزيتون',
    text: [
      'في الخليل، أو ما يُعرف بـ"بد الزيت"، كانت منتشرة في المدينة ومحيطها وتعتمد على نظام تقليدي لهرس الزيتون باستخدام الحجر ثم عصره لاستخراج الزيت.',
      'توزعت هذه المعاصر في أحياء البلدة القديمة بأسماء وعائلات مختلفة، وكانت من أهم وسائل إنتاج زيت الزيتون محلياً.',
      'ومع تطور الزمن في النصف الثاني من القرن العشرين، تراجعت هذه المعاصر التقليدية أو أهملت واستُبدلت بالآلات الحديثة.',
    ],
    image:
      'https://images.unsplash.com/photo-1601313987070-2e6a3c0f0adb?w=900&q=80',
  },
];

const intro = [
  'لطالما شكَّلت الحرف والمهن التقليدية جزءًا أصيلًا من هوية البلدة القديمة في الخليل، حيث توارثها الحرفيون جيلًا بعد جيل، محافظين على تفاصيلها اليدوية وروحها التراثية.',
  'تعكس هذه المهن تاريخ المدينة وثقافتها، وتروي حكاية الإنسان الذي صنع من الحجارة والخشب والزجاج والنحاس فنًا يعبّر عن أصالة المكان.',
];

const Crafts = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="crafts-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      <section
        className="pt-32 lg:pt-40 pb-10 px-6 lg:px-12"
        data-testid="crafts-hero"
      >
        <div className="max-w-7xl mx-auto">
          {/* Top heading */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`text-4xl lg:text-6xl font-bold mb-8 lg:mb-10 ${
              isAr ? 'text-right' : 'text-left'
            }`}
            style={{
              color: '#553B2E',
              fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
            }}
            data-testid="crafts-title"
          >
            المهن و الحرف
          </motion.h1>

          {/* Banner image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden shadow-xl mb-16 lg:mb-24"
          >
            <img
              src={crafts[0].image}
              alt="المهن والحرف في الخليل"
              className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Section: Subtitle + intro paragraph + 4 preview cards */}
      <section className="px-6 lg:px-12 mb-16 lg:mb-24" data-testid="crafts-intro-section">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 lg:mb-16 items-start"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Right (RTL): Subtitle */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`lg:col-span-5 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h2
                className="text-2xl lg:text-4xl font-bold leading-tight"
                style={{
                  color: '#553B2E',
                  fontFamily:
                    "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                استكشف الإمكانيات المهنية
                <br />
                داخل البلدة القديمة
              </h2>
            </motion.div>

            {/* Left (RTL): Intro paragraph */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className={`lg:col-span-7 ${isAr ? 'text-right' : 'text-left'}`}
            >
              {intro.map((p, i) => (
                <p
                  key={i}
                  className="text-base lg:text-lg mb-4"
                  style={{ color: '#3a3a3a', lineHeight: '2.1' }}
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </div>

          {/* 4 preview cards */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {crafts.map((c, i) => (
              <motion.a
                key={c.title}
                href={`#craft-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative block w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow"
                data-testid={`craft-preview-${i}`}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/80 via-[#553B2E]/20 to-transparent" />
                <div
                  className={`absolute bottom-4 ${isAr ? 'right-4' : 'left-4'} text-white text-sm lg:text-lg font-bold`}
                  style={{
                    fontFamily:
                      "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                  }}
                >
                  {c.title}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Detailed crafts list */}
      <section className="px-6 lg:px-12 pb-24 lg:pb-32" data-testid="crafts-detail-section">
        <div className="max-w-6xl mx-auto">
          {crafts.map((c, i) => (
            <motion.div
              key={c.title}
              id={`craft-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start py-12 lg:py-16 ${
                i !== 0 ? 'border-t border-gray-200' : ''
              }`}
              dir={isAr ? 'rtl' : 'ltr'}
              data-testid={`craft-detail-${i}`}
            >
              {/* Text — Right in RTL */}
              <div
                className={`md:col-span-8 ${isAr ? 'text-right' : 'text-left'}`}
              >
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-6"
                  style={{
                    color: '#553B2E',
                    fontFamily:
                      "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                  }}
                >
                  {c.title}
                </h3>
                {c.text.map((para, k) => (
                  <p
                    key={k}
                    className="text-base lg:text-lg mb-4"
                    style={{ color: '#3a3a3a', lineHeight: '2.1' }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Image — Left in RTL */}
              <div className="md:col-span-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Crafts;
