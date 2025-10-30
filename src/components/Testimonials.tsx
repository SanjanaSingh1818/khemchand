import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      designation: 'Chief Engineer, Central Railway',
      zone: 'Central Railway',
      message: 'Khemchand Group has consistently delivered high-quality MBC sleepers for our projects. Their commitment to excellence and timely delivery makes them our preferred partner.',
    },
    {
      name: 'Amit Sharma',
      designation: 'Senior Manager, Northern Railway',
      zone: 'Northern Railway',
      message: 'The flash butt welding services provided by Khemchand are world-class. Their technical expertise and quality standards have significantly improved our rail infrastructure.',
    },
    {
      name: 'Priya Desai',
      designation: 'Project Director, Western Railway',
      zone: 'Western Railway',
      message: 'USFD testing services from Khemchand Group have been instrumental in ensuring the safety and reliability of our rail network. Highly professional team!',
    },
    {
      name: 'Suresh Reddy',
      designation: 'Chief Technical Officer, Southern Railway',
      zone: 'Southern Railway',
      message: 'Working with Khemchand Group has been a great experience. Their innovative solutions and dedication to quality make them stand out in the industry.',
    },
    {
      name: 'Vikram Singh',
      designation: 'Railway Board Official',
      zone: 'Railway Board',
      message: '30+ years of excellence speaks for itself. Khemchand Group continues to be a trusted name in railway infrastructure development across India.',
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.testimonials-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, testimonialsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={testimonialsRef} className="py-20 bg-muted/10 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="testimonials-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by railway zones across India for over three decades
          </p>
          <div className="w-24 h-1 railway-gradient mx-auto rounded-full mt-6"></div>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white dark:bg-navy/90 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden">
                    <Quote className="h-16 w-16 text-primary/20 absolute top-8 left-8" />

                    <div className="relative z-10">
                      <p className="text-xl text-muted-foreground italic leading-relaxed mb-8 pl-12">
                        "{testimonial.message}"
                      </p>

                      <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-muted pt-6 gap-4 md:gap-0">
                        <div>
                          <h4 className="text-2xl font-semibold text-navy">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.designation}</p>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex px-6 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
                            <span className="text-primary font-semibold">{testimonial.zone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-shadow z-20">
              ‹
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-shadow z-20">
              ›
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
