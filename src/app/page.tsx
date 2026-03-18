import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TextReveal from "@/components/TextReveal";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import Achievements from "@/components/Achievements";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <TextReveal />
        <Projects />
        <GitHub />
        <Achievements />
        <Blog />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
