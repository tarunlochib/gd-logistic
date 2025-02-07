
import { MapPin } from "lucide-react";

const Locations = () => {
  const locations = [
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
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Locations</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((location, index) => (
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

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Coverage Area</h2>
          <p className="text-gray-600 mb-4">
            Our strategically located facilities ensure efficient coverage across
            all major cities and industrial hubs in India. With multiple
            warehouses and distribution centers, we provide seamless logistics
            services nationwide.
          </p>
          <p className="text-gray-600">
            Looking for a location not listed here? Contact us for information
            about our partner facilities and extended network coverage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Locations;
