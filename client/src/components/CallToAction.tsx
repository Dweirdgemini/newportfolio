/*
 * Nordic Clarity CTA Section
 * "Let's Build Your Next Project" with trust-building elements, animated background
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Eye, Clock, Globe, MessageSquare, Code, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustElements = [
  { icon: Clock, label: "Fast response time" },
  { icon: MessageSquare, label: "Open to freelance" },
  { icon: Globe, label: "Remote collaboration" },
  { icon: MessageSquare, label: "Clear communication" },
  { icon: Code, label: "Modern practices" },
  { icon: Smartphone, label: "Responsive & accessible" },
];

export default function CallToAction() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.svg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[20%] w-24 h-24 rounded-full border border-steel/15 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-[15%] w-16 h-16 rounded-lg border border-amber/15 rotate-12 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-[8%] w-12 h-12 rounded-full bg-steel/5 hidden lg:block"
      />

      <div className="container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="font-mono text-sm text-steel mb-4">
            <span className="text-foreground/40 mr-2">//</span>Ready to collaborate?
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Let's Build Your{" "}
            <span className="text-steel">Next Project</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed">
            Whether you need a modern website, a scalable web application, or a custom digital solution,
            I'd love to help bring your ideas to life.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href="#contact">
            <Button
              size="lg"
              className="bg-steel hover:bg-steel/90 text-white px-10 h-13 text-base shadow-lg shadow-steel/20 group"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#projects">
            <Button
              variant="outline"
              size="lg"
              className="px-10 h-13 text-base border-foreground/20 hover:border-foreground/40 gap-2"
            >
              <Eye className="h-4 w-4" />
              View My Work
            </Button>
          </a>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {trustElements.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                className="flex flex-col items-center text-center gap-2 p-3"
              >
                <div className="w-10 h-10 rounded-full bg-steel/10 flex items-center justify-center">
                  <item.icon className="h-4 w-4 text-steel" />
                </div>
                <span className="text-xs text-foreground/60 font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
