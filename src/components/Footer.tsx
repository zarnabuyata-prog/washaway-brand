import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-ocean-dark text-foam">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Big Wave Truck Wash" className="h-14 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional truck washing services you can count on. Ride the wave of clean with Big Wave Truck Wash.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Hand Wash", path: "/hand-wash" },
                { label: "Automatic Wash", path: "/automatic-wash" },
                { label: "Offerings", path: "/offerings" },
                { label: "Vacancies", path: "/vacancies" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-primary mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (555) 123-4567
              </a>
              <a href="mailto:info@bigwavetruckwash.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@bigwavetruckwash.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                123 Wash Boulevard, Truckville, TX 75001
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-display font-semibold text-primary mb-4">Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium text-foam">Hand Wash</span>
              </div>
              <p className="ml-6">Mon–Sat: 7AM – 7PM</p>
              <p className="ml-6">Sun: Closed</p>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="font-medium text-foam">Automatic Wash</span>
              </div>
              <p className="ml-6">Open 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-wave-blue/20 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Big Wave Truck Wash. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
