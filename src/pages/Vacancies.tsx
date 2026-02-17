import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight, Users, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionWrapper from "@/components/SectionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobs = [
  {
    title: "Truck Wash Technician",
    location: "Truckville, TX",
    type: "Full-time",
    description: "Join our hand wash team and deliver premium truck washing services. You'll be trained on professional techniques and work with high-quality products.",
    requirements: ["Must be able to work outdoors", "Physical stamina for hands-on washing", "Reliable and punctual", "No experience needed — we train you"],
  },
  {
    title: "Shift Supervisor",
    location: "Truckville, TX",
    type: "Full-time",
    description: "Lead a team of wash technicians and ensure quality standards are met. Oversee daily operations and customer interactions.",
    requirements: ["2+ years management experience", "Strong leadership and communication skills", "Experience in service industry preferred", "Valid driver's license"],
  },
  {
    title: "Customer Service Representative",
    location: "Truckville, TX",
    type: "Part-time / Full-time",
    description: "Be the face of Big Wave! Greet customers, process payments, answer questions, and ensure every visitor has a great experience.",
    requirements: ["Excellent communication skills", "Friendly and professional demeanor", "Basic computer skills", "Flexible schedule availability"],
  },
];

const benefits = [
  { icon: Heart, title: "Health Benefits", desc: "Medical and dental coverage for full-time employees" },
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Advance your career with training and promotion paths" },
  { icon: Users, title: "Team Culture", desc: "Join a supportive, hardworking team that feels like family" },
];

const Vacancies = () => {
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
          Join Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foam/60 text-lg max-w-2xl mx-auto"
        >
          Be part of the Big Wave family. We're always looking for passionate people to join our crew.
        </motion.p>
      </section>

      {/* Benefits */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold mb-4">Why Work With Us?</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Job Listings */}
      <SectionWrapper dark>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Open Positions</h2>
          <p className="text-foam/60">Find the role that's right for you</p>
        </div>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-ocean-dark border-wave-blue/20">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl font-display text-foam">{job.title}</CardTitle>
                    <div className="flex items-center gap-3 text-xs text-foam/50">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.type}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foam/70 text-sm mb-4">{job.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foam/50 uppercase mb-2">Requirements</p>
                    <ul className="space-y-1">
                      {job.requirements.map((r) => (
                        <li key={r} className="text-sm text-foam/60 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90 font-display tracking-wider">
                    <a href="mailto:careers@bigwavetruckwash.com?subject=Application: ${job.title}">
                      Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
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

export default Vacancies;
