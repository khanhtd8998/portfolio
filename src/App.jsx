import AboutMeV2 from "./components/AboutMeV2";
import Experience from "./components/Experience";
import HeaderV2 from "./components/HeaderV2";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Skills from "./components/Skills";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden">
        <div
          className="
    absolute inset-0 z-0
    bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#f3f4f6_2px,#f3f4f6_4px)]
    dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#1f2937_2px,#1f2937_4px)]
  "
        />
        <div className="relative z-10 p-6 md:p-10">
          <HeaderV2 />
          <section id="home">
            <Introduction />
            <div className="size-10 fixed top-20 md:top-10.5 right-4 z-10 bg-white/95 dark:bg-black backdrop-blur-md shadow-[var(--shadow-glow)] rounded-full flex items-center justify-center">
              <AnimatedThemeToggler />
            </div>
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

          {/* <section id="skill">
            <Skill />
          </section> */}
        </div>
      </div>
    </>
  );
}

export default App;
