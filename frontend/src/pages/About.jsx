import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUp from '../components/CountUp';
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Handshake,
  Users,
  CheckCircle2,
  Building2,
  Calendar,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const About = ({ language, setLanguage, t }) => {
  const a = t.about;
  const isAr = language === 'ar';

  const vmCards = [
    { title: a.missionTitle, text: a.missionText, Icon: Target },
    { title: a.visionTitle, text: a.visionText, Icon: Eye },
    { title: a.valuesTitle, text: a.valuesText, Icon: Heart },
  ];

  const statIcons = [Handshake, Users, CheckCircle2, Building2, Calendar];

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="about-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url('/pattern-original.webp')`,
            backgroundSize: 'cover',
            borderRadius: '50%',
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img
                src="/hrc-courtyard.webp"
                alt="مبنى لجنة إعمار الخليل - الفناء"
                className="w-full h-full object-cover"
                loading="eager"
                fetchpriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/40 via-transparent to-transparent" />
            </div>
            <div
              className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl border-4"
              style={{ borderColor: '#BA9B70' }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className={`order-1 lg:order-2 ${isAr ? 'text-right' : 'text-left'}`}
          >
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
              style={{
                color: '#553B2E',
                fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              {a.heroTitle}
            </h1>
            <div
              className={`h-[2px] w-32 mb-8 ${isAr ? 'mr-0' : 'ml-0'}`}
              style={{ backgroundColor: '#BA9B70' }}
            />
            <p
              className="text-lg lg:text-xl leading-loose mb-10"
              style={{ color: '#3a3a3a', lineHeight: '1.85' }}
            >
              {a.heroParagraph}
            </p>
            
              <motion.a
  href="#vision"
  whileHover={{ y: -2 }}
  className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg"
  style={{ backgroundColor: '#BA9B70', color: '#fff' }}
>
  <span>{a.heroCta}</span>
  <ArrowLeft className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
</motion.a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — VISION & MISSION */}
      <section
        id="vision"
        className="py-10 lg:py-14 px-6 lg:px-12"
        style={{ backgroundColor: '#FAF6EE' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2
              className="text-base lg:text-lg font-bold mb-4"
              style={{
                color: '#553B2E',
                fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              {a.vmTitle}
            </h2>
            <div className="h-[2px] w-24 mx-auto" style={{ backgroundColor: '#BA9B70' }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {vmCards.map(({ title, text, Icon }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-3xl pt-16 pb-10 px-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div
                  className="absolute -top-9 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: '#BA9B70' }}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#553B2E' }}>
                  {title}
                </h3>
                <div className="h-[2px] w-12 mx-auto mb-5" style={{ backgroundColor: '#BA9B70' }} />
                <p className="text-base leading-loose" style={{ color: '#5a5a5a', lineHeight: '1.85' }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT + TIMELINE */}
      <section className="py-10 lg:py-14 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="lg:col-span-4 order-3 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
              <img
                src="/hrc-archstairs.webp"
                alt="مدخل مبنى لجنة إعمار الخليل"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-4 order-2"
          >
            <div className={`relative ${isAr ? 'pr-8' : 'pl-8'}`}>
              <div
                className={`absolute top-2 bottom-2 w-[2px] ${isAr ? 'right-2' : 'left-2'}`}
                style={{ backgroundColor: '#BA9B70', opacity: 0.4 }}
              />
              <div className="space-y-10">
                {a.timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative"
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full ring-4 ring-white ${
                        isAr ? '-right-[3px]' : '-left-[3px]'
                      }`}
                      style={{ backgroundColor: '#553B2E' }}
                    />
                    <div className={`${isAr ? 'pr-6' : 'pl-6'}`}>
                      <span
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                        style={{ backgroundColor: '#BA9B70', color: '#fff' }}
                      >
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold mb-1" style={{ color: '#553B2E' }}>
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#6b6b6b', lineHeight: '1.9' }}>
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className={`lg:col-span-4 order-1 lg:order-3 ${isAr ? 'text-right' : 'text-left'}`}
          >
            <h2
              className="text-base lg:text-lg font-bold mb-4"
              style={{
                color: '#553B2E',
                fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              {a.aboutTitle}
            </h2>
            <div className="h-[2px] w-24 mb-8" style={{ backgroundColor: '#BA9B70' }} />
            <p className="text-sm lg:text-base leading-loose mb-5" style={{ color: '#3a3a3a', lineHeight: '1.85' }}>
              {a.aboutText1}
            </p>
            <p className="text-sm lg:text-base leading-loose mb-10" style={{ color: '#3a3a3a', lineHeight: '1.85' }}>
              {a.aboutText2}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-2"
              style={{ borderColor: '#553B2E', color: '#553B2E' }}
            >
              <span>{a.aboutCta}</span>
              <ArrowLeft className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — STATISTICS */}
      <section className="py-12 lg:py-16 px-4 lg:px-12" style={{ backgroundColor: '#FAF6EE' }}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white shadow-lg overflow-hidden px-6 py-10 lg:px-10 lg:py-12">
            <div className="flex flex-wrap justify-around items-center gap-y-8 gap-x-6">
              {a.stats.map((stat, i) => {
                const Icon = statIcons[i] || Handshake;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex flex-col items-center text-center px-3 min-w-[120px]"
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: '#FAF1E0' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#553B2E' }} strokeWidth={2} />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: '#553B2E' }}>
                      <CountUp
                        to={parseFloat(stat.value.replace(/[^0-9.]/g, ''))}
                        prefix={stat.value.includes('+') ? '+' : ''}
                        suffix={stat.value.includes('%') ? '%' : ''}
                        duration={2}
                      />
                    </div>
                    <div className="text-xs font-medium" style={{ color: '#7a7a7a' }}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default About;