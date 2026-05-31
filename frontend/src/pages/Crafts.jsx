import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const CRAFTS_DATA = {
  ar: {
    pageTitle: 'المهن و الحرف',
    sectionTitle: 'استكشف الإمكانيات المهنية\nداخل البلدة القديمة',
    intro: [
      'لطالما شكَّلت الحرف والمهن التقليدية جزءًا أصيلًا من هوية البلدة القديمة في الخليل، حيث توارثها الحرفيون جيلًا بعد جيل، محافظين على تفاصيلها اليدوية وروحها التراثية.',
      'تعكس هذه المهن تاريخ المدينة وثقافتها، وتروي حكاية الإنسان الذي صنع من الحجارة والخشب والزجاج والنحاس فنًا يعبّر عن أصالة المكان.',
    ],
    crafts: [
      {
        title: 'صناعة الزجاج',
        text: [
          'في الخليل تتركز تاريخياً في حارة القزازين داخل البلدة القديمة، واعتمدت على صهر رمل بريّة الخليل داخل أفران تصل حرارتها إلى 1500 درجة مئوية لتشكيل الزجاج.',
          'في بداية القرن العشرين أصبحت المهنة مرتبطة بعائلة النتشة وتوارثتها عبر الأجيال، ومع الوقت حدثت تغييرات في المواد حيث استُخدم الزجاج المكسّر بدل الرمل.',
          'انتقلت بعض المصانع إلى مدخل المدينة، وتحوّلت المنتجات من الاستخدام اليومي قديماً إلى أغراض الزينة حالياً، مع تنويع أساليب الزخرفة باستخدام الألوان والمواد المختلفة.',
        ],
      },
      {
        title: 'صناعة الخزف',
        text: [
          'في الخليل ظهرت في النصف الثاني من القرن العشرين، وبدأت مرتبطة بالفخار حيث كانت الأدوات تُطلى بالطين الأبيض وتُحرق ثم تُزجَّج وتُزيَّن.',
          'تطورت لاحقاً لتقوم على استيراد مادة الطين الخام وتشكيلها بقوالب جبسية، ثم حرقها في أفران بدرجات حرارة عالية، يليها الرسم والتزجيج وإعادة الحرق.',
          'تُنتَج أدوات مثل الصحون والكاسات والجاطات، ويتم بيعها محلياً وتصدير جزءاً كبيراً منها إلى أوروبا وأمريكا اللاتينية.',
        ],
      },
      {
        title: 'صناعة الفخار',
        text: [
          'في الخليل من أقدم الحرف في البلدة القديمة، وارتبطت بعائلات مثل عائلة الفأخوري التي ورثت المهنة جيلاً بعد جيل.',
          'انتشرت في عدة مناطق داخل البلدة القديمة، وكانت تعتمد على الطين المحلي لصناعة أدوات منزلية مثل الصحون والجرار والزبادي، باستخدام الدولاب ثم تزيينها وحرقها في الأفران.',
          'كانت تُباع منتجاتها في الأسواق المحلية، وشكَّلت جزءاً مهماً من الحياة اليومية في المدينة.',
        ],
      },
      {
        title: 'معاصر زيت الزيتون',
        text: [
          'في الخليل، أو ما يُعرف بـ"بد الزيت"، كانت منتشرة في المدينة ومحيطها وتعتمد على نظام تقليدي لهرس الزيتون باستخدام الحجر ثم عصره لاستخراج الزيت.',
          'توزعت هذه المعاصر في أحياء البلدة القديمة بأسماء وعائلات مختلفة، وكانت من أهم وسائل إنتاج زيت الزيتون محلياً.',
          'ومع تطور الزمن في النصف الثاني من القرن العشرين، تراجعت هذه المعاصر التقليدية أو أهملت واستُبدلت بالآلات الحديثة.',
        ],
      },
    ],
  },
  en: {
    pageTitle: 'Crafts & Trades',
    sectionTitle: 'Explore the Professional Heritage\nof the Old Town',
    intro: [
      'Traditional crafts and trades have long been an authentic part of the Old Town\'s identity in Hebron, passed down by artisans generation after generation, preserving their handmade details and heritage spirit.',
      'These crafts reflect the city\'s history and culture, telling the story of those who turned stone, wood, glass, and copper into art expressing the place\'s authenticity.',
    ],
    crafts: [
      {
        title: 'Glassmaking',
        text: [
          'In Hebron, glassmaking has historically been concentrated in the Glassmakers\' Quarter within the Old Town. It relied on melting Hebron sand in furnaces reaching 1500°C to shape the glass.',
          'In the early 20th century, the craft became linked to the Natshe family and was inherited across generations. Over time, materials changed and broken glass replaced sand.',
          'Some workshops moved to the city entrance, and products evolved from daily-use items to decorative pieces, with diversified decoration techniques using various colors and materials.',
        ],
      },
      {
        title: 'Ceramics',
        text: [
          'Ceramics in Hebron emerged in the second half of the 20th century, starting linked to pottery — tools were coated in white clay, fired, then glazed and decorated.',
          'Later it developed to rely on imported raw clay shaped in plaster molds, then fired in high-temperature kilns, followed by painting, glazing, and re-firing.',
          'Products such as plates, cups, and bowls are made and sold locally, with a large portion exported to Europe and Latin America.',
        ],
      },
      {
        title: 'Pottery',
        text: [
          'Pottery in Hebron is one of the oldest crafts in the Old Town, associated with families like the Fakhouri family who inherited the craft generation after generation.',
          'It spread across several areas inside the Old Town, relying on local clay to produce household items such as plates, jars, and yogurt pots, using the wheel, then decorating and firing them.',
          'Their products were sold in local markets and formed an important part of daily life in the city.',
        ],
      },
      {
        title: 'Olive Oil Presses',
        text: [
          'Olive oil presses in Hebron, known as "Bid Al-Zayt", were widespread in and around the city, relying on a traditional stone system for crushing olives and pressing them to extract the oil.',
          'These presses were distributed across the Old Town neighborhoods under different names and families, and were among the most important means of producing olive oil locally.',
          'With the development of time in the second half of the 20th century, these traditional presses declined or were abandoned and replaced by modern machines.',
        ],
      },
    ],
  },
};

