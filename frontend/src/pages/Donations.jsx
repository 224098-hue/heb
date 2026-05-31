import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const DONATIONS_DATA = {
  ar: {
    whyTitle: 'لماذا تتبرع؟',
    whyP1: 'يساهم التبرع في تطوير البلدة القديمة في دعم المجتمع المحلي عبر ترميم المرافق التاريخية وتحسين البيئة العمرانية، مما يؤدي إلى تعزيز الاقتصاد المحلي والحفاظ على هوية المكان.',
    whyP2: 'تبرعك الآن... فرصة تحدث فرقاً حقيقياً لأهل و مستقبل البلدة القديمة.',
    whyCta: 'اصنع فرقاً',
    donateTitle: 'بادر ... وتبرع',
    donateLead: 'إما أن نبقى نشاهد التاريخ ينهار... أو نكون نحن من يعيده للحياة.',
    donateSub: 'بدعمك، البلدة القديمة ستنهض من جديد.',
    fullName: 'الاسم كاملاً',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    donateBtn: 'تبرع الآن',
    feedbackPre: 'الملاحظات والاقتراحات',
    feedbackTitle: 'رأيكَ يهمنا',
    feedbackIntro: 'نقدر مساهمتك للبلدة القديمة، ونأخذ بعين الاعتبار ملاحظاتك واقتراحاتك لمساعدتنا على جعل البلدة القديمة مكاناً أفضل وتراثاً محفوظاً. نأمل مشاركة آراءك معنا من خلال إكمال النموذج أدناه.',
    residentQ: 'هل أنت مقيم حالياً في البلدة القديمة؟',
    yes: 'نعم',
    no: 'لا',
    msgLabel: 'أدخل نص الرسالة هنا',
    sendBtn: 'إرسال',
    donateToast: 'شكراً لك! سنتواصل معك قريباً لإتمام التبرع.',
    feedbackToast: 'تم إرسال ملاحظاتك بنجاح، شكراً لك.',
  },
  en: {
    whyTitle: 'Why Donate?',
    whyP1: 'Donations contribute to the development of the Old Town and support the local community by restoring historic facilities and improving the urban environment — boosting the local economy and preserving the identity of the place.',
    whyP2: 'Your donation now is an opportunity to make a real difference for the people and future of the Old Town.',
    whyCta: 'Make a Difference',
    donateTitle: 'Take Action... Donate',
    donateLead: 'Either we keep watching history fall apart... or we become the ones who bring it back to life.',
    donateSub: 'With your support, the Old Town will rise again.',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    donateBtn: 'Donate Now',
    feedbackPre: 'Feedback & Suggestions',
    feedbackTitle: 'Your Opinion Matters',
    feedbackIntro: 'We appreciate your contribution to the Old Town, and we value your feedback and suggestions to help us make the Old Town a better place and preserve its heritage. Please share your views by filling out the form below.',
    residentQ: 'Are you currently a resident of the Old Town?',
    yes: 'Yes',
    no: 'No',
    msgLabel: 'Enter your message here',
    sendBtn: 'Send',
    donateToast: 'Thank you! We will contact you soon to complete the donation.',
    feedbackToast: 'Your feedback was sent successfully. Thank you.',
  },
};

