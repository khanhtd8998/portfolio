import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import TerminalBackground from "./components/TerminalBackground";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SelectLanguage } from "./components/ui/component/SelectLanguage";
import { ScrollToTop } from "./components/ui/component/ScrollToTop";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isIntroDone, setIsIntroDone] = useState(false);

  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowScrollTop(true);
        } else {
          const rect = entry.boundingClientRect;
          if (rect.top > 0) {
            setShowScrollTop(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => {
      if (experienceRef.current) observer.unobserve(experienceRef.current);
    };
  }, [isIntroDone]);

  const handleIntroEnd = () => {
    setIsIntroDone(true);
  };

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
        <AnimatePresence>
          {!isIntroDone && <TerminalBackground onComplete={handleIntroEnd} />}
        </AnimatePresence>

        {isIntroDone && (
          <>
            <div className="relative z-10 p-6 md:p-10">
              <Header />
              <section id="home">
                <Introduction />
                <div className="size-10 hidden md:flex items-center justify-center fixed top-20 md:top-10.5 right-4 z-50 bg-white/95 dark:bg-black backdrop-blur-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg shadow-[var(--shadow-glow)] rounded-full">
                  <AnimatedThemeToggler />
                </div>
                <div className="size-10 hidden md:flex items-center justify-center fixed top-32 md:top-22.5 right-4 z-50 bg-white/95 dark:bg-black backdrop-blur-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg shadow-[var(--shadow-glow)] rounded-full">
                  <SelectLanguage />
                </div>
              </section>

              <section id="about">
                <AboutMe />
              </section>

              <section id="experience" ref={experienceRef}>
                <Experience />
              </section>

              <section id="project">
                <Project />
              </section>

              <section id="skill">
                <Skills />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </div>
            <AnimatePresence>
              {showScrollTop && <ScrollToTop />}
            </AnimatePresence>
          </>
        )}
      </div>
    </>
  );
}

export default App;
