import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentCards from '../components/ContentCards';
import Manifesto from '../components/Manifesto';
import StorySection from '../components/StorySection';
import UniteSection from '../components/UniteSection';
import PressSection from '../components/PressSection';
import Footer from '../components/Footer';

const Home = ({ language, setLanguage, t }) => (
  <>
    <Header language={language} setLanguage={setLanguage} t={t} />
    <Hero language={language} t={t} />
    <ContentCards language={language} t={t} />
    <Manifesto language={language} t={t} />
    <StorySection language={language} t={t} />
    <UniteSection language={language} t={t} />
    <PressSection language={language} t={t} />
    <Footer language={language} t={t} />
  </>
);

export default Home;
