import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
export const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const initialLang = localStorage.getItem("i18nextLng") || "en";
  const [currentLanguage, setCurrentLanguage] = useState(initialLang);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    localStorage.setItem("i18nextLng", currentLanguage);
  }, [currentLanguage]);

  return (
    <>
      <motion.button
        onClick={() => {
          setCurrentLanguage((prev) => (prev === "en" ? "vi" : "en"));
        }}
        className="size-10 bg-transparent md:bg-white/95 dark:bg-transparent font-semibold rounded-full flex items-center justify-center text-gray-600 dark:text-gray-200 hover:text-black"
      >
        {currentLanguage.toUpperCase()}
      </motion.button>
    </>
  );
};
