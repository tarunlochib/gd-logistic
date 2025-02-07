
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Locations", path: "/locations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
          >
            GD Logistic
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-primary hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-lg rounded-md mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="block px-3 py-2 text-secondary hover:text-secondary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
