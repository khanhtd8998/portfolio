import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import TerminalBackground from "./components/TerminalBackground";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isIntroDone, setIsIntroDone] = useState(false);
  const { i18n } = useTranslation();

  const experienceRef = useRef(null);
  const initialLang = localStorage.getItem("i18nextLng") || "en";
  const [currentLanguage, setCurrentLanguage] = useState(initialLang);

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

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    localStorage.setItem("i18nextLng", currentLanguage);
  }, [currentLanguage]);

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
              <Header />
              <section id="home">
                <Introduction />
                <div className="size-10 fixed top-20 md:top-10.5 right-4 z-50 bg-white/95 dark:bg-black backdrop-blur-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg shadow-[var(--shadow-glow)] rounded-full flex items-center justify-center">
                  <AnimatedThemeToggler />
                </div>
                {/* <div className="size-10 fixed top-32 md:top-22.5 right-4 z-50 bg-white/95 dark:bg-black backdrop-blur-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg shadow-[var(--shadow-glow)] rounded-full flex items-center justify-center">
                  <motion.button
                    onClick={() => {
                      setCurrentLanguage((prev) =>
                        prev === "en" ? "vi" : "en"
                      );
                    }}
                    className="size-10 bg-white/95 font-semibold dark:bg-black backdrop-blur-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg shadow-[var(--shadow-glow)] rounded-full flex items-center justify-center"
                  >
                    {currentLanguage.toUpperCase()}
                  </motion.button>
                </div> */}
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
