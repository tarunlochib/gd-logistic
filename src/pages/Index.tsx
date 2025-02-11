import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import PartnersSection from "../components/home/PartnersSection";
import { Truck, Package, Map, ArrowRight, Globe, Building2, BadgeCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-up font-poppins">
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
                <h3 className="text-xl font-semibold mb-2 text-primary font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 font-inter">{service.description}</p>
                <Link
                  to="/services"
                  className="text-secondary hover:text-secondary/80 flex items-center gap-2 transition-colors font-inter"
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
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-up font-poppins">
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
                <h3 className="text-lg font-semibold mb-2 font-poppins">{feature.title}</h3>
                <p className="text-gray-600 font-inter">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-up font-poppins">
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
                <p className="text-gray-600 mb-4 italic font-inter">{testimonial.text}</p>
                <div className="font-semibold font-poppins">{testimonial.author}</div>
                <div className="text-sm text-gray-500 font-inter">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-up font-poppins">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-up font-inter">
            Contact us today to discuss your logistics needs and get a customized
            solution for your business.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-all inline-flex items-center gap-2 hover:scale-105 animate-fade-up font-poppins"
          >
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
