import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.button
        key="scrollTopButton"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="size-10 fixed bottom-8 md:bottom-32 right-4 z-50 bg-white/95 dark:bg-black backdrop-blur-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg shadow-[var(--shadow-glow)] rounded-full flex items-center justify-center"
        onClick={handleScrollToTop}
      >
        <ArrowUp />
      </motion.button>
    </>
  );
};
