import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentCards from './components/ContentCards';
import Manifesto from './components/Manifesto';
import StorySection from './components/StorySection';
import UniteSection from './components/UniteSection';
import PressSection from './components/PressSection';
import Footer from './components/Footer';
import { translations } from './utils/mockData';

function App() {
  const [language, setLanguage] = useState('ar');
  const [loading, setLoading] = useState(true);
  const t = translations[language];

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  if (loading) {
    return <Loader onLoadComplete={() => setLoading(false)} />;
  }

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Hero language={language} t={t} />
      <ContentCards language={language} t={t} />
      <Manifesto language={language} t={t} />
      <StorySection language={language} t={t} />
      <UniteSection language={language} t={t} />
      <PressSection language={language} t={t} />
      <Footer language={language} t={t} />
    </div>
  );
}

export default App;
