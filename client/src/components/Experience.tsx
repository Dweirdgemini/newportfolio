/*
 * Nordic Clarity Experience Timeline
 * Vertical timeline with roles, responsibilities, and tech stacks
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    date: "2024 – Present",
    responsibilities: [
      "Led frontend architecture for 3 major product lines",
      "Reduced bundle size by 45% through code splitting and lazy loading",
      "Mentored 4 junior developers on React best practices",
      "Implemented real-time features serving 10K+ concurrent users",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Inc",
    date: "2022 – 2024",
    responsibilities: [
      "Built 15+ client websites with focus on performance and SEO",
      "Created reusable component library used across all projects",
      "Improved Lighthouse scores from avg 65 to 95+ across portfolio",
      "Managed deployments and CI/CD pipelines",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    role: "Junior Developer",
    company: "StartupXYZ",
    date: "2020 – 2022",
    responsibilities: [
      "Developed core features for SaaS product from ground up",
      "Implemented authentication and role-based access control",
      "Built responsive UI components following design system",
      "Wrote unit and integration tests with 80%+ coverage",
    ],
    technologies: ["React", "JavaScript", "Express", "MongoDB", "Docker"],
  },
];

export default function Experience() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-secondary/50">
      <span className="section-number absolute -top-4 -left-2 opacity-50">04</span>

      <div className="container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-steel mb-4">
            <span className="text-foreground/40 mr-2">04.</span>Experience
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Where I've <span className="text-steel">contributed</span>
          </h2>
          <div className="w-16 h-1 bg-steel rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] md:left-1/2 w-[17px] h-[17px] rounded-full border-4 border-background bg-steel md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="h-4 w-4 text-steel" />
                      <span className="font-mono text-xs text-foreground/50">{exp.date}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">{exp.role}</h3>
                    <p className="text-sm text-steel mb-4">{exp.company}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-steel shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2 py-0.5 rounded bg-muted text-foreground/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
