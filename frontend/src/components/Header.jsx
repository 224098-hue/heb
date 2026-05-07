import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = ({ language, setLanguage, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-white/95'
        }`}
      >
        <div className="w-full px-4 py-4 lg:max-w-7xl lg:mx-auto lg:px-6 lg:py-5">
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
              <a href="#" className="text-gray-700 hover:text-[#BA9B70] transition-colors duration-200 font-medium text-sm">
                {t.nav.home}
              </a>
              
              {/* About Us Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-[#BA9B70] transition-colors duration-200 font-medium text-sm">
                  {t.nav.aboutUs}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.aboutUsInfo}</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.aboutUsGoals}</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.team}</a>
                </div>
              </div>

              {/* Discover Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-[#BA9B70] transition-colors duration-200 font-medium text-sm">
                  {t.nav.discover}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.oldTown}</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.crafts}</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.architecture}</a>
                  <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.ibrahimiMosque}</a>
                </div>
              </div>

              <a href="#" className="text-gray-700 hover:text-[#BA9B70] transition-colors duration-200 font-medium text-sm">
                {t.nav.achievements}
              </a>
              <a href="#" className="text-gray-700 hover:text-[#BA9B70] transition-colors duration-200 font-medium text-sm">
                {t.nav.donations}
              </a>
              <a href="#" className="text-gray-700 hover:text-[#BA9B70] transition-colors duration-200 font-medium text-sm">
                {t.nav.contact}
              </a>
            </nav>

            {/* Logo - Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center order-3"
            >
              <img
                src="/logo-full.jpg"
                alt="لجنة إعمار الخليل - Hebron Reconstruction Committee"
                className="h-12 lg:h-16 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Language Switcher */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-[#BA9B70] hover:bg-[#BA9B70] hover:text-white transition-all duration-200 order-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'ar' ? 'ENGLISH' : 'العربية'}</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Pure Black */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black lg:hidden"
          >
            <div className="p-6 h-full flex flex-col overflow-y-auto">
              {/* Close button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 left-6 p-2 text-white"
                aria-label="Close"
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>

              {/* Logo and Title */}
              <div className="flex flex-col items-center mt-16 mb-10">
                <img
                  src="/logo-full.jpg"
                  alt="لجنة إعمار الخليل - Hebron Reconstruction Committee"
                  className="h-24 w-auto mb-5 object-contain"
                />
              </div>

              {/* Language Switcher Button */}
              <button
                onClick={() => {
                  setLanguage(language === 'ar' ? 'en' : 'ar');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-4 mb-10 rounded-lg flex items-center justify-center gap-3 font-bold text-base tracking-wide"
                style={{ backgroundColor: '#BA9B70', color: '#ffffff' }}
              >
                <Globe className="w-5 h-5" />
                <span>ENGLISH</span>
              </button>

              {/* Navigation Menu */}
              <nav className="flex flex-col gap-1 text-right">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#BA9B70] transition-colors duration-200 font-medium text-xl py-4 border-b border-white/10"
                >
                  {t.nav.home}
                </a>

                {/* About Us */}
                <div>
                  <button
                    onClick={() => setAboutUsOpen(!aboutUsOpen)}
                    className="w-full text-white hover:text-[#BA9B70] transition-colors duration-200 font-medium text-xl py-4 border-b border-white/10 flex items-center justify-between"
                  >
                    <span>{t.nav.aboutUs}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${aboutUsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {aboutUsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <a href="#" className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.aboutUsInfo}</a>
                        <a href="#" className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.aboutUsGoals}</a>
                        <a href="#" className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.team}</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Discover */}
                <div>
                  <button
                    onClick={() => setDiscoverOpen(!discoverOpen)}
                    className="w-full text-white hover:text-[#BA9B70] transition-colors duration-200 font-medium text-xl py-4 border-b border-white/10 flex items-center justify-between"
                  >
                    <span>{t.nav.discover}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${discoverOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {discoverOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <a href="#" className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.oldTown}</a>
                        <a href="#" className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.crafts}</a>
                        <a href="#" className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.architecture}</a>
                        <a href="#" className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.ibrahimiMosque}</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#BA9B70] transition-colors duration-200 font-medium text-xl py-4 border-b border-white/10"
                >
                  {t.nav.achievements}
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#BA9B70] transition-colors duration-200 font-medium text-xl py-4 border-b border-white/10"
                >
                  {t.nav.donations}
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#BA9B70] transition-colors duration-200 font-medium text-xl py-4 border-b border-white/10"
                >
                  {t.nav.contact}
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;