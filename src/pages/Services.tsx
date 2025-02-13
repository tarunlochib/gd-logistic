
import { Truck, Package, Building2, ArrowRight } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Package className="w-16 h-16 text-secondary" />,
      title: "Third Party Logistics (3PL)",
      description:
        "Comprehensive 3PL services including transportation management, warehousing, and distribution. We handle your logistics so you can focus on your core business.",
      features: [
        "End-to-end logistics management",
        "Custom solutions for your business",
        "Real-time tracking and reporting",
        "Cost optimization"
      ]
    },
    {
      icon: <Building2 className="w-16 h-16 text-secondary" />,
      title: "Warehousing Facilities",
      description:
        "State-of-the-art warehousing facilities with modern inventory management systems and security features to ensure safe storage of your goods.",
      features: [
        "Strategic locations across India",
        "Modern inventory management",
        "24/7 security",
        "Climate-controlled storage"
      ]
    },
    {
      icon: <Truck className="w-16 h-16 text-secondary" />,
      title: "Supply Chain Solutions",
      description:
        "Optimize your supply chain with our integrated solutions. From procurement to last-mile delivery, we ensure efficiency at every step.",
      features: [
        "Supply chain optimization",
        "Demand forecasting",
        "Inventory optimization",
        "Distribution network design"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center font-poppins">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-inter">
          Comprehensive logistics solutions tailored to meet your business needs
        </p>
        
        <div className="grid gap-8 lg:grid-cols-3 mx-auto max-w-7xl">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-up group hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: `perspective(1000px) rotateY(${index * 2}deg)` 
              }}
            >
              <div className="p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary font-poppins group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-inter">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 font-inter group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary font-poppins">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 font-inter">Contact us to discuss your logistics needs</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-105 font-inter"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
