import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Header = ({ language, setLanguage, t }) => {
  const [scrolled, setScrolled] = useState(false);

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Coat_of_arms_of_Syria_%282024%29.svg/200px-Coat_of_arms_of_Syria_%282024%29.svg.png"
              alt="Syrian Arab Republic"
              className="h-12 w-auto"
            />
            <div className={`text-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="font-semibold text-gray-800">
                {language === 'ar' ? 'الجمهورية العربية السورية' : 'SYRIAN ARAB REPUBLIC'}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-teal-700 hover:bg-teal-50 transition-all duration-200"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">{language === 'ar' ? 'ENGLISH' : 'العربية'}</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;