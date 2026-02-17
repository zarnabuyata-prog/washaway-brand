import { motion } from "framer-motion";
import { Award, Users, Truck, Target } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroAbout from "@/assets/hero-about.jpg";
import aboutFacility from "@/assets/about-facility.jpg";

const stats = [
  { icon: Truck, value: "50,000+", label: "Trucks Washed" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years in Business" },
  { icon: Target, value: "99%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        image={heroAbout}
        title="About Big Wave"
        subtitle="Our story, our mission, and our commitment to keeping your fleet spotless."
      />

      {/* Story */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Big Wave Truck Wash was founded with a simple mission: provide the highest quality truck washing services at competitive prices. What started as a single wash bay has grown into a full-service facility equipped with both professional hand wash teams and state-of-the-art automatic wash systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We understand that your trucks are your livelihood. That's why we treat every vehicle like it's our own — with care, precision, and pride. From owner-operators to large fleet managers, we deliver a consistent, reliable wash experience every single time.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img src={aboutFacility} alt="Big Wave Truck Wash facility" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper dark>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-foam/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Mission & Values */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted name in professional truck washing by delivering exceptional service, maintaining the highest standards of quality, and building lasting relationships with every customer who rolls through our gates.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Our Values</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Quality in every detail</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Customer satisfaction above all</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Environmentally responsible practices</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Fair pricing, no hidden costs</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Treating your truck like our own</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default About;
