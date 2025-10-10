import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

const Index = () => {
  return (
    <>
      <Loader />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Journey />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;