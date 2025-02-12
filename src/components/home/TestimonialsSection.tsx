
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Supply Chain Manager",
      company: "Tata Motors",
      content: "GD Logistic has consistently delivered exceptional service. Their commitment to reliability and efficiency has made them our trusted logistics partner."
    },
    {
      name: "Amit Patel",
      position: "Operations Director",
      company: "Hero MotoCorp",
      content: "Working with GD Logistic has significantly improved our supply chain efficiency. Their professional team and modern solutions have been invaluable."
    },
    {
      name: "Priya Singh",
      position: "Logistics Head",
      company: "New Holland",
      content: "The dedicated support and nationwide network of GD Logistic have helped us maintain smooth operations across all our facilities."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary font-poppins">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-inter">
          Trusted by leading businesses across India
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-secondary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 font-inter">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-primary font-poppins">{testimonial.name}</p>
                <p className="text-sm text-gray-500 font-inter">{testimonial.position}</p>
                <p className="text-sm text-secondary font-inter">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
