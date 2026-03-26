import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GSAPProvider from "@/components/GSAPProvider";

export default function Home() {
  return (
    <GSAPProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </GSAPProvider>
  );
}
