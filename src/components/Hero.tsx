import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import trainHero1 from '@/assets/train-hero-1.jpg';
import trainHero2 from '@/assets/train-hero-2.jpg';
import trainHero3 from '@/assets/train-hero-3.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const slides = [
    {
      image: trainHero1,
      title: 'Building the Future of Indian Railways',
      subtitle: '30+ Years of Engineering Excellence',
      number: '01',
    },
    {
      image: trainHero2,
      title: 'Manufacturing & Supply of MBC Sleepers',
      subtitle: 'Quality Standards That Define Excellence',
      number: '02',
    },
    {
      image: trainHero3,
      title: 'Flash Butt Welding & USFD Testing',
      subtitle: 'Precision Engineering for Rail Infrastructure',
      number: '03',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleScrollExplore = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-red-600">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Pagination Dots */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              idx === currentSlide
                ? 'bg-primary border-primary scale-125'
                : 'bg-transparent border-white/40 hover:border-primary hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Scroll to Explore */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={handleScrollExplore}
        className="absolute bottom-12 left-8 z-20 flex items-center gap-4 text-white border border-white/30 px-6 py-3 backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all cursor-pointer group"
      >
        <div className="w-6 h-9 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5 group-hover:border-primary transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/60 rounded-full group-hover:bg-primary"
          />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to Explore</span>
      </motion.div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white uppercase tracking-wider text-sm font-semibold hover:bg-primary/90 transition-all"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white uppercase tracking-wider text-sm font-semibold hover:bg-white/10 hover:border-primary transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right Slide Numbers & Thumbnails */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end gap-4">
        <div className="flex flex-col gap-8 mb-8">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`text-right transition-all duration-500 ${
                idx === currentSlide
                  ? 'text-primary text-6xl font-bold'
                  : 'text-white/30 text-4xl font-light hover:text-white/60'
              }`}
            >
              {slide.number}.
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 border border-white/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-white/70 hover:text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 border border-white/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 text-white/70 hover:text-primary" />
          </button>
        </div>

        {/* Next Thumbnail */}
        <div className="w-24 h-16 overflow-hidden border-2 border-white/30 hover:border-primary transition-all cursor-pointer mt-4" onClick={nextSlide}>
          <img
            src={slides[(currentSlide + 1) % slides.length].image}
            alt="Next slide"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      {/* Bottom Center - Star Ratings */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 text-white backdrop-blur-sm bg-black/20 px-8 py-4 border border-white/20">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <div className="w-px h-6 bg-white/30"></div>
        <span className="text-lg font-bold">4.5</span>
        <div className="w-px h-6 bg-white/30"></div>
        <span className="text-sm uppercase tracking-wider">800+ Reviews</span>
      </div>
    </section>
  );
};

export default HeroSection;
