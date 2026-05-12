import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Map, Facebook } from 'lucide-react';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const MAP_URL =
  'https://yellowpages.com.ps/companies/30072?utm_source=chatgpt.com';

const CONTACT_DATA = {
  ar: {
    title: 'تواصل معنا',
    intro: 'تواصل مع لجنة إعمار الخليل للحصول على المساعدة والمعلومات التي تحتاجها حول مشاريع الترميم وأحياء البلدة القديمة. يمكنك الاتصال بنا مباشرة عبر الهاتف أو مراسلتنا عبر البريد الإلكتروني، كما يسعدنا استقبالكم في مقرنا أو زيارتنا عبر تحديد موقعنا على الخريطة.',
    contactUs: 'تواصل معنا',
    emailLabel: 'البريد الالكتروني',
    location: 'الموقع',
    address: 'راس سوق سكافية البلدة القديمة الخليل فلسطين',
    social: 'مواقع التواصل الاجتماعي',
    discover: 'اكتشف موقعنا عن الخريطة',
    showMap: 'اعرض الخريطة',
    formTitle: 'اترك رســالتــك',
    formIntro1: 'استخدم النموذج أدناه للتواصل مع لجنة إعمار الخليل مباشرةً. سواء كان لديك استفسار، ملاحظة، أو طلب مساعدة، نحن هنا لخدمتكم والرد عليكم بأسرع وقت ممكن.',
    formIntro2: 'ما عليك سوى تعبئة بياناتك وكتابة رسالتك ثم الضغط على "إرسال"، وسنقوم بالرد عليكم في أقرب وقت',
    subject: 'الموضوع',
    fullName: 'الاسم كامل',
    org: 'المؤسسة',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    msg: 'رسالتك:',
    send: 'إرسال',
    toastOk: 'تم إرسال رسالتك بنجاح، سنرد عليكم بأقرب وقت.',
  },
  en: {
    title: 'Contact Us',
    intro: 'Get in touch with the Hebron Rehabilitation Committee for assistance and information about restoration projects and Old Town neighborhoods. You can call us directly, email us, visit our office, or locate us on the map.',
    contactUs: 'Contact',
    emailLabel: 'Email',
    location: 'Location',
    address: 'Ras Souk Iskafiyya, Old Town, Hebron, Palestine',
    social: 'Social Media',
    discover: 'Find our location on the map',
    showMap: 'Show Map',
    formTitle: 'Leave a Message',
    formIntro1: 'Use the form below to contact the Hebron Rehabilitation Committee directly. Whether you have a question, comment, or request for help, we are here to serve you and reply as quickly as possible.',
    formIntro2: 'Simply fill in your details, write your message, then click "Send" — we will reply as soon as possible.',
    subject: 'Subject',
    fullName: 'Full Name',
    org: 'Organization',
    email: 'Email',
    phone: 'Phone',
    msg: 'Your message:',
    send: 'Send',
    toastOk: 'Your message was sent successfully. We will reply soon.',
  },
};

