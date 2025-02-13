
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    vehicles: 0,
    experience: 0,
    clients: 0
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 50;
      const interval = duration / steps;

      const targetCounts = {
        vehicles: 20,
        experience: 35,
        clients: 500
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        
        if (currentStep <= steps) {
          setCounts({
            vehicles: Math.floor((targetCounts.vehicles / steps) * currentStep),
            experience: Math.floor((targetCounts.experience / steps) * currentStep),
            clients: Math.floor((targetCounts.clients / steps) * currentStep)
          });
        } else {
          setCounts(targetCounts);
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-primary text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 animate-fade-up">
          {[
            { number: counts.vehicles, suffix: "+", label: "Specialized Vehicles" },
            { number: counts.experience, suffix: "+", label: "Years of Experience" },
            { number: counts.clients, suffix: "+", label: "Happy Clients" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center font-poppins"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl font-bold mb-2 text-secondary">
                {typeof stat.number === 'number' ? stat.number.toLocaleString() : stat.number}
                {stat.suffix}
              </div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
