
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/c7cd9328-7424-4db5-8a6d-968ef7081eb7.png"
          alt="Logistics Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="container relative z-10 px-4 animate-fade-up max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white font-poppins">
          Simplifying your business with Reliable Logistics Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto text-white font-inter">
          From cargo transportation to advanced supply chain solutions, we deliver excellence at every step
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-all flex items-center gap-2 hover:scale-105 animate-fade-up"
          >
            Explore Services <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md transition-all hover:scale-105 animate-fade-up"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
