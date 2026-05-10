import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const OldTown = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';

  const paragraphs = [
    'تقع البلدة القديمة في قلب مدينة الخليل، وتُعد من أقدم المناطق التاريخية في فلسطين، حيث تمتد جذورها لآلاف السنين وتحمل بين أزقتها ذاكرة حضارية وثقافية غنية.',
    'تتميز البلدة بطابعها المعماري الأصيل، وأسواقها التراثية، ومبانيها الحجرية القديمة التي تعكس تاريخ المدينة وهويتها العربية والإسلامية.',
    'وتضم البلدة القديمة العديد من المعالم الدينية والأثرية والأسواق التقليدية التي ما زالت تنبض بالحياة حتى اليوم، مما يجعلها شاهدًا حيًا على تعاقب الحضارات عبر الزمن.',
  ];

  const cards = [
    {
      title: 'الطبيعة المعمارية',
      to: '/architecture',
      image:
        'https://images.unsplash.com/photo-1633788229431-a9683c7388dd?w=900&q=80',
      alt: 'الطبيعة المعمارية',
    },
    {
      title: 'المهن والحرف',
      to: '/crafts',
      image:
        'https://images.unsplash.com/photo-1562457141-8c1df886f92c?w=900&q=80',
      alt: 'المهن والحرف',
    },
  ];

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="oldtown-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      <section
        className="pt-24 lg:pt-28 pb-14 lg:pb-20 px-6 lg:px-12"
        data-testid="oldtown-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* Banner Image with notch + protruding circle (mobile-style) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative mb-8 lg:mb-12"
            data-testid="oldtown-banner"
          >
            <div
              className="relative w-full h-[220px] sm:h-[300px] lg:h-[380px] overflow-hidden shadow-xl"
              style={{
                borderRadius: '24px',
                WebkitMaskImage:
                  'radial-gradient(circle 42px at 50% 100%, transparent 41px, #000 42px)',
                maskImage:
                  'radial-gradient(circle 42px at 50% 100%, transparent 41px, #000 42px)',
              }}
            >
              <img
                src="/old-town.webp"
                alt="البلدة القديمة - الخليل"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Protruding circle — sits half inside the notch, half below */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full shadow-md"
              style={{
                bottom: '-22px',
                width: '60px',
                height: '60px',
                backgroundColor: '#D9D9D9',
              }}
              data-testid="oldtown-notch-circle"
            />
          </motion.div>

          {/* Bottom: 2 sub-cards (left) + title/text (right) */}
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
              <h1
                className="text-base lg:text-lg font-bold mb-4"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
                data-testid="oldtown-title"
              >
                البلدة القديمة
              </h1>
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
                    className="relative block w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-md group hover:shadow-2xl transition-shadow duration-300"
                    data-testid={`oldtown-card-${i}`}
                  >
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
