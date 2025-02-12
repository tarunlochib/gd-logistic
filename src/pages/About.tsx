
import { TruckIcon, PackageIcon, Building2Icon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container px-4 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center animate-fade-up font-poppins">
          About Us
        </h1>

        {/* Owner Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-up bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/79cad9ff-2728-430b-bf43-be7275a3518c.png"
                alt="Vikram Lochib"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 text-primary font-poppins">Vikram Lochib</h2>
              <p className="text-gray-600 mb-4 font-inter">
                With over 20 years of experience in logistics and transportation,
                Vikram Lochib founded GD Logistic with a vision to revolutionize
                the logistics industry in India. His expertise and leadership have
                been instrumental in making GD Logistic one of the most trusted
                names in the industry.
              </p>
              <p className="text-gray-600 font-inter">
                Under his guidance, GD Logistic has grown from a small local
                transport company to a nationwide logistics provider, serving
                thousands of businesses across India.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 animate-fade-up">
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <TruckIcon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Our Legacy</h3>
            <p className="text-gray-600 font-inter">
              Founded in 2010, GD Logistic has grown from a small local transport
              company to one of India's leading logistics providers, serving
              thousands of businesses nationwide.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <PackageIcon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Our Mission</h3>
            <p className="text-gray-600 font-inter">
              We strive to provide reliable, efficient, and cost-effective logistics
              solutions that help businesses grow and succeed in today's
              competitive market.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <Building2Icon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Our Scale</h3>
            <p className="text-gray-600 font-inter">
              With over 50 warehouses, 1000+ vehicles, and 2000+ dedicated
              employees, we have the infrastructure to handle your logistics needs
              across India.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg animate-fade-up">
          <h2 className="text-2xl font-bold mb-6 text-center font-poppins">Why Choose Us?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2 font-poppins">Nationwide Coverage</h4>
              <p className="text-gray-600 font-inter">
                Our extensive network covers all major cities and industrial hubs
                across India.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2 font-poppins">Modern Technology</h4>
              <p className="text-gray-600 font-inter">
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
