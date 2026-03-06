import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SmoothImage from "@/components/SmoothImage";
import heroOfferings from "@/assets/hero-offerings.jpg";
import vehicleTractor from "@/assets/vehicle-tractor.png";
import vehicleTractorTrailer from "@/assets/vehicle-tractor-trailer.png";
import vehicleWashout from "@/assets/vehicle-washout.png";
import vehicleRvLarge from "@/assets/vehicle-rv-large.png";
import vehicleRvSmall from "@/assets/vehicle-rv-small.png";
import vehicleSmall from "@/assets/vehicle-small.png";

interface WashPackage {
  name: string;
  price: string;
  description: string;
  highlight?: boolean;
}

interface VehicleCategory {
  id: string;
  title: string;
  image: string;
  singleWash: WashPackage[];
  monthlyMembership: WashPackage[];
  manualWash: WashPackage[];
}

const vehicles: VehicleCategory[] = [
  {
    id: "tractor",
    title: "Tractor",
    image: vehicleTractor,
    singleWash: [
      { name: "Big Wave Signature", price: "$99.00", description: "Hand Brush: front / back / wheels / sides — ceramic seal, boosted air dry, undercarriages, spot free rinse", highlight: true },
      { name: "Big Wave Prime", price: "$79.00", description: "Hand Brush: front / back / wheels / sides — boosted air dry, undercarriages, spot free rinse" },
      { name: "Big Wave Basic", price: "$49.00", description: "Touch free wash, spot free rinse" },
    ],
    monthlyMembership: [
      { name: "Big Wave Signature", price: "$249.00", description: "Unlimited Signature washes all month — ceramic seal, boosted air dry, undercarriages, spot free rinse", highlight: true },
      { name: "Big Wave Prime", price: "$199.00", description: "Unlimited Prime washes all month — boosted air dry, undercarriages, spot free rinse" },
      { name: "Big Wave Basic", price: "$139.00", description: "Unlimited Basic washes all month — touch free wash, spot free rinse" },
    ],
    manualWash: [
      { name: "Manual Wash", price: "$49.99", description: "Professional manual wash — for a limited time only!", highlight: true },
    ],
  },
  {
    id: "tractor-trailer",
    title: "Tractor Trailer",
    image: vehicleTractorTrailer,
    singleWash: [
      { name: "Big Wave Signature", price: "$149.00", description: "Hand Brush: full tractor & trailer — ceramic seal, boosted air dry, undercarriages, spot free rinse", highlight: true },
      { name: "Big Wave Prime", price: "$119.00", description: "Hand Brush: full tractor & trailer — boosted air dry, undercarriages, spot free rinse" },
      { name: "Big Wave Basic", price: "$79.00", description: "Touch free wash, spot free rinse" },
    ],
    monthlyMembership: [
      { name: "Big Wave Signature", price: "$349.00", description: "Unlimited Signature washes all month", highlight: true },
      { name: "Big Wave Prime", price: "$279.00", description: "Unlimited Prime washes all month" },
      { name: "Big Wave Basic", price: "$199.00", description: "Unlimited Basic washes all month" },
    ],
    manualWash: [
      { name: "Manual Wash", price: "$79.99", description: "Professional manual wash — for a limited time only!", highlight: true },
    ],
  },
  {
    id: "washout",
    title: "Tractor Trailer Wash Out",
    image: vehicleWashout,
    singleWash: [
      { name: "Full Wash Out", price: "$129.00", description: "Complete interior trailer wash out — sanitized, deodorized, and pressure cleaned", highlight: true },
      { name: "Standard Wash Out", price: "$89.00", description: "Interior pressure wash and rinse" },
    ],
    monthlyMembership: [
      { name: "Full Wash Out", price: "$299.00", description: "Unlimited full wash outs all month", highlight: true },
      { name: "Standard Wash Out", price: "$219.00", description: "Unlimited standard wash outs all month" },
    ],
    manualWash: [
      { name: "Manual Wash Out", price: "$69.99", description: "Manual interior cleaning — for a limited time only!", highlight: true },
    ],
  },
  {
    id: "rv-large",
    title: "RV/Camper/Box Truck Over 30'",
    image: vehicleRvLarge,
    singleWash: [
      { name: "Big Wave Signature", price: "$119.00", description: "Hand Brush: full exterior — ceramic seal, boosted air dry, spot free rinse", highlight: true },
      { name: "Big Wave Prime", price: "$89.00", description: "Hand Brush: full exterior — boosted air dry, spot free rinse" },
      { name: "Big Wave Basic", price: "$59.00", description: "Touch free wash, spot free rinse" },
    ],
    monthlyMembership: [
      { name: "Big Wave Signature", price: "$289.00", description: "Unlimited Signature washes all month", highlight: true },
      { name: "Big Wave Prime", price: "$229.00", description: "Unlimited Prime washes all month" },
      { name: "Big Wave Basic", price: "$169.00", description: "Unlimited Basic washes all month" },
    ],
    manualWash: [
      { name: "Manual Wash", price: "$59.99", description: "Professional manual wash — for a limited time only!", highlight: true },
    ],
  },
  {
    id: "rv-small",
    title: "RV/Camper/Box Truck Under 30'",
    image: vehicleRvSmall,
    singleWash: [
      { name: "Big Wave Signature", price: "$89.00", description: "Hand Brush: full exterior — ceramic seal, boosted air dry, spot free rinse", highlight: true },
      { name: "Big Wave Prime", price: "$69.00", description: "Hand Brush: full exterior — boosted air dry, spot free rinse" },
      { name: "Big Wave Basic", price: "$45.00", description: "Touch free wash, spot free rinse" },
    ],
    monthlyMembership: [
      { name: "Big Wave Signature", price: "$219.00", description: "Unlimited Signature washes all month", highlight: true },
      { name: "Big Wave Prime", price: "$179.00", description: "Unlimited Prime washes all month" },
      { name: "Big Wave Basic", price: "$129.00", description: "Unlimited Basic washes all month" },
    ],
    manualWash: [
      { name: "Manual Wash", price: "$44.99", description: "Professional manual wash — for a limited time only!", highlight: true },
    ],
  },
  {
    id: "small",
    title: "Vehicles Under 23'",
    image: vehicleSmall,
    singleWash: [
      { name: "Big Wave Signature", price: "$59.00", description: "Hand Brush: full exterior — ceramic seal, boosted air dry, spot free rinse", highlight: true },
      { name: "Big Wave Prime", price: "$45.00", description: "Hand Brush: full exterior — boosted air dry, spot free rinse" },
      { name: "Big Wave Basic", price: "$29.00", description: "Touch free wash, spot free rinse" },
    ],
    monthlyMembership: [
      { name: "Big Wave Signature", price: "$149.00", description: "Unlimited Signature washes all month", highlight: true },
      { name: "Big Wave Prime", price: "$119.00", description: "Unlimited Prime washes all month" },
      { name: "Big Wave Basic", price: "$89.00", description: "Unlimited Basic washes all month" },
    ],
    manualWash: [
      { name: "Manual Wash", price: "$29.99", description: "Professional manual wash — for a limited time only!", highlight: true },
    ],
  },
];

