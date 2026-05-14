'use client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import WorkingProcess from './components/WorkingProcess'
import PriceingPlans from './components/PriceingPlan';
import TeamSection from './components/TeamSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <WorkingProcess/>
      <PriceingPlans/>
      <TeamSection/>
      <Contact />
      <Footer />
      
    </main>
  );
}