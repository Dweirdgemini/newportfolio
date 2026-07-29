/*
 * Nordic Clarity Hero
 * Professional introduction with staggered text animation, floating background
 */
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.svg"
          alt=""
          className={`w-full h-full object-cover ${theme === "dark" ? "opacity-10" : "opacity-30"}`}
        />
        <div className={`absolute inset-0 ${theme === "dark" ? "bg-background/90" : "bg-gradient-to-b from-background/60 via-background/80 to-background"}`} />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full border border-steel/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-[10%] w-20 h-20 rounded-lg border border-amber/20 rotate-12 hidden lg:block"
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Monospaced label */}
          <motion.p
            variants={wordAnimation}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-mono text-sm text-steel mb-6 tracking-wide"
          >
            <span className="text-foreground/40 mr-2">//</span>
            Available for freelance — June 2026
          </motion.p>

          {/* Main heading */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            <motion.span variants={wordAnimation} initial="hidden" animate="visible" custom={1}>
              I build interfaces
            </motion.span>
            <br />
            <motion.span variants={wordAnimation} initial="hidden" animate="visible" custom={2}>
              that{" "}
              <span className="text-steel">perform.</span>
            </motion.span>
          </h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed"
          >
            Fullstack Engineer casting magic spells through lines of code — 5+ years across frontend,
            machine learning, and Python. I build with React, Next.js, TypeScript, and AI-driven tooling,
            and I'm looking for big gigs that push me to keep learning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#projects">
              <Button
                size="lg"
                className="bg-steel hover:bg-steel/90 text-white px-8 h-12 text-base group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="px-8 h-12 text-base border-foreground/20 hover:border-foreground/40"
              >
                Start a Project
              </Button>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/Dweirdgemini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-steel transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              <span className="font-mono">GitHub</span>
            </a>
            <span className="text-foreground/20">|</span>
            <a
              href="https://x.com/Dev_ngG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-steel transition-colors duration-200"
            >
              <Linkedin className="h-4 w-4" />
              <span className="font-mono">X</span>
            </a>
            <span className="text-foreground/20">|</span>
            <a
              href="#contact"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-steel transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              <span className="font-mono">Email</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-steel"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
