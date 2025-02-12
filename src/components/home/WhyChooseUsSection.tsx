
import { Shield, Clock, Globe, TrendingUp } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Shield className="w-10 h-10 text-secondary" />,
      title: "Reliable Service",
      description: "Consistent and dependable logistics solutions you can trust"
    },
    {
      icon: <Clock className="w-10 h-10 text-secondary" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your logistics needs"
    },
    {
      icon: <Globe className="w-10 h-10 text-secondary" />,
      title: "Pan India Network",
      description: "Extensive coverage across all major cities and industrial hubs"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-secondary" />,
      title: "Cost Effective",
      description: "Optimized solutions that save time and reduce costs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary font-poppins">
          Why Choose GD Logistic?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-inter">
          Experience excellence in logistics with our comprehensive solutions
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-primary font-poppins">{reason.title}</h3>
              <p className="text-gray-600 font-inter">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
