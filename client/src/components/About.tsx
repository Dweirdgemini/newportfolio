/*
 * Nordic Clarity About Section
 * Editorial layout with numbered section marker, asymmetric columns
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Code2, Layers, Zap, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, TypeScript, Next.js" },
  { icon: Layers, label: "Full-Stack", desc: "Node.js, PostgreSQL, REST" },
  { icon: Zap, label: "Performance", desc: "Lighthouse 95+, Core Web Vitals" },
  { icon: Users, label: "Collaboration", desc: "Agile, Code Review, CI/CD" },
];

export default function About() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column - heading */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-sm text-steel mb-4">
              <span className="text-foreground/40 mr-2"></span>About Me
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Engineering interfaces with{" "}
              <span className="text-steel">precision</span> and purpose
            </h2>
            <div className="w-16 h-1 bg-steel rounded-full mb-6" />
          </motion.div>

          {/* Right column - content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7"
          >
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
              <p className="text-lg mb-6">
                I'm a senior full-stack developer with 6+ years of experience building production-grade web applications.
                My focus is on creating interfaces that are not just visually polished, but engineered for performance,
                accessibility, and scalability.
              </p>
              <p className="mb-8">
                I specialize in React, NextJs ecosystems, from complex dashboards and real-time collaboration tools
                to headless e-commerce platforms. I believe in writing code that's maintainable, testing
                thoroughly, and shipping iteratively. My approach combines strong technical fundamentals
                with a deep understanding of user experience principles.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <item.icon className="h-5 w-5 text-steel mb-2" />
                  <p className="font-semibold text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-foreground/60 mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
