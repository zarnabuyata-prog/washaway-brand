import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const SectionWrapper = ({ children, className = "", dark = false }: SectionWrapperProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-20 px-4 ${dark ? "bg-ocean-deep text-foam" : "bg-background text-foreground"} ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;
