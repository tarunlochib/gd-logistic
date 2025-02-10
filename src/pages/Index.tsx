
import { Truck, Package, Map, ArrowRight, Globe, Building2, BadgeCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src="/lovable-uploads/c7cd9328-7424-4db5-8a6d-968ef7081eb7.png"
            alt="Logistics Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container relative z-10 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white">
            Simplifying your business with Reliable Logistics Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto text-white">
            From cargo transportation to advanced supply chain solutions, we deliver excellence at every step
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/services"
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md transition-all flex items-center gap-2 hover:scale-105 animate-fade-up"
            >
              Explore Services <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition-all hover:scale-105 animate-fade-up"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-up">
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
                className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all group animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <service.icon className="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-secondary hover:text-secondary/80 flex items-center gap-2 transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-up">
            Why Choose GD Logistic?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Pan India Coverage",
                description: "Serving all major cities and industrial hubs",
              },
              {
                icon: Building2,
                title: "Modern Infrastructure",
                description: "State-of-the-art warehouses and fleet",
              },
              {
                icon: BadgeCheck,
                title: "Quality Service",
                description: "Committed to excellence in logistics",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced professionals at your service",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <feature.icon className="h-12 w-12 text-secondary mx-auto mb-4 hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 animate-fade-up">
            {[
              { number: "1000+", label: "Vehicles" },
              { number: "50+", label: "Warehouses" },
              { number: "2000+", label: "Happy Clients" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl font-bold mb-2 text-secondary">
                  {stat.number}
                </div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-up">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "GD Logistic has transformed our supply chain with their efficient service.",
                author: "Rahul Sharma",
                company: "Tech Solutions Ltd",
              },
              {
                text: "Reliable and professional logistics partner for our growing business.",
                author: "Priya Patel",
                company: "Retail Giants Inc",
              },
              {
                text: "Outstanding service quality and commitment to timely delivery.",
                author: "Amit Kumar",
                company: "Manufacturing Pro",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - New */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-up">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {["Tata", "Hero", "Honda", "Maruti Suzuki", "New Holland", "Yamaha"].map((client, index) => (
              <div
                key={client}
                className="text-center p-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-xl font-semibold text-gray-600">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-up">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-up">
            Contact us today to discuss your logistics needs and get a customized
            solution for your business.
          </p>
          <Link
            to="/contact"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md transition-all inline-flex items-center gap-2 hover:scale-105 animate-fade-up"
          >
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
