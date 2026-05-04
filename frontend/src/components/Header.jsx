import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';

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
          scrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="w-full px-4 py-3 lg:max-w-7xl lg:mx-auto lg:px-6 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button - Left */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-gray-700 order-1"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo - Center on mobile, Left on desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 order-2 lg:order-1 mx-auto lg:mx-0"
            >
              <img
                src="/syrian-eagle-logo.svg"
                alt="Syrian Arab Republic"
                className="h-10 w-10 lg:h-12 lg:w-12 flex-shrink-0"
              />
              <div className={`text-xs lg:text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="font-bold text-gray-800 whitespace-nowrap leading-tight">
                  {language === 'ar' ? 'الجمهورية العربية السورية' : 'SYRIAN ARAB REPUBLIC'}
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 order-2">
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

            {/* Language Switcher */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-teal-700 hover:bg-teal-50 transition-all duration-200 order-3"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'ar' ? 'ENGLISH' : 'العربية'}</span>
            </motion.button>

            {/* Mobile Language Switcher - Right */}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="lg:hidden px-3 py-1.5 text-xs font-bold text-gray-700 border border-gray-300 rounded order-3"
            >
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-[60] w-72 bg-white shadow-2xl lg:hidden"
          >
            <div className="p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <nav className={`mt-16 flex flex-col gap-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-teal-700 hover:bg-gray-50 transition-colors duration-200 font-medium text-base py-3 px-4 rounded-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;