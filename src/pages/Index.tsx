import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Zap, Shield, Star, ThumbsUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothImage from "@/components/SmoothImage";
import heroHome from "@/assets/hero-home.jpg";
import serviceHandwash from "@/assets/service-handwash.jpg";
import serviceAutomatic from "@/assets/service-automatic.jpg";
import ctaWorker from "@/assets/cta-worker.jpg";

const services = [
  {
    icon: Droplets,
    title: "Hand Wash",
    description: "Premium hand washing by trained professionals. Every inch of your truck cleaned with care and precision.",
    link: "/hand-wash",
  },
  {
    icon: Zap,
    title: "Automatic Wash",
    description: "State-of-the-art touchless wash systems. Fast, efficient, and available 24/7 for your convenience.",
    link: "/automatic-wash",
  },
];

const whyUs = [
  { icon: Shield, title: "Quality Guaranteed", desc: "We use premium products and meticulous techniques to deliver a spotless finish every time." },
  { icon: ThumbsUp, title: "Affordable Pricing", desc: "Competitive rates without compromising on quality. Get the best value for your money." },
  { icon: Clock, title: "Fast & Convenient", desc: "Minimal wait times and flexible scheduling. Get back on the road quickly." },
];

const testimonials = [
  { name: "Mike R.", role: "Fleet Manager", text: "Big Wave keeps our entire fleet looking brand new. The hand wash team is incredible — thorough, fast, and always professional." },
  { name: "Sarah T.", role: "Owner Operator", text: "The automatic wash is a lifesaver on tight schedules. Open 24/7 means I can get a wash anytime, day or night." },
  { name: "Carlos D.", role: "Logistics Director", text: "We switched our entire fleet contract to Big Wave. Consistent quality, great pricing, and outstanding customer service." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        image={heroHome}
        title="Ride the Wave of Clean"
        subtitle="Professional truck washing services that keep your fleet looking its best. Hand wash precision meets automatic convenience."
        ctaText="View Our Services"
        ctaLink="/offerings"
      />

      {/* Services Overview */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Choose the perfect wash for your needs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <SmoothImage
                    src={i === 0 ? serviceHandwash : serviceAutomatic}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors -mt-12 relative z-10 border-4 border-background">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">Why Choose Big Wave?</h2>
          <p className="text-foam/60 max-w-2xl mx-auto">We're not just a truck wash — we're your fleet's best friend</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foam mb-2">{item.title}</h3>
              <p className="text-foam/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <SmoothImage src={ctaWorker} alt="Big Wave worker" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ocean-dark/85" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">Ready to Ride the Wave?</h2>
          <p className="text-foam/70 mb-8 max-w-xl mx-auto">Get your truck sparkling clean today. Walk-ins welcome or call ahead to schedule.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 font-display tracking-wider">
              <a href="tel:+15551234567">Call Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-display tracking-wider">
              <Link to="/offerings">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
