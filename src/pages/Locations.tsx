
import { MapPin } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      city: "Gurgaon",
      title: "Head Office",
      address: "SCO-99, Sector-10A, HUDA Market, Gurgaon (HR) - 122001",
      phone: "+91-9720450635",
    },
    {
      city: "Faridabad",
      title: "Branch Office & Warehouse",
      address: "Plot No. 166, Bhakri Industrial Area, Faridabad (HR) - 121001",
      phone: "+91-9720695536",
    },
    {
      city: "Neemrana",
      title: "Branch Office & Warehouse",
      address: "Pratappura Chowk, Opp. Havells India Ltd., Near Hero Motocorp Ltd., RIICO Ind. Area Neemrana (Rajasthan)",
      phone: "+91-8375817104",
    },
    {
      city: "Haridwar",
      title: "Branch Office & Warehouse",
      address: "Saleempur Chowk, Sidcul Bypass Road, Bhadharabad, Haridwar (UK) - 249403",
      phone: "+91-9358255102",
    },
    {
      city: "Gujarat - Halol",
      title: "Branch Office & Warehouse",
      address: "GIDC Estate, Distt.-Panchmahal, Halol (Gujarat) - 389350",
      phone: "",
    },
    {
      city: "Gujarat - Vithalapur",
      title: "Branch Office & Warehouse",
      address: "GIDC Estate, Vill- Vithalapur, Distt.-Ahmadabad (Gujarat) - 382120",
      phone: "",
    },
  ];

  const additionalLocations = ["Jamshedpur", "Pune", "Lucknow", "Jaipur"];

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Locations</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-secondary mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">{location.city}</h3>
                  <p className="text-sm text-secondary">{location.title}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-2 text-sm">{location.address}</p>
              {location.phone && (
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">M:</span> {location.phone}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Additional Presence</h2>
          <div className="flex flex-wrap gap-4">
            {additionalLocations.map((city, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
