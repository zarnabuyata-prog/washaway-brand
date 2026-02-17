import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroAutomatic from "@/assets/hero-automatic.jpg";
import automaticProcess from "@/assets/automatic-process.jpg";

const tiers = [
  {
    name: "Quick Wash",
    price: "$35",
    popular: false,
    features: ["High-pressure pre-soak", "Touchless wash cycle", "Spot-free rinse", "Air dry"],
  },
  {
    name: "Standard Wash",
    price: "$55",
    popular: true,
    features: ["Everything in Quick Wash", "Undercarriage wash", "Wheel blast", "Triple foam polish", "Enhanced dry"],
  },
  {
    name: "Ultimate Wash",
    price: "$80",
    popular: false,
    features: ["Everything in Standard", "Ceramic sealant coat", "Tire shine spray", "Rain repellent coating", "Extended dry cycle"],
  },
];

const AutomaticWash = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        image={heroAutomatic}
        title="Automatic Wash"
        subtitle="State-of-the-art touchless technology. Fast, efficient, and available around the clock."
      />

      {/* 24/7 Callout */}
      <section className="relative py-20 overflow-hidden">
        <img src={automaticProcess} alt="Automatic wash in action" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ocean-dark/80" />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 backdrop-blur-sm"
          >
            <Clock className="w-10 h-10 text-primary" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">Open 24 Hours, 7 Days a Week</h2>
          <p className="text-foam/70 max-w-2xl">
            Our automatic wash bay never sleeps. Whether it's 3 AM or 3 PM, drive in and get a spotless wash in minutes. No appointment needed — just pull up and go.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">How It Works</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {["Drive In", "Select Your Wash", "Drive Out Clean"].map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-display font-bold">
                {i + 1}
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{step}</h3>
              <p className="text-sm text-muted-foreground">
                {i === 0 && "Pull your truck into the automatic wash bay — no appointment needed."}
                {i === 1 && "Choose from our Quick, Standard, or Ultimate wash packages at the kiosk."}
                {i === 2 && "Sit back and let our system do the work. You'll be sparkling clean in minutes."}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper dark>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">Automatic Wash Pricing</h2>
          <p className="text-foam/60">Fast, affordable, and always available</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className={`h-full bg-ocean-dark border ${tier.popular ? "border-primary border-2 shadow-lg shadow-primary/10" : "border-wave-blue/20"}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full relative">
                    BEST VALUE
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-display text-foam">{tier.name}</CardTitle>
                  <div className="text-4xl font-display font-bold text-primary mt-2">{tier.price}</div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foam/70">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full font-display tracking-wider ${tier.popular ? "bg-primary hover:bg-primary/90" : "bg-wave-blue/20 hover:bg-wave-blue/30 text-foam"}`}>
                    Get This Wash
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

export default AutomaticWash;
