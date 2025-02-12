
const PartnersSection = () => {
  const logos = [
    {
      src: "/lovable-uploads/22a45b9e-8951-49a4-9371-8dccb0308bd8.png",
      alt: "Tata Logo",
      className: "h-16 sm:h-20 md:h-24"
    },
    {
      src: "/lovable-uploads/bcf22be5-5280-4b62-a4a7-7dc3c1c28115.png",
      alt: "Hero Logo",
      className: "h-16 sm:h-20 md:h-24"
    },
    {
      src: "/lovable-uploads/e1de7002-1313-497d-8351-da50cc04b2c9.png",
      alt: "New Holland Logo",
      className: "h-16 sm:h-20 md:h-24"
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary font-poppins">
          Trusted by Industry Leaders
        </h2>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="inline-block">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.className} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300`}
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="inline-block">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.className} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
