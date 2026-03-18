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
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <SectionDivider variant="wave" color="#fafafa" />
        <Skills />
        <SectionDivider variant="diagonal" color="#fafafa" />
        <TextReveal />
        <Projects />
        <SectionDivider variant="angle" color="#fafafa" />
        <GitHub />
        <Achievements />
        <SectionDivider variant="wave" color="#fafafa" />
        <Blog />
        <Experience />
        <SectionDivider variant="diagonal" color="#fafafa" flip />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
