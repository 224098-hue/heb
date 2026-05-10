import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Goals from './pages/Goals';
import Team from './pages/Team';
import OldTown from './pages/OldTown';
import Crafts from './pages/Crafts';
import Architecture from './pages/Architecture';
import IbrahimiMosque from './pages/IbrahimiMosque';
import { translations } from './utils/mockData';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [language, setLanguage] = useState('ar');
  const [loading, setLoading] = useState(true);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  if (loading) {
    return <Loader onLoadComplete={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home language={language} setLanguage={setLanguage} t={t} />
            }
          />
          <Route
            path="/about"
            element={
              <About language={language} setLanguage={setLanguage} t={t} />
            }
          />
          <Route
            path="/goals"
            element={
              <Goals language={language} setLanguage={setLanguage} t={t} />
            }
          />
          <Route
            path="/team"
            element={
              <Team language={language} setLanguage={setLanguage} t={t} />
            }
          />
          <Route
            path="/old-town"
            element={
              <OldTown language={language} setLanguage={setLanguage} t={t} />
            }
          />
          <Route
            path="/crafts"
            element={
              <Crafts language={language} setLanguage={setLanguage} t={t} />
            }
          />
          <Route
            path="/architecture"
            element={
              <Architecture language={language} setLanguage={setLanguage} t={t} />
            }
          />
          <Route
            path="/ibrahimi-mosque"
            element={
              <IbrahimiMosque language={language} setLanguage={setLanguage} t={t} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
