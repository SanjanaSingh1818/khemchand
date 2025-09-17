import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Building, 
  Award, 
  Users,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Calendar
} from 'lucide-react';
import railwayBg from '@/assets/railway-hero-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const Leadership = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );

      // Leadership cards animation
      gsap.fromTo('.leadership-card',
        { opacity: 0, y: 50, rotationY: -15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.leadership-grid',
            start: 'top 80%',
          }
        }
      );

      // Railway track divider animation
      gsap.fromTo('.track-divider',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: '.track-divider',
            start: 'top 90%',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const leaders = [
    {
      id: 1,
      name: 'Mr. S. Kumar',
      designation: 'Founder & Chairman',
      education: 'B.Tech, IIT Kanpur (1975)',
      experience: '45+ Years',
      expertise: ['Railway Infrastructure', 'Engineering Management', 'Strategic Planning', 'Quality Systems'],
      avatar: '/api/placeholder/300/300',
      bio: 'A visionary leader and IIT Kanpur alumnus who founded Khemchand Group with a mission to transform India\'s railway infrastructure. His extensive experience in engineering and unwavering commitment to quality have been the driving forces behind the company\'s success over three decades.',
      achievements: [
        'Founded Khemchand Group in 1990',
        'Pioneered flash butt welding in India',
        'Built partnerships with Indian Railways',
        'Established quality standards in industry'
      ],
      contact: {
        email: 's.kumar@khemchandgroup.com',
        phone: '+91-XXX-XXX-XXXX'
      }
    },
    {
      id: 2,
      name: 'Mr. Sandeep Sukhwani',
      designation: 'Director & CEO',
      education: 'MBA, United Kingdom',
      experience: '20+ Years',
      expertise: ['International Business', 'Strategic Growth', 'Operations Management', 'Technology Innovation'],
      avatar: '/api/placeholder/300/300',
      bio: 'An accomplished business leader with international exposure and MBA from the UK. He brings global best practices and modern management techniques to drive the company towards new horizons of growth and technological advancement.',
      achievements: [
        'Led international expansion initiatives',
        'Implemented modern quality systems',
        'Established technology partnerships',
        'Drove digital transformation'
      ],
      contact: {
        email: 'sandeep.sukhwani@khemchandgroup.com',
        phone: '+91-XXX-XXX-XXXX'
      }
    },
    {
      id: 3,
      name: 'Er. Rajesh Mehta',
      designation: 'Chief Technical Officer',
      education: 'M.Tech, Civil Engineering',
      experience: '25+ Years',
      expertise: ['Railway Engineering', 'Project Management', 'Quality Assurance', 'Safety Systems'],
      avatar: '/api/placeholder/300/300',
      bio: 'A seasoned railway engineer with deep technical expertise in all aspects of railway infrastructure. His leadership in technical operations ensures that all projects meet the highest standards of quality and safety.',
      achievements: [
        'Led major railway projects',
        'Developed safety protocols',
        'Mentored engineering teams',
        'Established technical standards'
      ],
      contact: {
        email: 'rajesh.mehta@khemchandgroup.com',
        phone: '+91-XXX-XXX-XXXX'
      }
    },
    {
      id: 4,
      name: 'Ms. Priya Sharma',
      designation: 'Chief Financial Officer',
      education: 'CA, MBA Finance',
      experience: '18+ Years',
      expertise: ['Financial Planning', 'Risk Management', 'Corporate Governance', 'Strategic Analysis'],
      avatar: '/api/placeholder/300/300',
      bio: 'A dynamic financial leader who ensures robust financial management and strategic planning. Her expertise in corporate finance and risk management has been instrumental in the company\'s sustained growth.',
      achievements: [
        'Streamlined financial operations',
        'Implemented cost optimization',
        'Enhanced investor relations',
        'Established governance frameworks'
      ],
      contact: {
        email: 'priya.sharma@khemchandgroup.com',
        phone: '+91-XXX-XXX-XXXX'
      }
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${railwayBg})` }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Leadership
              <span className="block text-railway-yellow">Visionaries Leading the Way</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Meet the experienced leaders who drive innovation, excellence, and growth at Khemchand Group.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Legacy */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-6">Leadership Legacy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              From humble beginnings to becoming a trusted partner of Indian Railways, 
              our leadership team combines decades of experience with a vision for the future. 
              Founded by Mr. S. Kumar, an IIT Kanpur alumnus, and strengthened by 
              Mr. Sandeep Sukhwani's international expertise, we continue to set new standards 
              in railway infrastructure excellence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 railway-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Academic Excellence</h3>
                  <p className="text-muted-foreground">IIT Kanpur heritage combined with international MBA expertise</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 railway-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Industry Experience</h3>
                  <p className="text-muted-foreground">Combined 100+ years of railway and engineering experience</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 railway-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Proven Leadership</h3>
                  <p className="text-muted-foreground">Successfully delivering projects for 30+ years</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Railway Track Divider */}
      <div className="relative py-8">
        <div className="track-divider w-full h-1 railway-gradient origin-left"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background px-8">
            <Users className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Meet Our Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The experienced professionals who guide our vision and drive our success
            </p>
          </div>

          <div className="leadership-grid grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader) => (
              <Card 
                key={leader.id}
                className={`leadership-card group cursor-pointer transition-all duration-500 hover:shadow-elegant ${
                  flippedCard === leader.id ? 'transform-gpu' : ''
                }`}
                onClick={() => setFlippedCard(flippedCard === leader.id ? null : leader.id)}
              >
                <CardContent className="p-0 relative overflow-hidden">
                  <div className={`transition-all duration-700 ${flippedCard === leader.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    {/* Front Side */}
                    <div className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="relative">
                          <div className="w-24 h-24 railway-gradient rounded-full flex items-center justify-center">
                            <Users className="w-12 h-12 text-white" />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-navy mb-1">{leader.name}</h3>
                          <p className="text-primary font-semibold mb-2">{leader.designation}</p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <GraduationCap className="w-4 h-4 mr-2" />
                              {leader.education}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              {leader.experience}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {leader.expertise.slice(0, 2).map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {leader.expertise.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{leader.expertise.length - 2} more
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {leader.bio}
                          </p>
                          
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  {flippedCard === leader.id && (
                    <div className="absolute inset-0 p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                      <div className="h-full flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-navy mb-2">{leader.name}</h3>
                          <p className="text-primary font-medium">{leader.designation}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-navy mb-2">Key Achievements:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {leader.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-navy mb-2">All Expertise:</h4>
                          <div className="flex flex-wrap gap-1">
                            {leader.expertise.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 mr-1" />
                              <span className="text-xs">Contact</span>
                            </div>
                            <div className="flex items-center">
                              <Linkedin className="w-4 h-4 mr-1" />
                              <span className="text-xs">LinkedIn</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 railway-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Leadership Vision</h2>
          <blockquote className="text-2xl text-white/90 font-light italic max-w-4xl mx-auto mb-8">
            "To lead India's railway transformation through innovative engineering solutions, 
            uncompromising quality, and sustainable growth that benefits all stakeholders."
          </blockquote>
          <div className="flex justify-center items-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm">Years of Leadership</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Projects Led</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Commitment</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;