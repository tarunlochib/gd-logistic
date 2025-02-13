
import { Truck, Package, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <Package className="w-12 h-12 text-secondary" />,
      title: "Specialized Fleet",
      description: "Fleet of 20+ vehicles including 14ft, 22ft, and 32ft close-body trucks for all your transportation needs."
    },
    {
      icon: <Building2 className="w-12 h-12 text-secondary" />,
      title: "Nationwide Coverage",
      description: "Reliable logistics services across India, backed by 35+ years of industry experience and expertise."
    },
    {
      icon: <Truck className="w-12 h-12 text-secondary" />,
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain optimization solutions ensuring timely and secure delivery of your goods."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary font-poppins">Our Core Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-inter">
          Professional logistics solutions tailored to your business needs since 1987
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary font-poppins">{service.title}</h3>
              <p className="text-gray-600 mb-6 font-inter">{service.description}</p>
              <Link
                to="/services"
                className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center gap-2 font-inter"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
