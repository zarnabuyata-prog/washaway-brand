import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothImage from "@/components/SmoothImage";
import heroHandwash from "@/assets/hero-handwash.jpg";
import handwashDetail from "@/assets/handwash-detail.jpg";

const packages = [
  {
    name: "Basic Wash",
    price: "$75",
    popular: false,
    features: ["Exterior hand wash", "Wheel cleaning", "Rinse & dry", "Basic tire dressing"],
  },
  {
    name: "Premium Wash",
    price: "$125",
    popular: true,
    features: ["Everything in Basic", "Interior cab wipe-down", "Dashboard & console cleaning", "Mirror & glass polish", "Tire shine"],
  },
  {
    name: "Full Detail",
    price: "$250",
    popular: false,
    features: ["Everything in Premium", "Full interior detailing", "Engine bay wash", "Trailer washout", "Wax & sealant coating", "Deodorizing treatment"],
  },
];

const included = [
  "Professional brush wash",
  "High-pressure rinse",
  "Trailer washouts",
  "Wheel & tire cleaning",
  "Glass & mirror polishing",
  "Interior cab cleaning",
  "Engine bay cleaning",
  "Wax & sealant applications",
];

const HandWash = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        image={heroHandwash}
        title="Hand Wash Services"
        subtitle="Meticulous hand washing by trained professionals. Every detail matters."
      />

      {/* Description */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <SmoothImage src={handwashDetail} alt="Detailed truck cleaning result" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">The Human Touch</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our hand wash team doesn't just clean your truck — they care for it. Using premium products and proven techniques, our trained professionals deliver a meticulous clean that automated systems simply can't match. From cab to trailer, every surface gets the attention it deserves.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper dark>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">What's Included</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {included.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-2 text-foam/80"
            >
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Hand Wash Packages</h2>
          <p className="text-muted-foreground">Choose the level of care your truck needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className={`h-full relative ${pkg.popular ? "border-primary border-2 shadow-lg shadow-primary/10" : "border-border/50"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-display">{pkg.name}</CardTitle>
                  <div className="text-4xl font-display font-bold text-primary mt-2">{pkg.price}</div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full font-display tracking-wider ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={pkg.popular ? "default" : "outline"}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default HandWash;
