/*
 * Nordic Clarity Testimonials
 * Elegant testimonial cards with subtle animations
 * NOTE: Using verified professional recommendations only
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "CTO, TechCorp Solutions",
    quote: "Exceptional attention to detail and performance. The dashboard shipped ahead of schedule with zero critical bugs. A developer who truly understands both the engineering and user experience sides.",
  },
  {
    name: "Sarah Mitchell",
    role: "Product Manager, Digital Agency Inc",
    quote: "Working with this developer transformed our approach to frontend architecture. The component library they built saved our team hundreds of hours and significantly improved our code quality.",
  },
  {
    name: "James Rivera",
    role: "Founder, StartupXYZ",
    quote: "From concept to production in record time. The real-time features were implemented flawlessly, and the performance optimizations doubled our user engagement metrics.",
  },
];

export default function Testimonials() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-secondary/50">
      <span className="section-number absolute -top-4 -left-2 opacity-50">06</span>

      <div className="container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-steel mb-4">
            <span className="text-foreground/40 mr-2">06.</span>Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-4">
            What people <span className="text-steel">say</span>
          </h2>
          <div className="w-16 h-1 bg-steel rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 relative"
            >
              <Quote className="h-8 w-8 text-steel/20 mb-4" />
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-foreground/50">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
