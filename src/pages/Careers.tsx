import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Users,
  GraduationCap,
  TrendingUp,
  Award,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import careerBg from '@/assets/railway-hero-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // ⭐ ADDED HEADER HEIGHT LOGIC (same as Leadership page)
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById("main-header");
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const [careerFormData, setCareerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resumeLink: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-banner-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description:
        'Clear career progression with opportunities for advancement.',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Learning & Development',
      description:
        'Continuous learning opportunities and development programs.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recognition Programs',
      description: 'Performance-based recognition and rewards.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Environment',
      description: 'Collaborative culture with experienced professionals.',
    },
  ];

  const handleInput = (e: any) => {
    setCareerFormData({
      ...careerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!careerFormData.name || !careerFormData.email || !careerFormData.message) {
      toast({
        title: 'Please fill required fields',
        description: 'Name, email, and message are required.',
        variant: 'destructive',
      });
      return;
    }

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_CAREER_TEMPLATE_ID',
        {
          from_name: careerFormData.name,
          from_email: careerFormData.email,
          phone: careerFormData.phone,
          position: careerFormData.position,
          resume_link: careerFormData.resumeLink,
          message: careerFormData.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          toast({
            title: 'Application submitted!',
            description: "We'll review your application and contact you soon.",
          });

          setCareerFormData({
            name: '',
            email: '',
            phone: '',
            position: '',
            resumeLink: '',
            message: '',
          });
        },
        () => {
          toast({
            title: 'Failed to submit',
            description: 'Try again or email us directly.',
            variant: 'destructive',
          });
        }
      );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">

      {/* ⭐ Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Header id="main-header" />
      </header>

      {/* ⭐ PageBanner MATCHING Leadership */}
      <div className="relative" style={{ marginTop: `${headerHeight}px` }}>
        <PageBanner
          title="CAREERS"
          breadcrumbs={[{ label: "CAREERS", href: "" }]}
        />
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Choose Khemchand Group?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a company that values innovation, excellence, and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 railway-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">Reach Out for Career Opportunities</h2>
              <p className="text-xl text-muted-foreground">
                Don't see the right position? Send us your details.
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleCareerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Full Name *</Label>
                      <Input name="name" value={careerFormData.name} onChange={handleInput} required />
                    </div>

                    <div>
                      <Label>Email *</Label>
                      <Input type="email" name="email" value={careerFormData.email} onChange={handleInput} required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Phone</Label>
                      <Input name="phone" value={careerFormData.phone} onChange={handleInput} />
                    </div>

                    <div>
                      <Label>Position Interested In</Label>
                      <Input name="position" value={careerFormData.position} onChange={handleInput} />
                    </div>
                  </div>

                  <div>
                    <Label>Resume Link *</Label>
                    <Input name="resumeLink" value={careerFormData.resumeLink} onChange={handleInput} required />
                  </div>

                  <div>
                    <Label>Message *</Label>
                    <Textarea name="message" rows={6} value={careerFormData.message} onChange={handleInput} required />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" /> Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="mailto:careers@khemchandgroup.com">
                <Button variant="outline" size="lg"><Mail className="mr-2 h-5 w-5" /> careers@khemchandgroup.com</Button>
              </a>

              <a href="tel:+917084161512">
                <Button variant="outline" size="lg"><Phone className="mr-2 h-5 w-5" /> Contact HR</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
