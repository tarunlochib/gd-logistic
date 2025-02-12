import { DollarSign, Package, Truck } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Quote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      companyName: formData.get('companyName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      serviceType: formData.get('serviceType'),
      details: formData.get('details'),
    };

    try {
      const response = await fetch('https://[your-project-ref].supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          type: 'quote',
          data
        }),
      });

      if (!response.ok) throw new Error('Failed to send quote request');

      toast.success("Quote request sent successfully!");
      e.currentTarget.reset();
    } catch (error) {
      toast.error("Failed to send quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 py-20">
        <h1 className="text-4xl font-bold text-primary mb-8">Get a Quote</h1>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <DollarSign className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
            <p className="text-gray-600">
              Get the best rates for your logistics needs
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <Package className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-gray-600">
              Tailored logistics solutions for your business
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <Truck className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
            <p className="text-gray-600">
              Fast and reliable transportation services
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Request a Quote</h2>
          <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                required
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
                disabled={isSubmitting}
                className="w-full bg-secondary text-white py-3 px-6 rounded-md hover:bg-secondary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Request Quote"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
