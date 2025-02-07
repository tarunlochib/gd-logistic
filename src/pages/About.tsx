
import { TruckIcon, PackageIcon, Building2Icon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <TruckIcon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Legacy</h3>
            <p className="text-gray-600">
              Founded in 2010, GD Logistic has grown from a small local transport
              company to one of India's leading logistics providers, serving
              thousands of businesses nationwide.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <PackageIcon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              We strive to provide reliable, efficient, and cost-effective logistics
              solutions that help businesses grow and succeed in today's
              competitive market.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Building2Icon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Scale</h3>
            <p className="text-gray-600">
              With over 50 warehouses, 1000+ vehicles, and 2000+ dedicated
              employees, we have the infrastructure to handle your logistics needs
              across India.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
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
