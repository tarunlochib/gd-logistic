
const PartnersSection = () => {
  const logos = [
    {
      src: "/lovable-uploads/22a45b9e-8951-49a4-9371-8dccb0308bd8.png",
      alt: "Tata Logo",
      className: "h-24 sm:h-32 md:h-40"
    },
    {
      src: "/lovable-uploads/bcf22be5-5280-4b62-a4a7-7dc3c1c28115.png",
      alt: "Hero Logo",
      className: "h-24 sm:h-32 md:h-40"
    },
    {
      src: "/lovable-uploads/e1de7002-1313-497d-8351-da50cc04b2c9.png",
      alt: "New Holland Logo",
      className: "h-24 sm:h-32 md:h-40"
    },
    {
      src: "/lovable-uploads/ec658fe5-ff38-4ed3-9ec4-8c90bcba82ca.png",
      alt: "Yamaha Logo",
      className: "h-24 sm:h-32 md:h-40"
    },
    {
      src: "/lovable-uploads/87b54a1b-12c4-4679-9a6d-7acf18c41959.png",
      alt: "Maruti Suzuki Logo",
      className: "h-24 sm:h-32 md:h-40"
    },
    {
      src: "/lovable-uploads/e2c1eeac-660a-4835-bc29-edae9abdc7eb.png",
      alt: "Honda Logo",
      className: "h-24 sm:h-32 md:h-40"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden w-full">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary font-poppins">
        Trusted by Industry Leaders
      </h2>
      <div className="relative flex overflow-x-hidden w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-24">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="inline-block">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-24">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="inline-block">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
