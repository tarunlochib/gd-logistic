
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Headquarters Section */}
          <div className="bg-gradient-to-br from-primary to-primary/90 p-8 rounded-2xl shadow-xl mb-12 text-white">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Head Office</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 font-poppins">Address</h3>
                  <p className="text-gray-200 font-inter">
                    SCO-99, Sector-10A,<br />
                    HUDA Market, Gurgaon (HR)<br />
                    122001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 font-poppins">Phone</h3>
                  <p className="text-gray-200 font-inter">+91-9720450635</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 font-poppins">Email</h3>
                  <p className="text-gray-200 font-inter">gdlogistics@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary font-poppins">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-inter"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-inter"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-inter"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary/90 transition-colors font-inter"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Branch Offices */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-primary font-poppins">Branch Offices</h2>
              <div className="space-y-6">
                {[
                  {
                    city: "Faridabad",
                    address: "Plot No. 166, Bhakri Industrial Area",
                    phone: "+91-9720695536"
                  },
                  {
                    city: "Neemrana",
                    address: "Pratappura Chowk, Near Hero Motocorp Ltd.",
                    phone: "+91-8375817104"
                  },
                  {
                    city: "Haridwar",
                    address: "Saleempur Chowk, Sidcul Bypass Road",
                    phone: "+91-9358255102"
                  }
                ].map((office, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary font-poppins">{office.city}</h3>
                      <p className="text-gray-600 text-sm mt-1 font-inter">{office.address}</p>
                      <p className="text-gray-600 text-sm mt-1 font-inter">{office.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
