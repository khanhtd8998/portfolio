import AboutMeV2 from "./components/AboutMeV2";
import Experience from "./components/Experience";
import HeaderV2 from "./components/HeaderV2";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import Section from "./components/Section";
import Skill from "./components/Skill";
import Skills from "./components/Skills";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-white relative overflow-x-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />
        <div className="relative z-10 p-10">
          <HeaderV2 />
          <section id="home">
            <Introduction />
            <AnimatedThemeToggler className="absolute top-4 right-4 z-10" />
          </section>

          <section id="about">
            <AboutMeV2 />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="project">
            <Project />
          </section>

          <section id="skill">
            <Skills />
          </section>

          <section id="skill">
            <Skill />
          </section>

          {/* <section id="skill">
            <Section />
          </section> */}
        </div>
      </div>
    </>
  );
}

export default App;
