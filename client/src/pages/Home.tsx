/*
 * Home Page — Premium Developer Portfolio
 * Nordic Clarity Design System
 * Assembles all sections: Hero, About, Skills, Projects, Experience, Services, Testimonials, GitHub, CTA, Contact, Footer
 */
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import GitHubActivity from "@/components/GitHubActivity";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const progress = useScrollProgress();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <GitHubActivity />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
