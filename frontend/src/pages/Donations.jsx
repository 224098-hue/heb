import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Donations = ({ language, setLanguage, t }) => {
  const isAr = language === 'ar';

  const [donateForm, setDonateForm] = useState({ name: '', email: '', phone: '' });
  const [feedbackForm, setFeedbackForm] = useState({
    isResident: '',
    name: '',
    email: '',
    message: '',
  });

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    toast.success('شكراً لك! سنتواصل معك قريباً لإتمام التبرع.');
    setDonateForm({ name: '', email: '', phone: '' });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    toast.success('تم إرسال ملاحظاتك بنجاح، شكراً لك.');
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
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 px-6 lg:px-12" data-testid="donations-why">
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
                  src="https://images.unsplash.com/photo-1633788229431-a9683c7388dd?w=900&q=80"
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
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10 leading-tight"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
                data-testid="donations-title"
              >
                لماذا تتبرع؟
              </h1>

              <p
                className="text-base lg:text-lg mb-6"
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                يساهم التبرع في تطوير البلدة القديمة في دعم المجتمع المحلي عبر
                ترميم المرافق التاريخية وتحسين البيئة العمرانية، مما يؤدي إلى
                تعزيز الاقتصاد المحلي والحفاظ على هوية المكان.
              </p>

              <p
                className="text-base lg:text-lg mb-10"
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                تبرعك الآن... فرصة تحدث فرقاً حقيقياً لأهل و مستقبل البلدة
                القديمة.
              </p>

              <a
                href="#donate-form"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-2"
                style={{ borderColor: '#553B2E', color: '#553B2E' }}
                data-testid="donations-make-difference-btn"
              >
                اصنع فرقاً
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Donate Form */}
      <section
        id="donate-form"
        className="py-16 lg:py-20 px-6 lg:px-12"
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
                className="text-3xl lg:text-5xl font-bold mb-6"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                بادر ... وتبرع
              </h2>
              <p
                className="text-base lg:text-lg mb-3"
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                إما أن نبقى نشاهد التاريخ ينهار... أو نكون نحن من يعيده للحياة.
              </p>
              <p
                className="text-base lg:text-lg"
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                بدعمك، البلدة القديمة ستنهض من جديد.
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
                  الاسم كاملاً
                </label>
                <input
                  type="text"
                  required
                  value={donateForm.name}
                  onChange={(e) => setDonateForm({ ...donateForm, name: e.target.value })}
                  placeholder="الاسم كاملاً"
                  className={inputClass}
                  style={inputStyle}
                  data-testid="donate-name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} style={labelStyle}>
                    البريد الإلكتروني
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
                    رقم الهاتف
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
                  تبرع الآن
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* SECTION 3: Feedback Form */}
      <section className="py-16 lg:py-24 px-6 lg:px-12" data-testid="feedback-section">
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
                الملاحظات والاقتراحات
              </p>
              <div className="h-[2px] w-32 mb-6" style={{ backgroundColor: '#BA9B70' }} />
              <h2
                className="text-3xl lg:text-5xl font-bold mb-6"
                style={{
                  color: '#553B2E',
                  fontFamily: "'Qasira', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                رأيكَ يهمنا
              </h2>
              <p
                className="text-base lg:text-lg"
                style={{ color: '#3a3a3a', lineHeight: '2.1' }}
              >
                نقدر مساهمتك للبلدة القديمة، ونأخذ بعين الاعتبار ملاحظاتك
                واقتراحاتك لمساعدتنا على جعل البلدة القديمة مكاناً أفضل وتراثاً
                محفوظاً. نأمل مشاركة آراءك معنا من خلال إكمال النموذج أدناه.
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
                  هل أنت مقيم حالياً في البلدة القديمة؟
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="resident"
                      value="نعم"
                      checked={feedbackForm.isResident === 'نعم'}
                      onChange={(e) =>
                        setFeedbackForm({ ...feedbackForm, isResident: e.target.value })
                      }
                      className="w-4 h-4 accent-[#553B2E]"
                      data-testid="feedback-resident-yes"
                    />
                    <span style={{ color: '#3a3a3a' }}>نعم</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="resident"
                      value="لا"
                      checked={feedbackForm.isResident === 'لا'}
                      onChange={(e) =>
                        setFeedbackForm({ ...feedbackForm, isResident: e.target.value })
                      }
                      className="w-4 h-4 accent-[#553B2E]"
                      data-testid="feedback-resident-no"
                    />
                    <span style={{ color: '#3a3a3a' }}>لا</span>
                  </label>
                </div>
              </div>

              <div>
                <label className={labelClass} style={labelStyle}>
                  الاسم كاملاً
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
                  البريد الإلكتروني
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
                  أدخل نص الرسالة هنا
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
                  إرسال
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
