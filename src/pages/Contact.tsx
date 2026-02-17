import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
  { icon: Mail, label: "Email", value: "info@bigwavetruckwash.com", href: "mailto:info@bigwavetruckwash.com" },
  { icon: MapPin, label: "Address", value: "123 Wash Boulevard, Truckville, TX 75001", href: undefined },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-ocean-deep py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foam/60 text-lg max-w-2xl mx-auto"
        >
          We'd love to hear from you. Reach out anytime — we're here to help.
        </motion.p>
      </section>

      {/* Contact Info Cards */}
      <SectionWrapper>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full text-center border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Hours + Map */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Operating Hours */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" /> Operating Hours
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="font-medium">Hand Wash</span>
                <span className="text-muted-foreground text-sm">Mon–Sat: 7AM – 7PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="font-medium">Hand Wash (Sunday)</span>
                <span className="text-muted-foreground text-sm">Closed</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="font-medium">Automatic Wash</span>
                <span className="text-primary font-semibold text-sm">Open 24/7</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-display font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" /> Find Us
            </h2>
            <div className="rounded-lg overflow-hidden border border-border/50 bg-muted h-[300px] flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0!2d-96.8!3d32.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ4JzAwLjAiTiA5NsKwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Big Wave Truck Wash Location"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Contact;
