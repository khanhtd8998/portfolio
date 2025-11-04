import {
  Briefcase,
  Code,
  Folder,
  Home,
  Mail,
  User,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", name: "Home", icon: <Home size={18} /> },
  { id: "about", name: "About", icon: <User size={18} /> },
  { id: "experience", name: "Experience", icon: <Briefcase size={18} /> },
  { id: "project", name: "Project", icon: <Folder size={18} /> },
  { id: "skill", name: "Skill", icon: <Code size={18} /> },
  { id: "contact", name: "Contact", icon: <Mail size={18} /> },
];

export default function HeaderV2() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -70;
      const top = element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    if (window.innerWidth < 768) {
      setOpen(false); // 🔹 Chỉ đóng menu ở mobile
    }
  };

  // 🔹 Detect section đang hiển thị
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveId(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.6 } // nên để 0.4 hoặc 0.5 thay vì 1
  //   );

  //   navItems.forEach((item) => {
  //     const el = document.getElementById(item.id);
  //     if (el) observer.observe(el);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: window.innerWidth < 1024 ? 0.2 : 0.4,
        rootMargin: "-150px 0px -150px 0px", // ⚡ kích hoạt sớm hơn 100px khi gần top
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full md:w-auto px-4">
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center justify-evenly gap-1.5 lg:gap-3 rounded-full dark:bg-black shadow-[var(--shadow-glow)] bg-white/80 backdrop-blur-md px-4 lg:px-6 py-2">
        {navItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="relative flex items-center gap-2 rounded-full px-3 lg:px-4 py-2 text-sm md:text-md font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-gradient-primary"
                  transition={{ type: "spring", stiffness: 800, damping: 30 }}
                />
              )}
              <span
                className={`flex items-center gap-1 lg:gap-2 relative z-10 ${
                  isActive ? "text-white text-sm lg:text-md" : ""
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.name}</span>
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Button */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white/90 dark:bg-black backdrop-blur-md shadow-[var(--shadow-glow)] p-2 rounded-full"
        >
          {open ? (
            <X className="dark:text-white" size={22} />
          ) : (
            <Menu className="dark:text-white" size={22} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 w-[90%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 bg-white/95 dark:bg-black backdrop-blur-md shadow-[var(--shadow-glow)] rounded-2xl p-4 md:hidden"
          >
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`flex justify-start items-center w-32 gap-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600 dark:text-gray-200 hover:text-black"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
