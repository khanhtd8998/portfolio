import { ArrowUp } from "lucide-react";
import AboutMeV2 from "./components/AboutMeV2";
import Experience from "./components/Experience";
import HeaderV2 from "./components/HeaderV2";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Contact from "./components/Contact";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalBackground from "./components/TerminalBackground";

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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

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
          {!isIntroDone && (
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-transparent dark:bg-black/95 bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  // "url('https://static1.squarespace.com/static/5e949a92e17d55230cd1d44f/t/65ca8953891a0f30a15497f0/1707772248183/BSonoma3x2.png?format=1500w')",
                  "url('./bg-terminal.jpg')",
                backgroundSize: "cover",
              }}
            >
              <TerminalBackground onComplete={handleIntroEnd} />
            </motion.div>
          )}
        </AnimatePresence>

        {isIntroDone && (
          <>
            <div className="relative z-10 p-6 md:p-10">
              <HeaderV2 />
              <section id="home">
                <Introduction />
                <div className="size-10 fixed top-20 md:top-10.5 right-4 z-50 bg-white/95 dark:bg-black backdrop-blur-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg shadow-[var(--shadow-glow)] rounded-full flex items-center justify-center">
                  <AnimatedThemeToggler />
                </div>
              </section>

              <section id="about">
                <AboutMeV2 />
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
              {showScrollTop && (
                <motion.button
                  key="scrollTopButton"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="size-10 fixed bottom-8 right-4 z-50 bg-white/95 dark:bg-black backdrop-blur-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg shadow-[var(--shadow-glow)] rounded-full flex items-center justify-center"
                  onClick={handleScrollToTop}
                >
                  <ArrowUp />
                </motion.button>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </>
  );
}

export default App;
