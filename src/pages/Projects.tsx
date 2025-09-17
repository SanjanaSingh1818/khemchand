import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  TrendingUp,
  Filter,
  Eye,
  Award,
  Clock
} from 'lucide-react';
import railwayBg from '@/assets/railway-hero-bg.jpg';
import weldingBg from '@/assets/welding-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );

      // Project cards animation
      gsap.fromTo('.project-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          }
        }
      );

      // Stats counter animation
      gsap.fromTo('.counter',
        { innerText: 0 },
        {
          innerText: (i, target) => target.getAttribute('data-value'),
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Delhi-Mumbai High Speed Rail Welding',
      category: 'welding',
      year: '2023',
      status: 'ongoing',
      location: 'Delhi - Mumbai Corridor',
      client: 'Indian Railways',
      description: 'Advanced flash butt welding services for the high-speed rail corridor connecting Delhi and Mumbai.',
      image: weldingBg,
      stats: {
        joints: '25,000+',
        length: '350 km',
        completion: '75%'
      },
      highlights: [
        'High-speed rail compatible welding',
        'Zero defect tolerance',
        '24/7 quality monitoring',
        'Advanced NDT testing'
      ]
    },
    {
      id: 2,
      title: 'Eastern Railway Sleeper Supply',
      category: 'sleepers',
      year: '2023',
      status: 'completed',
      location: 'Eastern Railway Zone',
      client: 'Eastern Railway',
      description: 'Manufacturing and supply of 50,000 prestressed concrete sleepers for track modernization.',
      image: railwayBg,
      stats: {
        sleepers: '50,000',
        routes: '12',
        completion: '100%'
      },
      highlights: [
        'IS:13230 compliant sleepers',
        'Advanced prestressing technology',
        'Timely delivery achieved',
        'Quality certification received'
      ]
    },
    {
      id: 3,
      title: 'Chennai-Bangalore USFD Testing',
      category: 'testing',
      year: '2024',
      status: 'ongoing',
      location: 'Chennai - Bangalore Route',
      client: 'Southern Railway',
      description: 'Comprehensive ultrasonic flaw detection testing for the entire Chennai-Bangalore railway route.',
      image: railwayBg,
      stats: {
        distance: '5,000 km',
        defects: '127',
        completion: '60%'
      },
      highlights: [
        'Advanced USFD equipment',
        'Real-time defect detection',
        'Certified testing crew',
        'Digital reporting system'
      ]
    },
    {
      id: 4,
      title: 'Western Railway BRD System',
      category: 'safety',
      year: '2022',
      status: 'completed',
      location: 'Western Railway Network',
      client: 'Western Railway',
      description: 'Installation of broken rail detection systems across critical sections of Western Railway.',
      image: weldingBg,
      stats: {
        coverage: '1,200 km',
        systems: '48',
        completion: '100%'
      },
      highlights: [
        '24/7 rail monitoring',
        'Instant alert system',
        'Weather-resistant design',
        'Remote diagnostics capability'
      ]
    },
    {
      id: 5,
      title: 'North-East Frontier Railway Modernization',
      category: 'reconditioning',
      year: '2023',
      status: 'ongoing',
      location: 'Northeast India',
      client: 'NF Railway',
      description: 'Complete reconditioning of CMS crossings and track infrastructure modernization.',
      image: railwayBg,
      stats: {
        crossings: '85',
        tracks: '200 km',
        completion: '40%'
      },
      highlights: [
        'Complete crossing overhaul',
        'Modern materials used',
        'Extended service life',
        'Cost-effective solution'
      ]
    }
  ];

  const stats = [
    { label: 'Flash Butt Joints', value: 200000, suffix: '+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'USFD Testing (Tkm)', value: 40000, suffix: '+', icon: <Award className="w-6 h-6" /> },
    { label: 'Projects Completed', value: 500, suffix: '+', icon: <Users className="w-6 h-6" /> },
    { label: 'Years of Excellence', value: 30, suffix: '+', icon: <Calendar className="w-6 h-6" /> }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'welding', label: 'Welding' },
    { key: 'sleepers', label: 'Sleepers' },
    { key: 'testing', label: 'Testing' },
    { key: 'safety', label: 'Safety Systems' },
    { key: 'reconditioning', label: 'Reconditioning' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              Our Projects
              <span className="block text-railway-yellow">Building Tomorrow</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Showcase of major railway infrastructure projects that demonstrate our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 railway-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="text-railway-yellow mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    <span className="counter" data-value={stat.value}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? 'default' : 'outline'}
                onClick={() => setFilter(filterOption.key)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {filterOption.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="project-card group cursor-pointer transition-all duration-300 hover:shadow-elegant"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <CardHeader className="relative overflow-hidden p-0">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant={project.status === 'completed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 text-sm mb-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-navy mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>Client: {project.client}</span>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>

                  {selectedProject === project.id && (
                    <div className="mt-6 space-y-4 border-t pt-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Key Highlights:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Concern Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Sister Concern</h2>
            <p className="text-xl text-muted-foreground">Precision Equipments Co.</p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-4">Precision Engineering Excellence</h3>
                  <p className="text-muted-foreground mb-6">
                    Our sister concern, Precision Equipments Co., specializes in manufacturing 
                    high-precision diesel locomotive spares and components for ALCO & EMD engines.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Turbo Dowelling Manufacturing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      HHP Traction Motors
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Industrial Blowers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Precision Machining & Fabrication
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Components Manufactured</div>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Quality Assurance</div>
                  </div>
                  <div className="p-4 bg-railway-red/10 rounded-lg">
                    <div className="text-2xl font-bold text-railway-red mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;