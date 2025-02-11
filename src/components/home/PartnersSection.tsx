
const PartnerLogo = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
  <div className="flex items-center justify-center p-4">
    <img
      src={src}
      alt={alt}
      className={`${className} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300`}
    />
  </div>
);

const PartnersSection = () => {
  const logos = [
    {
      src: "/lovable-uploads/22a45b9e-8951-49a4-9371-8dccb0308bd8.png",
      alt: "Tata Logo",
      className: "h-20 md:h-24"
    },
    {
      src: "/lovable-uploads/bcf22be5-5280-4b62-a4a7-7dc3c1c28115.png",
      alt: "Hero Logo",
      className: "h-20 md:h-24"
    },
    {
      src: "/lovable-uploads/e1de7002-1313-497d-8351-da50cc04b2c9.png",
      alt: "New Holland Logo",
      className: "h-20 md:h-24"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary font-poppins">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {logos.map((logo, index) => (
            <PartnerLogo key={index} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
