
import { TruckIcon, PackageIcon, Building2Icon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center animate-fade-up">
          About Us
        </h1>

        {/* Owner Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Owner"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Gaurav Dhawan</h2>
              <p className="text-gray-600 mb-4">
                With over 20 years of experience in logistics and transportation,
                Gaurav Dhawan founded GD Logistic with a vision to revolutionize
                the logistics industry in India. His expertise and leadership have
                been instrumental in making GD Logistic one of the most trusted
                names in the industry.
              </p>
              <p className="text-gray-600">
                Under his guidance, GD Logistic has grown from a small local
                transport company to a nationwide logistics provider, serving
                thousands of businesses across India.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 animate-fade-up">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
            <TruckIcon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Legacy</h3>
            <p className="text-gray-600">
              Founded in 2010, GD Logistic has grown from a small local transport
              company to one of India's leading logistics providers, serving
              thousands of businesses nationwide.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
            <PackageIcon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              We strive to provide reliable, efficient, and cost-effective logistics
              solutions that help businesses grow and succeed in today's
              competitive market.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
            <Building2Icon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Scale</h3>
            <p className="text-gray-600">
              With over 50 warehouses, 1000+ vehicles, and 2000+ dedicated
              employees, we have the infrastructure to handle your logistics needs
              across India.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg animate-fade-up">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Nationwide Coverage</h4>
              <p className="text-gray-600">
                Our extensive network covers all major cities and industrial hubs
                across India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Modern Technology</h4>
              <p className="text-gray-600">
                Real-time tracking and automated systems ensure efficient operations
                and complete visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
