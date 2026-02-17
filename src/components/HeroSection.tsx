import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
}

const HeroSection = ({ image, title, subtitle, ctaText, ctaLink, overlay = true }: HeroSectionProps) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/80 via-ocean-dark/60 to-ocean-dark/90" />
      )}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-foam/80 mb-8 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 font-display tracking-wider">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
