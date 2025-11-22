import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import trainHeroVideo from '@/assets/video1.mp4';
import secondVideo from '@/assets/video2.mp4';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0); // 🔁 Track which video is playing
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const videos = [trainHeroVideo, secondVideo];

  const slides = [
    { title: 'Building the Future of Indian Railways', subtitle: '30+ Years of Engineering Excellence', number: '01' },
    { title: 'Manufacturing & Supply of MBC Sleepers', subtitle: 'Quality Standards That Define Excellence', number: '02' },
    { title: 'Flash Butt Welding & USFD Testing', subtitle: 'Precision Engineering for Rail Infrastructure', number: '03' },
  ];

  // 🔄 Auto slide every 7s
  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ▶️ When first video ends, start the next one
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  // 🧩 Scroll to next section
  const handleScrollExplore = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
<section
  ref={heroRef}
  className="relative h-screen overflow-hidden bg-gradient-to-tr from-red-700/60 via-red-500/40 to-transparent pt-32"
>

      {/* 🎥 Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          key={currentVideo}
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* ✨ Animated Text */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
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
              transition={{ duration: 1 }}
              className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white uppercase text-sm font-semibold hover:bg-primary/90 transition rounded-md shadow-md"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white uppercase text-sm font-semibold hover:bg-white/10 hover:border-primary transition rounded-md"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 🌟 Rating Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white bg-black/40 backdrop-blur-sm px-6 py-3 rounded-md border border-white/20"
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
        <span className="mx-2 text-lg font-bold">4.5</span>
        <span className="text-sm tracking-wider uppercase">800+ Reviews</span>
      </motion.div>

      {/* ⬇️ Scroll to Explore */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={handleScrollExplore}
        className="absolute bottom-10 left-6 flex items-center gap-4 text-white border border-white/30 px-6 py-3 rounded-md bg-black/30 cursor-pointer hover:bg-black/50 transition"
      >
        <div className="w-6 h-9 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
        </div>
        <span className="text-xs uppercase tracking-[0.2em]">Scroll to Explore</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
