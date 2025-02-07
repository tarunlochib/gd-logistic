
import { Truck, Package, Map, ArrowRight, Phone, Mail, MapPin, Building2Icon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center justify-center bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Reliable Logistics Solutions for India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl mx-auto">
            Your trusted partner in transportation and logistics across India
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md transition-all flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md transition-all"
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">About Us</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Truck className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Legacy</h3>
              <p className="text-gray-600">
                Founded in 2010, GD Logistic has grown from a small local transport
                company to one of India's leading logistics providers.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Package className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                We strive to provide reliable, efficient, and cost-effective logistics
                solutions that help businesses grow and succeed.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Building2Icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Scale</h3>
              <p className="text-gray-600">
                With over 50 warehouses, 1000+ vehicles, and 2000+ dedicated
                employees, we have the infrastructure to handle your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
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
                icon: <Map className="w-12 h-12 text-secondary" />,
                title: "Supply Chain Solutions",
                description:
                  "End-to-end supply chain management tailored to your business needs.",
              },
            ].map((service, index) => (
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
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Our Locations</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                city: "Mumbai",
                address: "123 Logistics Park, Andheri East, Mumbai - 400069",
                phone: "+91 22-1234-5678",
              },
              {
                city: "Delhi",
                address: "456 Transport Hub, Okhla Industrial Area, Delhi - 110020",
                phone: "+91 11-8765-4321",
              },
              {
                city: "Bangalore",
                address: "789 Warehouse Complex, Electronic City, Bangalore - 560100",
                phone: "+91 80-2468-1357",
              },
              {
                city: "Chennai",
                address: "321 Distribution Center, Ambattur, Chennai - 600053",
                phone: "+91 44-9876-5432",
              },
            ].map((location, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-secondary mr-2" />
                  <h3 className="text-xl font-semibold">{location.city}</h3>
                </div>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-gray-600">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Contact Us</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-secondary mr-4" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+91 1800-123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-secondary mr-4" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@gdlogistic.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-secondary mr-4" />
                  <div>
                    <h4 className="font-semibold">Head Office</h4>
                    <p className="text-gray-600">
                      123 Business Park, Sector 5<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Get a Quote</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent">
                    <option>Transportation</option>
                    <option>Warehousing</option>
                    <option>Last Mile Delivery</option>
                    <option>Supply Chain Solutions</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Please provide details about your requirements..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white py-3 px-6 rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
