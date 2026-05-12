import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = ({ language, setLanguage, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const isAboutActive = () =>
    ['/about', '/goals', '/team'].includes(location.pathname);

  const isDiscoverActive = () =>
    ['/old-town', '/crafts', '/architecture', '/ibrahimi-mosque'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopLinkClass = (active) =>
    `relative font-medium text-sm transition-colors duration-200 pb-1 ${
      active
        ? 'text-[#BA9B70]'
        : 'text-gray-700 hover:text-[#BA9B70]'
    }`;

  const ActiveBar = () => (
    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BA9B70] rounded-full" />
  );

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

            {/* Mobile Menu Button — على اليسار في RTL */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-800 order-3"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 order-2 mx-auto">

              <Link to="/" className={`${desktopLinkClass(isActive('/'))} relative`}>
                {t.nav.home}
                {isActive('/') && <ActiveBar />}
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group">
                <button className={`${desktopLinkClass(isAboutActive())} relative flex items-center gap-1`}>
                  {t.nav.aboutUs}
                  <ChevronDown className="w-4 h-4" />
                  {isAboutActive() && <ActiveBar />}
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.aboutUsInfo}</Link>
                  <Link to="/goals" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.aboutUsGoals}</Link>
                  <Link to="/team" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.team}</Link>
                </div>
              </div>

              {/* Discover Dropdown */}
              <div className="relative group">
                <button className={`${desktopLinkClass(isDiscoverActive())} relative flex items-center gap-1`}>
                  {t.nav.discover}
                  <ChevronDown className="w-4 h-4" />
                  {isDiscoverActive() && <ActiveBar />}
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/old-town" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.oldTown}</Link>
                  <Link to="/crafts" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.crafts}</Link>
                  <Link to="/architecture" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.architecture}</Link>
                  <Link to="/ibrahimi-mosque" className="block px-4 py-3 text-gray-700 hover:bg-[#BA9B70] hover:text-white transition-colors text-sm">{t.nav.ibrahimiMosque}</Link>
                </div>
              </div>

              <Link to="/achievements" className={`${desktopLinkClass(isActive('/achievements'))} relative`}>
                {t.nav.achievements}
                {isActive('/achievements') && <ActiveBar />}
              </Link>

              <Link to="/donations" className={`${desktopLinkClass(isActive('/donations'))} relative`}>
                {t.nav.donations}
                {isActive('/donations') && <ActiveBar />}
              </Link>

              <Link to="/contact" className={`${desktopLinkClass(isActive('/contact'))} relative`}>
                {t.nav.contact}
                {isActive('/contact') && <ActiveBar />}
              </Link>

            </nav>

            {/* Logo — على اليمين في RTL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center order-1"
            >
              <Link to="/">
                <img
                  src="/logo-optimized.webp"
                  alt="لجنة إعمار الخليل - Hebron Reconstruction Committee"
                  fetchpriority="high"
                  decoding="async"
                  className="h-11 lg:h-16 w-auto object-contain"
                />
              </Link>
            </motion.div>

            {/* Language Switcher — على اليسار في RTL */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-[#BA9B70] hover:bg-[#BA9B70] hover:text-white transition-all duration-200 order-3"
              data-testid="lang-toggle-desktop"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'ar' ? 'ENGLISH' : 'العربية'}</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black lg:hidden"
          >
            <div className="px-6 pt-16 pb-6 h-full flex flex-col overflow-y-auto">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 left-6 p-2 text-white"
                aria-label="Close"
              >
                <X className="w-7 h-7" strokeWidth={1.5} />
              </button>

              <button
                onClick={() => { setLanguage(language === 'ar' ? 'en' : 'ar'); setMobileMenuOpen(false); }}
                className="w-full py-4 mb-6 rounded-lg flex items-center justify-center gap-3 font-bold text-base tracking-wide"
                style={{ backgroundColor: '#BA9B70', color: '#ffffff' }}
              >
                <Globe className="w-5 h-5" />
                <span>ENGLISH</span>
              </button>

              <nav className="flex flex-col gap-1 text-right">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium text-xl py-4 border-b border-white/10 transition-colors ${isActive('/') ? 'text-[#BA9B70]' : 'text-white hover:text-[#BA9B70]'}`}
                >
                  {t.nav.home}
                </Link>

                <div>
                  <button
                    onClick={() => setAboutUsOpen(!aboutUsOpen)}
                    className={`w-full font-medium text-xl py-4 border-b border-white/10 flex items-center justify-between transition-colors ${isAboutActive() ? 'text-[#BA9B70]' : 'text-white hover:text-[#BA9B70]'}`}
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
                        <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.aboutUsInfo}</Link>
                        <Link to="/goals" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.aboutUsGoals}</Link>
                        <Link to="/team" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.team}</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => setDiscoverOpen(!discoverOpen)}
                    className={`w-full font-medium text-xl py-4 border-b border-white/10 flex items-center justify-between transition-colors ${isDiscoverActive() ? 'text-[#BA9B70]' : 'text-white hover:text-[#BA9B70]'}`}
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
                        <Link to="/old-town" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.oldTown}</Link>
                        <Link to="/crafts" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.crafts}</Link>
                        <Link to="/architecture" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.architecture}</Link>
                        <Link to="/ibrahimi-mosque" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-[#BA9B70] py-3 pr-6 text-lg">{t.nav.ibrahimiMosque}</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/achievements" onClick={() => setMobileMenuOpen(false)} className={`font-medium text-xl py-4 border-b border-white/10 transition-colors ${isActive('/achievements') ? 'text-[#BA9B70]' : 'text-white hover:text-[#BA9B70]'}`}>
                  {t.nav.achievements}
                </Link>
                <Link to="/donations" onClick={() => setMobileMenuOpen(false)} className={`font-medium text-xl py-4 border-b border-white/10 transition-colors ${isActive('/donations') ? 'text-[#BA9B70]' : 'text-white hover:text-[#BA9B70]'}`}>
                  {t.nav.donations}
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`font-medium text-xl py-4 border-b border-white/10 transition-colors ${isActive('/contact') ? 'text-[#BA9B70]' : 'text-white hover:text-[#BA9B70]'}`}>
                  {t.nav.contact}
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;