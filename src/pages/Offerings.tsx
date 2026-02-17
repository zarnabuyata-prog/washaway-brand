import { motion } from "framer-motion";
import { Check, Droplets, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionWrapper from "@/components/SectionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const handWashPackages = [
  { name: "Basic Wash", price: "$75", features: ["Exterior hand wash", "Wheel cleaning", "Rinse & dry", "Basic tire dressing"] },
  { name: "Premium Wash", price: "$125", popular: true, features: ["Everything in Basic", "Interior cab wipe-down", "Dashboard & console", "Mirror & glass polish", "Tire shine"] },
  { name: "Full Detail", price: "$250", features: ["Everything in Premium", "Full interior detailing", "Engine bay wash", "Trailer washout", "Wax & sealant", "Deodorizing"] },
];

const autoWashPackages = [
  { name: "Quick Wash", price: "$35", features: ["High-pressure pre-soak", "Touchless wash", "Spot-free rinse", "Air dry"] },
  { name: "Standard Wash", price: "$55", popular: true, features: ["Everything in Quick", "Undercarriage wash", "Wheel blast", "Triple foam polish", "Enhanced dry"] },
  { name: "Ultimate Wash", price: "$80", features: ["Everything in Standard", "Ceramic sealant coat", "Tire shine spray", "Rain repellent", "Extended dry"] },
];

const addOns = [
  { name: "Trailer Washout", price: "$40" },
  { name: "Engine Bay Cleaning", price: "$50" },
  { name: "Ceramic Coating", price: "$75" },
  { name: "Interior Deep Clean", price: "$100" },
  { name: "Odor Elimination", price: "$30" },
  { name: "Headlight Restoration", price: "$45" },
];

const PricingCards = ({ packages }: { packages: typeof handWashPackages }) => (
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
);

const Offerings = () => {
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
          Our Offerings
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foam/60 text-lg max-w-2xl mx-auto"
        >
          Complete service descriptions and transparent pricing for every wash option
        </motion.p>
      </section>

      {/* Tabbed Pricing */}
      <SectionWrapper>
        <Tabs defaultValue="handwash" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
            <TabsTrigger value="handwash" className="font-display flex items-center gap-2">
              <Droplets className="w-4 h-4" /> Hand Wash
            </TabsTrigger>
            <TabsTrigger value="automatic" className="font-display flex items-center gap-2">
              <Zap className="w-4 h-4" /> Automatic
            </TabsTrigger>
          </TabsList>

          <TabsContent value="handwash">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold mb-2">Hand Wash Packages</h2>
              <p className="text-muted-foreground">Professional hand washing by our trained team. Mon–Sat 7AM–7PM</p>
            </div>
            <PricingCards packages={handWashPackages} />
          </TabsContent>

          <TabsContent value="automatic">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold mb-2">Automatic Wash Tiers</h2>
              <p className="text-muted-foreground">Touchless wash technology, available 24/7</p>
            </div>
            <PricingCards packages={autoWashPackages} />
          </TabsContent>
        </Tabs>
      </SectionWrapper>

      {/* Add-ons */}
      <SectionWrapper dark>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-display font-bold text-primary">Add-On Services</h2>
          </div>
          <p className="text-foam/60">Enhance any wash with these extras</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {addOns.map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="bg-ocean-dark border-wave-blue/20">
                <CardContent className="p-4 flex items-center justify-between">
                  <span className="text-foam text-sm font-medium">{addon.name}</span>
                  <span className="text-primary font-display font-bold text-lg">{addon.price}</span>
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

export default Offerings;