// صور التفاصيل التحتية
const CRAFT_IMAGES = [
  '/image (68).webp',
  '/image (86).jpg',
  '/image (96).jpg',
  '/image (29).jpg',
];

// صور الكاردات العلوية — مختلفة
const PREVIEW_IMAGES = [
  '/image (68).webp',
  '/image (86).jpg',
  '/image (96).jpg',
  '/image (29).jpg',
];

const Crafts = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const c = CRAFTS_DATA[language];
  const intro = c.intro;
  const crafts = c.crafts.map((cr, i) => ({
    ...cr,
    image: CRAFT_IMAGES[i],
    previewImage: PREVIEW_IMAGES[i],
  }));

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="crafts-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* ── HERO ── */}
      <div className="relative w-full h-screen min-h-[500px] max-h-[700px]">
        <img
          src="/Screenshot_٢٠٢٦٠٥١١_٢٠٤٤١٧_Gallery.webp"
          alt="المهن والحرف في الخليل"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`absolute bottom-12 lg:bottom-16 ${isAr ? 'right-8 lg:right-16 text-right' : 'left-8 lg:left-16 text-left'}`}
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
            style={{ fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif" }}
            data-testid="crafts-title"
          >
            {c.pageTitle}
          </h1>
        </motion.div>
      </div>

      {/* ── Subtitle + intro + 4 cards ── */}
      <section className="px-6 lg:px-12 mt-16 lg:mt-20 mb-16 lg:mb-20" data-testid="crafts-intro-section">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-20 items-center"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`flex items-center ${isAr ? 'justify-end text-right' : 'justify-start text-left'}`}
            >
              <h2
                className="text-2xl lg:text-3xl font-bold leading-relaxed whitespace-pre-line"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {c.sectionTitle}
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className={`${isAr ? 'text-right' : 'text-left'}`}
            >
              {intro.map((p, i) => (
                <p
                  key={i}
                  className="text-base lg:text-lg mb-5 last:mb-0"
                  style={{ color: '#3a3a3a', lineHeight: '2' }}
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </div>

          {/* 4 preview cards — صور مختلفة */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {crafts.map((craft, i) => (
              <motion.a
                key={craft.title}
                href={`#craft-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative block w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow"
                data-testid={`craft-preview-${i}`}
              >
                <img
                  src={craft.previewImage}
                  alt={craft.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/80 via-[#553B2E]/20 to-transparent" />
                <div
                  className={`absolute bottom-4 ${isAr ? 'right-4' : 'left-4'} text-white text-sm lg:text-base font-bold`}
                  style={{ fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif" }}
                >
                  {craft.title}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed crafts list — صور مختلفة ── */}
      <section className="px-6 lg:px-12 pb-14 lg:pb-20" data-testid="crafts-detail-section">
        <div className="max-w-6xl mx-auto">
          {crafts.map((craft, i) => (
            <motion.div
              key={craft.title}
              id={`craft-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start py-10 lg:py-14 ${
                i !== 0 ? 'border-t border-gray-200' : ''
              }`}
              dir={isAr ? 'rtl' : 'ltr'}
              data-testid={`craft-detail-${i}`}
            >
              <div className="md:col-span-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square bg-gray-100">
                  <img
                    src={craft.image}
                    alt={craft.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={`md:col-span-8 ${isAr ? 'text-right' : 'text-left'}`}>
                <h3
                  className="text-base lg:text-lg font-bold mb-6"
                  style={{
                    color: '#553B2E',
                    fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                  }}
                >
                  {craft.title}
                </h3>
                {craft.text.map((para, k) => (
                  <p
                    key={k}
                    className="text-sm lg:text-base mb-4"
                    style={{ color: '#3a3a3a', lineHeight: '1.85' }}
                  >
                    {para}
                  </p>
                ))}
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