/*
 * Nordic Clarity Skills Section
 * Categorized skill cards with monospaced labels
 */
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Code, Server, Smartphone, Database, Cloud, Bot, Terminal, Paintbrush } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    color: "steel",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "steel",
    skills: ["Node.js", "Express", "Python", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    color: "steel",
    skills: ["React Native", "Expo", "iOS", "Android", "Cross-Platform"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "steel",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "steel",
    skills: ["AWS", "Docker", "Vercel", "CI/CD", "Terraform", "GitHub Actions"],
  },
  {
    icon: Bot,
    title: "AI Tools",
    color: "steel",
    skills: ["OpenAI API", "LangChain", "RAG Systems", "Vector DBs", "Prompt Engineering"],
  },
  {
    icon: Terminal,
    title: "DevOps",
    color: "steel",
    skills: ["Docker", "Kubernetes", "Linux", "Nginx", "Monitoring"],
  },
  {
    icon: Paintbrush,
    title: "Design",
    color: "steel",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping", "Framer"],
  },
];

export default function Skills() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-secondary/50">
      <span className="section-number absolute -top-4 -left-2 opacity-50">02</span>

      <div className="container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-steel mb-4">
            <span className="text-foreground/40 mr-2">02.</span>Technical Skills
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Technologies I <span className="text-steel">work with</span>
          </h2>
          <div className="w-16 h-1 bg-steel rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="group bg-card border border-border rounded-lg p-5 hover:shadow-lg hover:border-steel/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-md bg-steel/10 flex items-center justify-center">
                  <cat.icon className="h-4.5 w-4.5 text-steel" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2 py-1 rounded bg-muted text-foreground/70 group-hover:bg-steel/10 group-hover:text-steel transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
