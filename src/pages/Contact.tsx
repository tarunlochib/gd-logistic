
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://[your-project-ref].supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          type: 'contact',
          data
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast.success("Message sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
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
                  <p className="text-gray-200 font-inter">gdlogistic@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary font-poppins">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-inter"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-inter"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-secondary focus:border-transparent transition-all font-inter"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary/90 transition-colors font-inter disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-primary font-poppins">Branch Offices</h2>
              <div className="space-y-6">
                {[
                  {
                    city: "Faridabad",
                    address: "Shop No. 105, Sector-22, Faridabad, Haryana 121008",
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
