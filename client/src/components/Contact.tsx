/*
 * Nordic Clarity Contact Section
 * Contact form with social links and CV download
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Mail, Github, Linkedin, Download, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.05 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-secondary/50">
      <span className="section-number absolute -top-4 -left-2 opacity-50">08</span>

      <div className="container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-steel mb-4">
            <span className="text-foreground/40 mr-2">08.</span>Get In Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Let's <span className="text-steel">connect</span>
          </h2>
          <div className="w-16 h-1 bg-steel rounded-full mb-4" />
          <p className="text-foreground/60 max-w-lg">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
            Typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <CheckCircle className="h-12 w-12 text-steel mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Message Sent!</h3>
                <p className="text-foreground/60 text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-foreground/60 mb-1.5 block">Name</label>
                    <Input
                      placeholder="Your name"
                      className="h-10"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-foreground/60 mb-1.5 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-foreground/60 mb-1.5 block">Subject</label>
                  <Input
                    placeholder="Project inquiry"
                    className="h-10"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-foreground/60 mb-1.5 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-steel hover:bg-steel/90 text-white w-full sm:w-auto h-11 px-8"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-heading font-semibold text-foreground">Contact Details</h3>

              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-steel transition-colors group"
              >
                <div className="w-9 h-9 rounded-md bg-steel/10 flex items-center justify-center group-hover:bg-steel/20 transition-colors">
                  <Mail className="h-4 w-4 text-steel" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40">Email</p>
                  <p className="text-sm font-medium">hello@example.com</p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-steel transition-colors group"
              >
                <div className="w-9 h-9 rounded-md bg-steel/10 flex items-center justify-center group-hover:bg-steel/20 transition-colors">
                  <Github className="h-4 w-4 text-steel" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40">GitHub</p>
                  <p className="text-sm font-medium">github.com/dev</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-steel transition-colors group"
              >
                <div className="w-9 h-9 rounded-md bg-steel/10 flex items-center justify-center group-hover:bg-steel/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-steel" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40">LinkedIn</p>
                  <p className="text-sm font-medium">linkedin.com/in/dev</p>
                </div>
              </a>
            </div>

            <Button
              variant="outline"
              className="w-full border-foreground/20 hover:border-foreground/40 gap-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>

            {/* Availability badge */}
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for freelance work
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
