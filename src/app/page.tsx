import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section: Corporate Headline, 2 CTAs, Architecture Preview */}
      <Hero />

      {/* 2. About Company: 2-Column Introduction, Workplace Visual & Animated Stats */}
      <About />

      {/* 3. Services: 8 Professional Service Offerings */}
      <Services />

      {/* 4. Technologies: Organized Grid with Real Technology Logos */}
      <Technologies />

      {/* 5. Portfolio / Projects: Editorial-Style Case Studies Grid */}
      <Projects />

      {/* 6. Why Choose Us: 6 Core Company Advantages */}
      <WhyChooseUs />

      {/* 7. Development Process: 6-Phase Engineering Methodology */}
      <Process />

      {/* 8. Testimonials: Clean Testimonial Slider */}
      <Testimonials />

      {/* 9. Contact: Corporate Discussion Channels & Validated Form */}
      <Contact />
    </div>
  );
}
