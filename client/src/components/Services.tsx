/*
 * Nordic Clarity Services Section
 * Animated service cards with hover effects
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  Layout,
  Globe,
  BarChart3,
  Smartphone,
  Cloud,
  Plug,
  Palette,
  Bug,
  Gauge,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Responsive Websites",
    desc: "Pixel-perfect, mobile-first websites that look stunning on every device and screen size.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Professional online presence with SEO optimization and conversion-focused design.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    desc: "Data-rich dashboards with real-time updates, interactive charts, and intuitive navigation.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications with native performance and smooth interactions.",
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    desc: "Scalable SaaS products with user management, billing, and real-time features.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    desc: "Seamless integration with third-party services, payment gateways, and external APIs.",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    desc: "Faithful implementation of design mockups with attention to detail and animation.",
  },
  {
    icon: Bug,
    title: "Bug Fixing",
    desc: "Identifying and resolving complex issues in existing applications with thorough testing.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Auditing and improving load times, rendering performance, and Core Web Vitals.",
  },
];

export default function Services() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="services" className="relative py-24 md:py-32">
      <span className="section-number absolute -top-4 -left-2 opacity-50">05</span>

      <div className="container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-steel mb-4">
            <span className="text-foreground/40 mr-2">05.</span>What I Build
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Services I <span className="text-steel">offer</span>
          </h2>
          <div className="w-16 h-1 bg-steel rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-steel/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-steel/10 flex items-center justify-center mb-4 group-hover:bg-steel/20 transition-colors duration-300">
                <service.icon className="h-5 w-5 text-steel" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
