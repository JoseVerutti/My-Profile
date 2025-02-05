import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../data/portfolio.json';

const ExperienceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.experience.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.experience.length - 1 : prev - 1));
  };

  // Only show navigation if there are more than 1 items
  const showNavigation = data.experience.length > 1;

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl w-full relative">
        <div className="flex items-center justify-center">
          {showNavigation && (
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          <div className={`max-w-2xl ${showNavigation ? 'mx-4 md:mx-8' : 'mx-0'}`}>
            <div 
              className="bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 space-y-4 ring-1 ring-white/10"
              style={{
                opacity: 1,
                transform: 'none',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {data.experience[currentIndex].title}
                </h3>
                <p className="text-blue-400 font-medium">
                  {data.experience[currentIndex].company}
                </p>
                <p className="text-gray-400">
                  {data.experience[currentIndex].date}
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {data.experience[currentIndex].description}
              </p>
            </div>
          </div>

          {showNavigation && (
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
        
        {showNavigation && (
          <div className="flex justify-center gap-2 mt-6">
            {data.experience.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-blue-400/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;