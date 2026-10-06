import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Section id="about" title="About" tone="mist"><About /></Section>
        <Section id="skills" title="Core skills"><Skills /></Section>
        <Section id="experience" title="Experience" tone="mist"><Experience /></Section>
        <Section id="projects" title="Projects"><Projects /></Section>
        <Section id="credentials" title="Credentials" tone="mist">
          <div className="grid gap-12 md:grid-cols-2">
            <Certifications />
            <Education />
          </div>
        </Section>
        <Section id="contact" title="Contact"><Contact /></Section>
      </main>
    </>
  );
}
