
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
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-gray-100 shadow-xl mx-auto w-64 md:w-full max-w-[320px]">
              <img
                src="/lovable-uploads/79cad9ff-2728-430b-bf43-be7275a3518c.png"
                alt="Vikram Lochib"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 text-primary font-poppins">Vikram Lochib</h2>
              <p className="text-gray-600 mb-4 font-inter">
                With over 35 years of experience in logistics and transportation,
                Vikram Lochib established GD Logistic in 1987 with a vision to provide
                reliable and efficient logistics solutions across India. His expertise
                and leadership have been instrumental in making GD Logistic one of the
                most trusted names in the industry.
              </p>
              <p className="text-gray-600 font-inter">
                Under his guidance, GD Logistic has grown from a small local
                transport company to a respected logistics provider, serving
                businesses across India with a fleet of specialized vehicles.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 animate-fade-up">
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <TruckIcon className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Our Legacy</h3>
            <p className="text-gray-600 font-inter">
              Established in 1987, GD Logistic has built a strong reputation for
              reliability and excellence in logistics services, serving businesses
              across India for over three decades.
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
            <h3 className="text-xl font-semibold mb-2 font-poppins">Our Fleet</h3>
            <p className="text-gray-600 font-inter">
              We maintain a modern fleet of 20+ specialized vehicles, including
              14ft, 22ft, and 32ft close-body trucks, ensuring we can meet diverse
              transportation needs.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg animate-fade-up">
          <h2 className="text-2xl font-bold mb-6 text-center font-poppins">Why Choose Us?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2 font-poppins">35+ Years of Experience</h4>
              <p className="text-gray-600 font-inter">
                With over three decades of experience, we understand the intricacies
                of logistics and transportation in India.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2 font-poppins">Specialized Fleet</h4>
              <p className="text-gray-600 font-inter">
                Our diverse fleet of close-body trucks ranging from 14ft to 32ft
                ensures we can handle any logistics requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
