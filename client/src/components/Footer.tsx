/*
 * Nordic Clarity Footer
 * Professional footer with quick links, social links, and copyright
 */
import { Github, Linkedin, Mail, ArrowUp, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {  icon: Github, href: "https://github.com/Dweirdgemini", label: "GitHub"},
  { icon: Twitter, href:  "https://x.com/Dev_ngG", label: "X" },
  { icon: Mail, href: "mailto:nwachukujoshua27@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="w-7 h-7"
              />
              <span className="font-heading font-bold text-lg text-foreground">Dev_ng</span>
            </div>
            <p className="text-sm text-foreground/50 max-w-xs">
              Building production-quality applications with precision and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/50 hover:text-steel transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-foreground/50 hover:text-steel hover:bg-steel/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} Dev_ng. Built with React, TypeScript & Tailwind CSS.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-foreground/40 hover:text-steel gap-1.5 h-8"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}
