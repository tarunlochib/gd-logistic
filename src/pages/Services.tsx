
import { Truck, Package, MapPin, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-secondary" />,
      title: "Transportation",
      description:
        "Full truckload, part load, and express delivery services across India with real-time tracking.",
    },
    {
      icon: <Package className="w-12 h-12 text-secondary" />,
      title: "Warehousing",
      description:
        "State-of-the-art warehousing facilities with modern inventory management systems.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-secondary" />,
      title: "Last Mile Delivery",
      description:
        "Efficient last-mile delivery services ensuring your packages reach their final destination.",
    },
    {
      icon: <Building className="w-12 h-12 text-secondary" />,
      title: "Supply Chain Solutions",
      description:
        "End-to-end supply chain management tailored to your business needs.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Service Features</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="flex items-start space-x-2">
              <span className="text-secondary">✓</span>
              <span>24/7 Customer Support</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-secondary">✓</span>
              <span>Real-time Tracking</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-secondary">✓</span>
              <span>Nationwide Coverage</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-secondary">✓</span>
              <span>Custom Solutions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
