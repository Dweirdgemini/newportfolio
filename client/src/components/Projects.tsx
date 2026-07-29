/*
 * Nordic Clarity Featured Projects
 * Project cards with category filtering, links to case study pages
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

const categories = ["All", "Dashboard", "E-Commerce", "SaaS", "Mobile", "AI/ML"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.05 });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <span className="section-number absolute -top-4 -left-2 opacity-50">03</span>

      <div className="container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-steel mb-4">
            <span className="text-foreground/40 mr-2">03.</span>Featured Work
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Projects I've <span className="text-steel">built</span>
          </h2>
          <div className="w-16 h-1 bg-steel rounded-full mb-8" />

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-3 py-1.5 rounded-md transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-steel text-white"
                    : "bg-muted text-foreground/60 hover:text-foreground hover:bg-muted-foreground/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-steel/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.gallery[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-foreground/50 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className={`font-mono text-xs px-2 py-0.5 rounded ${
                      project.type === "Client" ? "bg-steel/10 text-steel" : "bg-amber/10 text-amber-dark"
                    }`}>
                      {project.type}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-steel transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech.name}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-muted text-foreground/60"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveDemo}
                        className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-steel transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-steel transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </div>
                    <Link href={`/project/${project.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-steel hover:text-steel/80 hover:bg-steel/10 gap-1"
                      >
                        Case Study
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
