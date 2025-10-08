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
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
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
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );

      gsap.to('.floating-bubble', {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 1
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
              <div 
                className="relative h-full w-full flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(1, 5, 77, 0.7), rgba(2, 42, 97, 0.8)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Floating Bubbles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="floating-bubble absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="floating-bubble absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="floating-bubble absolute bottom-40 left-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
                  <div className="floating-bubble absolute bottom-20 right-40 w-16 h-16 bg-accent/30 rounded-full blur-xl"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                  <div className="hero-content max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-3xl text-white/90 mb-12 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    
                    {index === 0 && (
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button variant="hero" size="xl" className="group">
                          Explore Services
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="xl" 
                          className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-navy"
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
        <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-navy" />
        <CarouselNext className="right-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-navy" />
      </Carousel>
    </section>
  );
};

export default Hero;