const Contact = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const d = CONTACT_DATA[language];

  const [form, setForm] = useState({
    subject: '',
    name: '',
    org: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(d.toastOk);
    setForm({ subject: '', name: '', org: '', email: '', phone: '', message: '' });
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border outline-none transition-colors duration-200 focus:border-[#553B2E] bg-white';
  const labelClass = 'block text-sm font-medium mb-2';
  const labelStyle = { color: '#553B2E' };
  const inputStyle = { borderColor: '#D9CDB6', color: '#3a3a3a' };

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="contact-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* SECTION 1: Contact info + Map */}
      <section
        className="pt-24 lg:pt-28 pb-16 lg:pb-20 px-6 lg:px-12"
        data-testid="contact-info-section"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Right (RTL): Contact info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`lg:col-span-7 order-2 lg:order-2 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
                data-testid="contact-title"
              >
                {d.title}
              </h1>
              <div
                className="h-[3px] w-24 mb-8"
                style={{ backgroundColor: '#BA9B70' }}
              />

              <p
                className="text-sm lg:text-base mb-12 max-w-2xl"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.intro}
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F1E9D6' }}
                  >
                    <Phone className="w-5 h-5" style={{ color: '#553B2E' }} />
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#553B2E' }}>
                      {d.contactUs}
                    </p>
                    <a
                      href="tel:022226993"
                      className="text-base hover:underline"
                      style={{ color: '#5a5249' }}
                      data-testid="contact-phone"
                    >
                      022226993
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F1E9D6' }}
                  >
                    <Mail className="w-5 h-5" style={{ color: '#553B2E' }} />
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#553B2E' }}>
                      {d.emailLabel}
                    </p>
                    <a
                      href="mailto:hebronhrc@gmail.com"
                      className="text-base hover:underline"
                      style={{ color: '#5a5249' }}
                      data-testid="contact-email"
                    >
                      hebronhrc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F1E9D6' }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: '#553B2E' }} />
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#553B2E' }}>
                      {d.location}
                    </p>
                    <p
                      className="text-base"
                      style={{ color: '#5a5249', lineHeight: '1.8' }}
                    >
                      {d.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F1E9D6' }}
                  >
                    <Facebook className="w-5 h-5" style={{ color: '#553B2E' }} />
                  </div>
                  <div>
                    <p className="font-bold mb-1" style={{ color: '#553B2E' }}>
                      {d.social}
                    </p>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base underline"
                      style={{ color: '#5a5249' }}
                      data-testid="contact-facebook"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Map link */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#F1E9D6' }}
                >
                  <Map className="w-5 h-5" style={{ color: '#553B2E' }} />
                </div>
                <p
                  className="text-base self-center"
                  style={{ color: '#5a5249' }}
                >
                  {d.discover}
                </p>
              </div>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-300 hover:bg-[#553B2E] hover:text-white"
                style={{ borderColor: '#553B2E', color: '#553B2E' }}
                data-testid="contact-show-map-btn"
              >
                {d.showMap}
              </a>
            </motion.div>

            {/* Left (RTL): Map image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5 order-1 lg:order-1"
            >
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-3xl overflow-hidden shadow-xl aspect-[3/5] bg-gray-100 group"
                data-testid="contact-map-image"
              >
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80"
                  alt="موقع لجنة إعمار الخليل"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/30 to-transparent" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Leave message form */}
      <section
        className="py-10 lg:py-14 px-6 lg:px-12"
        style={{ backgroundColor: '#FAF6EE' }}
        data-testid="contact-form-section"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Right (RTL): Title + intro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`lg:col-span-5 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                  letterSpacing: '0.05em',
                }}
              >
                {d.formTitle}
              </h2>
              <p
                className="text-sm lg:text-base mb-5"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.formIntro1}
              </p>
              <p
                className="text-sm lg:text-base"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.formIntro2}
              </p>
            </motion.div>

            {/* Left (RTL): Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className={`lg:col-span-7 space-y-6 ${isAr ? 'text-right' : 'text-left'}`}
              data-testid="contact-form"
            >
              <div>
                <label className={labelClass} style={labelStyle}>
                  {d.subject}
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                  data-testid="contact-subject"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} style={labelStyle}>
                    {d.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    data-testid="contact-name"
                  />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>
                    {d.org}
                  </label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    data-testid="contact-org"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} style={labelStyle}>
                    {d.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    data-testid="contact-form-email"
                  />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>
                    {d.phone}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    data-testid="contact-form-phone"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} style={labelStyle}>
                  {d.msg}
                </label>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  data-testid="contact-message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="px-10 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: '#553B2E', color: '#fff' }}
                  data-testid="contact-submit-btn"
                >
                  {d.send}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer language={language} t={t} />
    </div>
  );
};

export default Contact;
