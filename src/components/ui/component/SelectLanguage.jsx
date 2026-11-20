import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export const SelectLanguage = () => {
  const { i18n } = useTranslation();

  const currentLang =
    i18n.resolvedLanguage ||
    i18n.language ||
    localStorage.getItem("i18nextLng") ||
    "en";
  const isVi = currentLang.startsWith("vi");
  const targetLang = isVi ? "en" : "vi";
  const targetLabel = isVi ? "EN" : "VI";

  const toggleLanguage = (e) => {
    e?.stopPropagation?.();
    i18n.changeLanguage(targetLang);
    localStorage.setItem("i18nextLng", targetLang);
  };

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isVi ? "Switch to English" : "Chuyển sang Tiếng Việt"}
      aria-label={isVi ? "Switch to English" : "Chuyển sang Tiếng Việt"}
      className="size-10 bg-transparent md:bg-white/95 dark:bg-transparent font-bold text-xs tracking-wider rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={targetLabel}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {targetLabel}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};
