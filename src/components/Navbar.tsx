import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },

  { label: "Hand Wash", path: "/hand-wash" },
  { label: "Automatic Wash", path: "/automatic-wash" },
  { label: "Offerings", path: "/offerings" },
  { label: "Vacancies", path: "/vacancies" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-ocean-dark text-primary-foreground text-center text-sm py-2 px-4 font-sans">
        🕐 Open Mon–Sat 7AM–7PM | Automatic Wash Open 24/7 | 📞 Call Us: (555) 123-4567
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-ocean-deep/95 backdrop-blur-md border-b border-wave-blue/20">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Big Wave Truck Wash" className="h-12 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foam hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90">
              <a href="tel:+15551234567">
                <Phone className="w-4 h-4 mr-1" />
                Call Us
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foam">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-ocean-deep border-wave-blue/20 w-72">
                <SheetTitle className="text-foam">Menu</SheetTitle>
                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-foam hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                    <a href="tel:+15551234567">
                      <Phone className="w-4 h-4 mr-1" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
