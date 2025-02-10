
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-fade-up">
            <Link to="/" className="block mb-4">
              <img 
                src="/lovable-uploads/28260aac-e651-4c29-9814-9bdbeb1032eb.png" 
                alt="GD Logistic" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner in logistics and transportation across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Locations", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">123 Main St, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">info@gdlogistic.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-up" style={{ animationDelay: "600ms" }}>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center animate-fade-up">
          <p className="text-gray-300">
            © {new Date().getFullYear()} GD Logistic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
