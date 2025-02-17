
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="absolute inset-0">
        {/* Low quality placeholder */}
        <div 
          className="absolute inset-0 bg-gray-200"
          style={{
            backgroundImage: `url('/lovable-uploads/2882fad1-5669-4fbc-a6c5-54ea77bc89a7.png?quality=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
            opacity: imageLoaded ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        {/* High quality image */}
        <img 
          src="/lovable-uploads/2882fad1-5669-4fbc-a6c5-54ea77bc89a7.png?quality=80&w=1920"
          alt="Logistics Background"
          className="w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Slightly darker overlay for better text readability */}
      </div>
      <div className="container relative z-10 px-4 animate-fade-up max-w-6xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-poppins max-w-4xl mx-auto leading-tight">
          Simplifying your business with Reliable Logistics Solutions
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 font-inter max-w-2xl mx-auto">
          From cargo transportation to advanced supply chain solutions, we deliver excellence at every step
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-all flex items-center gap-2 hover:scale-105 animate-fade-up font-inter"
          >
            Explore Services <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md transition-all hover:scale-105 animate-fade-up font-inter"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
