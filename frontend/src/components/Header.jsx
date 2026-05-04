import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const Header = ({ language, setLanguage, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#' },
    { label: t.nav.brandStory, href: '#story' },
    { label: t.nav.brandElements, href: '#elements' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.mediaCenter, href: '#press' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-white/95'
        }`}
      >
        <div className="w-full px-4 py-3 lg:max-w-7xl lg:mx-auto lg:px-6 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button - Left */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-gray-800 order-1"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 order-2 mx-auto">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-700 hover:text-teal-700 transition-colors duration-200 font-medium text-sm"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Logo - Right on mobile and desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 order-3"
            >
              <div className={`text-xs lg:text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="font-semibold text-gray-800 whitespace-nowrap leading-tight">
                  {language === 'ar' ? (
                    <>
                      <div className="text-[11px] lg:text-xs">الجمهورية العربية السورية</div>
                      <div className="text-[9px] lg:text-[10px] opacity-80">SYRIAN ARAB REPUBLIC</div>
                    </>
                  ) : (
                    <>
                      <div className="text-xs">SYRIAN ARAB REPUBLIC</div>
                      <div className="text-[10px] opacity-80">الجمهورية العربية السورية</div>
                    </>
                  )}
                </div>
              </div>
              <img
                src="/syrian-eagle-official.png"
                alt="Syrian Arab Republic"
                className="h-12 w-12 lg:h-14 lg:w-14 flex-shrink-0 object-contain"
              />
            </motion.div>

            {/* Desktop Language Switcher */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-teal-700 hover:bg-teal-50 transition-all duration-200 order-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'ar' ? 'ENGLISH' : 'العربية'}</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Dark Theme */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-gradient-to-b from-gray-900 to-black lg:hidden"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Close button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 left-6 p-2 text-white"
                aria-label="Close"
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>

              {/* Logo and Title */}
              <div className="flex flex-col items-center mt-12 mb-8">
                <img
                  src="/syrian-eagle-official.png"
                  alt="Syrian Arab Republic"
                  className="h-20 w-20 mb-4 object-contain"
                />
                <div className="text-center text-white">
                  <div className="text-base font-semibold mb-1">الجمهورية العربية السورية</div>
                  <div className="text-xs opacity-80">SYRIAN ARAB REPUBLIC</div>
                </div>
              </div>

              {/* Language Switcher Button */}
              <button
                onClick={() => {
                  setLanguage(language === 'ar' ? 'en' : 'ar');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-4 mb-8 bg-gradient-to-r from-yellow-700 to-yellow-600 text-white rounded-lg flex items-center justify-center gap-3 font-semibold text-lg"
              >
                <Globe className="w-5 h-5" />
                <span>ENGLISH</span>
              </button>

              {/* Navigation Menu */}
              <nav className={`flex flex-col gap-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-yellow-500 transition-colors duration-200 font-medium text-xl py-3"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;