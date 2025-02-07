
import { Truck, Package, Map, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Reliable Logistics Solutions for India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl mx-auto">
            Your trusted partner in transportation and logistics across India
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/quote"
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md transition-all flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Transportation",
                description:
                  "Efficient and reliable transportation services across India",
              },
              {
                icon: Package,
                title: "Warehousing",
                description:
                  "Secure storage solutions with modern facility management",
              },
              {
                icon: Map,
                title: "Supply Chain",
                description:
                  "End-to-end supply chain management and optimization",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all group"
              >
                <service.icon className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-secondary hover:text-secondary/80 flex items-center gap-2 transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your logistics needs and get a customized
            solution for your business.
          </p>
          <Link
            to="/contact"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md transition-all inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
