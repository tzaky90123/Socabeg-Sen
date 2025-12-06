import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroSlide, Page } from '../types';
import { ASSETS } from '../constants';

interface HeroProps {
  slides: HeroSlide[];
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ slides, currentPage, onPageChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const pageButtons = [
    { label: 'HOME', page: Page.HOME },
    { label: 'ABOUT', page: Page.ABOUT },
    { label: 'CONSTRUCTION', page: Page.CONSTRUCTION },
    { label: 'REAL ESTATE', page: Page.REAL_ESTATE },
    { label: 'MINES', page: Page.MINES },
    { label: 'CAREERS', page: Page.CAREERS },
    { label: 'CONTACT', page: Page.CONTACT },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-socabeg-navy">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-socabeg-navy/60" /> {/* Overlay */}
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          key={`text-${currentSlide}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 uppercase tracking-wide">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-2xl text-socabeg-light mb-8 font-light">
            {slides[currentSlide].subtitle}
          </p>
          <button className="px-8 py-3 border-2 border-socabeg-gold text-socabeg-gold hover:bg-socabeg-gold hover:text-socabeg-navy transition-all duration-300 font-semibold uppercase tracking-wider text-sm">
            {slides[currentSlide].cta}
          </button>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <button onClick={prevSlide} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors">
        <ChevronLeft size={48} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors">
        <ChevronRight size={48} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-socabeg-gold w-8' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>

      {/* Page Switch Buttons (Sticky Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-wrap justify-center items-center bg-black/30 backdrop-blur-sm border-t border-white/10">
        {pageButtons.map((btn) => (
          <button
            key={btn.page}
            onClick={() => onPageChange(btn.page)}
            className={`
              flex-1 md:flex-none px-4 py-4 md:py-6 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300
              ${currentPage === btn.page ? 'bg-socabeg-gold text-socabeg-navy' : 'text-white hover:bg-white/10 hover:text-socabeg-gold'}
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;