const Pricing = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedVehicle(selectedVehicle === id ? null : id);
  };

  const selectedData = vehicles.find((v) => v.id === selectedVehicle);

  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        image={heroOfferings}
        title="Pricing"
        subtitle="Select your vehicle type to view our wash packages and pricing"
      />

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">Choose Your Vehicle</h2>
            <p className="text-muted-foreground">Tap a vehicle to see available wash packages</p>
          </div>

          {/* Vehicle Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {vehicles.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                layout
              >
                <button
                  onClick={() => handleCardClick(vehicle.id)}
                  className={`w-full rounded-xl overflow-hidden transition-all duration-300 border-2 group ${
                    selectedVehicle === vehicle.id
                      ? "border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                      : "border-border/50 hover:border-primary/40 hover:shadow-md"
                  }`}
                >
                  {/* Title bar */}
                  <div className={`px-4 py-3 text-center font-display font-semibold text-sm sm:text-base transition-colors ${
                    selectedVehicle === vehicle.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}>
                    {vehicle.title}
                  </div>
                  {/* Image area */}
                  <div className={`bg-ocean-deep flex items-center justify-center p-6 h-32 sm:h-40 transition-colors ${
                    selectedVehicle === vehicle.id ? "bg-ocean-dark" : ""
                  }`}>
                    <SmoothImage
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="h-full w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Expanded Pricing Details */}
          <AnimatePresence>
            {selectedData && (
              <motion.div
                key={selectedData.id}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-card border border-border/50 rounded-2xl shadow-xl p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-ocean-deep rounded-xl flex items-center justify-center p-2">
                        <img src={selectedData.image} alt={selectedData.title} className="h-full w-auto object-contain" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold">{selectedData.title}</h3>
                        <p className="text-muted-foreground text-sm">Select a wash type below</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedVehicle(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Tabs */}
                  <Tabs defaultValue="single" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="single" className="font-display text-xs sm:text-sm">Single Wash</TabsTrigger>
                      <TabsTrigger value="monthly" className="font-display text-xs sm:text-sm">Monthly Membership</TabsTrigger>
                      <TabsTrigger value="manual" className="font-display text-xs sm:text-sm">Manual Wash</TabsTrigger>
                    </TabsList>

                    <TabsContent value="single">
                      <PricingCards packages={selectedData.singleWash} />
                    </TabsContent>

                    <TabsContent value="monthly">
                      <PricingCards packages={selectedData.monthlyMembership} />
                    </TabsContent>

                    <TabsContent value="manual">
                      <PricingCards packages={selectedData.manualWash} />
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const PricingCards = ({ packages }: { packages: WashPackage[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {packages.map((pkg, i) => (
      <motion.div
        key={pkg.name}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
        className={`rounded-xl border p-6 flex flex-col justify-between transition-all ${
          pkg.highlight
            ? "border-primary bg-primary/5 shadow-md"
            : "border-border/50 bg-card"
        }`}
      >
        {pkg.highlight && (
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary mb-2">⭐ Recommended</span>
        )}
        <div>
          <h4 className="text-lg font-display font-semibold mb-1">{pkg.name}</h4>
          <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
        </div>
        <div className="flex items-end justify-between mt-auto pt-4 border-t border-border/30">
          <span className="text-3xl font-display font-bold text-primary">{pkg.price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90 font-display">
            <a href="tel:+15551234567">Book Now</a>
          </Button>
        </div>
      </motion.div>
    ))}
  </div>
);

export default Pricing;
