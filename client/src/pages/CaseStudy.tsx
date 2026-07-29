/*
 * Case Study Page
 * Full editorial layout for individual project case studies
 * Sections: Overview, Problem, Goals, Research, Design, Development, Challenges, Tech, Results, Gallery, Learnings, Links
 */
import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Clock,
  Users,
  Briefcase,
  Target,
  Search,
  Palette,
  Code,
  AlertTriangle,
  Cpu,
  TrendingUp,
  Images,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function CaseStudy() {
  const params = useParams<{ slug: string }>();
  const project = getProjectBySlug(params.slug || "");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const SectionIcon = ({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-9 h-9 rounded-md bg-steel/10 flex items-center justify-center">
        <Icon className="h-4.5 w-4.5 text-steel" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6 gap-2 text-foreground/60 hover:text-steel">
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Button>
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">
              <span className={`font-mono text-xs px-2.5 py-1 rounded ${
                project.type === "Client" ? "bg-steel/10 text-steel" : "bg-amber/10 text-amber-dark"
              }`}>
                {project.type} Project
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl">
                {project.shortDescription}
              </p>
            </div>

            {/* Overview metadata */}
            <div className="lg:col-span-4">
              <div className="bg-card border border-border rounded-lg p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-steel" />
                  <div>
                    <p className="text-xs text-foreground/40">Timeline</p>
                    <p className="text-sm font-medium">{project.timeline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-steel" />
                  <div>
                    <p className="text-xs text-foreground/40">Team Size</p>
                    <p className="text-sm font-medium">{project.teamSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-steel" />
                  <div>
                    <p className="text-xs text-foreground/40">My Role</p>
                    <p className="text-sm font-medium">{project.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 rounded-lg overflow-hidden border border-border"
          >
            <img
              src={project.gallery[0]}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-8 space-y-16">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={Briefcase} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Overview</h2>
                <p className="text-foreground/70 leading-relaxed">{project.overview}</p>
              </motion.div>

              {/* The Problem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={AlertTriangle} />}
                <h2 className="font-heading text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-foreground/70 leading-relaxed">{project.problem}</p>
              </motion.div>

              {/* Goals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={Target} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Goals</h2>
                <ul className="space-y-3">
                  {project.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-steel shrink-0" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Research & Planning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={Search} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Research & Planning</h2>
                <p className="text-foreground/70 leading-relaxed">{project.research}</p>
              </motion.div>

              {/* Design Decisions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={Palette} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Design Decisions</h2>
                <p className="text-foreground/70 leading-relaxed">{project.designDecisions}</p>
              </motion.div>

              {/* Development Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={Code} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Development Process</h2>
                <p className="text-foreground/70 leading-relaxed">{project.developmentProcess}</p>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={AlertTriangle} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <div
                      key={i}
                      className="bg-card border border-border rounded-lg p-5"
                    >
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        <span className="text-steel font-medium">Solution: </span>
                        {challenge.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={Cpu} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="space-y-3">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={tech.name}
                      className="flex items-start gap-4 bg-card border border-border rounded-lg p-4"
                    >
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-steel/10 text-steel whitespace-nowrap h-fit">
                        {tech.name}
                      </span>
                      <p className="text-sm text-foreground/60">{tech.reason}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={TrendingUp} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Results</h2>
                <div className="space-y-3">
                  {project.results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-amber shrink-0" />
                      <p className="text-foreground/70 text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={Images} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid gap-4">
                  {project.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-lg overflow-hidden border border-border"
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Learnings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {<SectionIcon icon={Lightbulb} />}
                <h2 className="font-heading text-2xl font-bold mb-4">Key Learnings</h2>
                <ul className="space-y-3">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-steel shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap gap-4">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-steel hover:bg-steel/90 text-white gap-2">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <Github className="h-4 w-4" /> GitHub Repository
                    </Button>
                  </a>
                </div>

                {/* Related Projects */}
                {project.relatedProjects.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="font-heading font-semibold text-sm mb-3">Related Projects</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.relatedProjects.map((relatedSlug) => {
                        const related = getProjectBySlug(relatedSlug);
                        return related ? (
                          <Link key={relatedSlug} href={`/project/${relatedSlug}`}>
                            <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-muted text-foreground/60 hover:bg-steel/10 hover:text-steel transition-colors cursor-pointer">
                              {related.title}
                            </span>
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Quick Nav */}
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-heading font-semibold text-sm mb-3">On This Page</h3>
                  <nav className="flex flex-col gap-2">
                    {[
                      { label: "Overview", id: "overview" },
                      { label: "The Problem", id: "problem" },
                      { label: "Goals", id: "goals" },
                      { label: "Research", id: "research" },
                      { label: "Design Decisions", id: "design" },
                      { label: "Development", id: "development" },
                      { label: "Challenges", id: "challenges" },
                      { label: "Technologies", id: "technologies" },
                      { label: "Results", id: "results" },
                      { label: "Gallery", id: "gallery" },
                      { label: "Key Learnings", id: "learnings" },
                    ].map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-xs text-foreground/50 hover:text-steel transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Tech Stack */}
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-heading font-semibold text-sm mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="font-mono text-[11px] px-2 py-1 rounded bg-steel/10 text-steel"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-steel/5 border border-steel/20 rounded-lg p-5">
                  <h3 className="font-heading font-semibold text-sm mb-2">
                    Interested in working together?
                  </h3>
                  <p className="text-xs text-foreground/60 mb-4">
                    I'm available for freelance projects and full-time opportunities.
                  </p>
                  <a href="/#contact">
                    <Button size="sm" className="bg-steel hover:bg-steel/90 text-white w-full">
                      Get In Touch
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
