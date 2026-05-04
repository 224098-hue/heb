import React from 'react';
import { motion } from 'framer-motion';
import { sectionImages } from '../utils/mockData';

const ContentCards = ({ language, t }) => {
  const cards = [
    {
      title: t.cards.brandStory,
      subtitle: t.cards.brandStorySubtitle,
      image: sectionImages.brandStory,
    },
    {
      title: t.cards.brandElements,
      subtitle: t.cards.brandElementsSubtitle,
      image: sectionImages.brandElements,
    },
    {
      title: t.cards.launchVideo,
      subtitle: '',
      image: sectionImages.launchVideo,
    },
  ];

  return (
    <section className={`py-20 px-6 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className={`absolute bottom-0 left-0 right-0 p-6 text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                {card.subtitle && <p className="text-sm opacity-90">{card.subtitle}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCards;