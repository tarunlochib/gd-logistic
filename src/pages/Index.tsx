
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import PartnersSection from "../components/home/PartnersSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