const Donations = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';
  const d = DONATIONS_DATA[language];

  const [donateForm, setDonateForm] = useState({ name: '', email: '', phone: '' });
  const [feedbackForm, setFeedbackForm] = useState({
    isResident: '',
    name: '',
    email: '',
    message: '',
  });

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    toast.success(d.donateToast);
    setDonateForm({ name: '', email: '', phone: '' });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    toast.success(d.feedbackToast);
    setFeedbackForm({ isResident: '', name: '', email: '', message: '' });
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border outline-none transition-colors duration-200 focus:border-[#553B2E] bg-white';
  const labelClass = 'block text-sm font-medium mb-2';
  const labelStyle = { color: '#553B2E' };
  const inputStyle = { borderColor: '#D9CDB6', color: '#3a3a3a' };

  return (
    <div className={`bg-white ${isAr ? 'rtl' : 'ltr'}`} data-testid="donations-page">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {/* SECTION 1: Why Donate */}
      <section className="pt-24 lg:pt-28 pb-16 lg:pb-20 px-6 lg:px-12" data-testid="donations-why">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Image — LEFT in RTL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-gray-100">
                <img
                  src="Gemini_Generated_Image_qodvbxqodvbxqodv.webp"
                  alt="البلدة القديمة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#553B2E]/30 to-transparent" />
              </div>
            </motion.div>

            {/* Text — RIGHT in RTL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`lg:col-span-7 order-1 lg:order-2 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
                data-testid="donations-title"
              >
                {d.whyTitle}
              </h1>
              <div
                className="h-[3px] w-24 mb-8"
                style={{ backgroundColor: '#BA9B70' }}
              />

              <p
                className="text-sm lg:text-base mb-6"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.whyP1}
              </p>

              <p
                className="text-sm lg:text-base mb-10"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.whyP2}
              </p>

              <a
                href="#donate-form"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-2"
                style={{ borderColor: '#553B2E', color: '#553B2E' }}
                data-testid="donations-make-difference-btn"
              >
                {d.whyCta}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Donate Form */}
      <section
        id="donate-form"
        className="py-10 lg:py-14 px-6 lg:px-12"
        data-testid="donations-form-section"
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
                className="text-base lg:text-lg font-bold mb-6"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {d.donateTitle}
              </h2>
              <p
                className="text-sm lg:text-base mb-3"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.donateLead}
              </p>
              <p
                className="text-sm lg:text-base"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.donateSub}
              </p>
            </motion.div>

            {/* Left (RTL): Form */}
            <motion.form
              onSubmit={handleDonateSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className={`lg:col-span-7 space-y-6 ${isAr ? 'text-right' : 'text-left'}`}
              data-testid="donate-form"
            >
              <div>
                <label className={labelClass} style={labelStyle}>
                  {d.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={donateForm.name}
                  onChange={(e) => setDonateForm({ ...donateForm, name: e.target.value })}
                  placeholder={d.fullName}
                  className={inputClass}
                  style={inputStyle}
                  data-testid="donate-name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} style={labelStyle}>
                    {d.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={donateForm.email}
                    onChange={(e) => setDonateForm({ ...donateForm, email: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    data-testid="donate-email"
                  />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>
                    {d.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={donateForm.phone}
                    onChange={(e) => setDonateForm({ ...donateForm, phone: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    data-testid="donate-phone"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: '#553B2E', color: '#fff' }}
                  data-testid="donate-submit-btn"
                >
                  {d.donateBtn}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* SECTION 3: Feedback Form */}
      <section className="py-10 lg:py-14 px-6 lg:px-12" data-testid="feedback-section">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Right (RTL): Title + paragraph */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`lg:col-span-5 ${isAr ? 'text-right' : 'text-left'}`}
            >
              <p
                className="text-sm font-medium mb-2"
                style={{ color: '#7a6248' }}
              >
                {d.feedbackPre}
              </p>
              <div className="h-[2px] w-32 mb-6" style={{ backgroundColor: '#BA9B70' }} />
              <h2
                className="text-base lg:text-lg font-bold mb-6"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                {d.feedbackTitle}
              </h2>
              <p
                className="text-sm lg:text-base"
                style={{ color: '#3a3a3a', lineHeight: '1.85' }}
              >
                {d.feedbackIntro}
              </p>
            </motion.div>

            {/* Left (RTL): Form */}
            <motion.form
              onSubmit={handleFeedbackSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className={`lg:col-span-7 space-y-6 ${isAr ? 'text-right' : 'text-left'}`}
              data-testid="feedback-form"
            >
              <div>
                <label className={labelClass} style={labelStyle}>
                  {d.residentQ}
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="resident"
                      value="yes"
                      checked={feedbackForm.isResident === 'yes'}
                      onChange={(e) =>
                        setFeedbackForm({ ...feedbackForm, isResident: e.target.value })
                      }
                      className="w-4 h-4 accent-[#553B2E]"
                      data-testid="feedback-resident-yes"
                    />
                    <span style={{ color: '#3a3a3a' }}>{d.yes}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="resident"
                      value="no"
                      checked={feedbackForm.isResident === 'no'}
                      onChange={(e) =>
                        setFeedbackForm({ ...feedbackForm, isResident: e.target.value })
                      }
                      className="w-4 h-4 accent-[#553B2E]"
                      data-testid="feedback-resident-no"
                    />
                    <span style={{ color: '#3a3a3a' }}>{d.no}</span>
                  </label>
                </div>
              </div>

              <div>
                <label className={labelClass} style={labelStyle}>
                  {d.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={feedbackForm.name}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                  data-testid="feedback-name"
                />
              </div>

              <div>
                <label className={labelClass} style={labelStyle}>
                  {d.email}
                </label>
                <input
                  type="email"
                  required
                  value={feedbackForm.email}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                  data-testid="feedback-email"
                />
              </div>

              <div>
                <label className={labelClass} style={labelStyle}>
                  {d.msgLabel}
                </label>
                <textarea
                  rows={5}
                  required
                  value={feedbackForm.message}
                  onChange={(e) =>
                    setFeedbackForm({ ...feedbackForm, message: e.target.value })
                  }
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  data-testid="feedback-message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: '#553B2E', color: '#fff' }}
                  data-testid="feedback-submit-btn"
                >
                  {d.sendBtn}
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

export default Donations;
