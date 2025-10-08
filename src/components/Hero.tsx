import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import trainHero1 from '@/assets/train-hero-1.jpg';
import trainHero2 from '@/assets/train-hero-2.jpg';
import trainHero3 from '@/assets/train-hero-3.jpg';
import gsap from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const heroSlides = [
    {
      image: trainHero1,
      title: 'Building the Future of Indian Railways',
      subtitle: '30+ Years of Engineering Excellence'
    },
    {
      image: trainHero2,
      title: 'Manufacturing & Supply of MBC Sleepers',
      subtitle: 'Quality Standards That Define Excellence'
    },
    {
      image: trainHero3,
      title: 'Flash Butt Welding & USFD Testing',
      subtitle: 'Precision Engineering for Rail Infrastructure'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );

      // Continuous vertical parallax animation for background
      gsap.to('.hero-bg-animated', {
        y: -30,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true
      });

      // Floating particles animation
      gsap.to('.floating-particle', {
        y: -20,
        x: 10,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
        className="w-full h-screen"
      >
        <CarouselContent className="h-screen">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-screen p-0">
              <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
                {/* Animated Background Layer */}
                <div 
                  className="hero-bg-animated absolute inset-0 w-full h-[120%]"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    top: '-10%'
                  }}
                />
                
                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/80" />
                
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="floating-particle absolute top-20 left-[10%] w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="floating-particle absolute top-32 left-[25%] w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="floating-particle absolute top-48 right-[15%] w-2 h-2 bg-primary/40 rounded-full"></div>
                  <div className="floating-particle absolute top-64 right-[30%] w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="floating-particle absolute bottom-32 left-[20%] w-2 h-2 bg-secondary/30 rounded-full"></div>
                  <div className="floating-particle absolute bottom-48 right-[25%] w-3 h-3 bg-white/30 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 text-center relative z-10">
                  <div className="hero-content max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 leading-relaxed font-light">
                      {slide.subtitle}
                    </p>
                    
                    {index === 0 && (
                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button 
                          variant="default" 
                          size="lg" 
                          className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          Explore Services
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="border-2 border-white/50 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-navy px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          View Projects
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-navy transition-all duration-300" />
        <CarouselNext className="right-4 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-navy transition-all duration-300" />
      </Carousel>
    </section>
  );
};

export default Hero;
