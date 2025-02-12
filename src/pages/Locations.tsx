import { MapPin, Building2 } from "lucide-react";

const Locations = () => {
  const headOffice = {
    city: "Gurgaon",
    title: "Head Office",
    address: "SCO-99, Sector-10A, HUDA Market, Gurgaon (HR) - 122001",
    phone: "+91-9720450635",
  };

  const branchOffices = [
    {
      city: "Faridabad",
      title: "Branch Office & Warehouse",
      address: "Shop No. 105, Sector-22, Faridabad, Haryana 121008",
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
    },
    {
      city: "Gujarat - Vithalapur",
      title: "Branch Office & Warehouse",
      address: "GIDC Estate, Vill- Vithalapur, Distt.-Ahmadabad (Gujarat) - 382120",
    },
  ];

  const additionalLocations = ["Jamshedpur", "Pune", "Lucknow", "Jaipur"];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center font-poppins">Our Network</h1>

        {/* Head Office Section */}
        <div className="mb-16 transform hover:scale-102 transition-all duration-300">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-10 h-10 text-secondary" />
                <div>
                  <h2 className="text-2xl font-bold font-poppins text-secondary">{headOffice.city}</h2>
                  <p className="text-white/90 font-medium">{headOffice.title}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-200 font-inter leading-relaxed">{headOffice.address}</p>
                  {headOffice.phone && (
                    <p className="text-gray-200 mt-2 font-inter">
                      <span className="font-semibold">M:</span> {headOffice.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Offices Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary font-poppins">Branch Offices & Warehouses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branchOffices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary font-poppins">{office.city}</h3>
                    <p className="text-sm text-secondary">{office.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2 text-sm font-inter">{office.address}</p>
                {office.phone && (
                  <p className="text-gray-600 text-sm font-inter">
                    <span className="font-semibold">M:</span> {office.phone}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Presence */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-primary font-poppins">Additional Presence</h2>
          <div className="flex flex-wrap gap-4">
            {additionalLocations.map((city, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors font-inter"
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
