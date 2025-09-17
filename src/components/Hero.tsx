import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import railwayHeroBg from '@/assets/railway-hero-bg.jpg';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textSliderRef = useRef<HTMLDivElement>(null);

  const textSlides = [
    "Building the Future of Indian Railways",
    "30+ Years of Engineering Excellence", 
    "Manufacturing & Supply of MBC Sleepers",
    "Flash Butt Welding Solutions",
    "USFD Testing Services",
    "Diesel Locomotive Spares"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );

      // Text slider animation
      const slides = textSliderRef.current?.children;
      if (slides) {
        gsap.set(slides, { opacity: 0, y: 30 });
        
        const tl = gsap.timeline({ repeat: -1 });
        
        for (let i = 0; i < slides.length; i++) {
          tl.to(slides[i], { opacity: 1, y: 0, duration: 0.8 })
            .to(slides[i], { opacity: 1, duration: 2 })
            .to(slides[i], { opacity: 0, y: -30, duration: 0.8 });
        }
      }

      // Floating bubbles animation
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
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(45, 139, 71, 0.85), rgba(27, 122, 140, 0.85)), url(${railwayHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Bubbles */}
      <div className="absolute inset-0">
        <div className="floating-bubble absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="floating-bubble absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
        <div className="floating-bubble absolute bottom-40 left-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
        <div className="floating-bubble absolute bottom-20 right-40 w-16 h-16 bg-railway-yellow/30 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="hero-content max-w-4xl mx-auto">
          {/* Animated Text Slider */}
          <div className="mb-8 h-24 flex items-center justify-center">
            <div ref={textSliderRef} className="relative">
              {textSlides.map((text, index) => (
                <h1 
                  key={index}
                  className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  {text}
                </h1>
              ))}
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Manufacturing & supply of MBC Sleepers, Flash Butt Welding, USFD Testing, 
            and Diesel Locomotive Spares with three decades of trusted excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-railway-yellow mb-2">30+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-railway-yellow mb-2">2L+</div>
              <div className="text-white/80">Flash Butt Joints</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-railway-yellow mb-2">40K+</div>
              <div className="text-white/80">Tkm USFD Testing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-railway-yellow mb-2">100%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Railway Track Pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="railway-track h-8 bg-gradient-to-r from-railway-red/50 to-accent/50"></div>
      </div>
    </section>
  );
};

export default Hero;