import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TextReveal from "@/components/TextReveal";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

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
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
