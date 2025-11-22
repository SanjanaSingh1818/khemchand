import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Calendar, TrendingUp } from 'lucide-react';
import railwayBg from '@/assets/railway-hero-bg.jpg';
import weldingBg from '@/assets/welding-bg.jpg';
import achievementsBg from '@/assets/ach.jpg';
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure header height
  useEffect(() => {
    const header = document.getElementById('main-header');
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    window.addEventListener('resize', updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const stats = [
    { number: 400000, suffix: '+', label: 'Flash Butt Joints' },
    { number: 300, suffix: '+', label: 'Talent Pool' },
    { number: 30, suffix: '+', label: 'Years Experience' },
    { number: 2000, suffix: '+', label: 'AC units running successfully' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Header id="main-header" />

      {/* Banner */}
      <div className="relative" style={{ marginTop: `${headerHeight}px` }}>
        <PageBanner
          title="ABOUT US"
          breadcrumbs={[{ label: 'ABOUT US', href: '' }]}
        />
      </div>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by Mr. S. Kumar, an IIT Kanpur alumnus from the 1975 batch,
                Khemchand Group began as a vision to transform India's railway infrastructure.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Under the leadership of Mr. Sandeep Sukhwani, MBA UK, we've expanded our capabilities
                and expertise, putting us at the forefront of railway technology.
              </p>
              <Button variant="hero" size="lg">Learn More About Our Leadership</Button>
            </div>

            <div className="relative">
              <img
                src={weldingBg}
                alt="Railway welding operations"
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐⭐⭐ DIAGONAL JOURNEY SECTION ⭐⭐⭐ */}
      <section className="py-16 relative bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-navy mb-12">
            Our Journey
          </h2>

          {/* DIAGONAL LINE */}
          <div className="relative w-full h-[480px] md:h-[560px]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line
                x1="12%"
                y1="85%"
                x2="92%"
                y2="12%"
                stroke="#0A2A6B"
                strokeWidth="4"
              />
            </svg>

            {/* MILESTONES */}
            {[
              { year: "1983", title: "Company Founded", description: "" },
              { year: "1986", title: "First Major Contract", description: "" },
              { year: "2000", title: "Leadership Expansion", description: "Mr. Sandeep Sukhwani" },
              { year: "2004", title: "Flash Butt Welding", description: "" },
              { year: "2009", title: "USFD Testing", description: "" },
              { year: "2015", title: "Lubrication Systems", description: "" },
              { year: "2024", title: "New Horizons", description: "30+ years of excellence" },
            ].map((item, index) => {
              const positions = [0, 0.16, 0.33, 0.48, 0.63, 0.80, 1];
              const t = positions[index];

              const x = 12 + t * (92 - 12);
              const y = 85 - t * (85 - 12);

              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow"></div>
                  <div className="text-red-600 font-bold text-sm mt-1 mb-1">
                    {item.year}
                  </div>

                  <Card className="w-[140px] shadow-md rounded-xl">
                    <CardContent className="p-2 text-center">
                      <h3 className="text-xs font-semibold text-navy">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-[10px] text-muted-foreground mt-1 leading-tight">
                          {item.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 railway-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:shadow-elegant transition-all">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    {index === 0 && <Award className="w-12 h-12 text-railway-yellow mx-auto" />}
                    {index === 1 && <TrendingUp className="w-12 h-12 text-railway-yellow mx-auto" />}
                    {index === 2 && <Calendar className="w-12 h-12 text-railway-yellow mx-auto" />}
                    {index === 3 && <Users className="w-12 h-12 text-railway-yellow mx-auto" />}
                  </div>

                  <div className="text-4xl font-bold text-white mb-2">
                    <span>{stat.number}</span>
                    <span>{stat.suffix}</span>
                  </div>

                  <p className="text-white/80 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
{/* FINAL ACHIEVEMENTS SECTION */}
{/* FINAL ACHIEVEMENTS SECTION */}
<section className="py-20 bg-white relative">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT — IMAGE */}
      <div>
        <img
          src={achievementsBg}
          alt="Our Achievements"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

      {/* RIGHT — TEXT */}
      <div>
        <h2 className="text-4xl font-bold text-navy mb-6">
          Our Achievements
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Numbers that reflect our commitment to excellence and innovation
        </p>

        <ul className="space-y-4 text-lg text-navy font-medium">
          <li className="flex items-start gap-3">
            <span className="text-railway-yellow text-2xl">•</span>
            4 Manufacturing Units
          </li>

          <li className="flex items-start gap-3">
            <span className="text-railway-yellow text-2xl">•</span>
            300+ Talent Pool
          </li>

          <li className="flex items-start gap-3">
            <span className="text-railway-yellow text-2xl">•</span>
            30+ Years of Exceptional Service
          </li>

          <li className="flex items-start gap-3">
            <span className="text-railway-yellow text-2xl">•</span>
            20+ Industry Recognitions
          </li>

          <li className="flex items-start gap-3">
            <span className="text-railway-yellow text-2xl">•</span>
            2000+ AC Units Running Successfully
          </li>

          <li className="flex items-start gap-3">
            <span className="text-railway-yellow text-2xl">•</span>
            400000+ Flash Butt Weld Joints
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default AboutUs;  