import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("work");

  const workData = t("experience.work_data", { returnObjects: true });
  const educationData = t("experience.education_data", { returnObjects: true });

  const experienceData = {
    work: Array.isArray(workData) ? workData : [],
    education: Array.isArray(educationData) ? educationData : [],
  };

  const items = experienceData[activeTab] || [];

  return (
    <section className="min-h-[60vh] max-w-7xl mx-auto flex flex-col items-center justify-start py-10 md:py-16 overflow-hidden">
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1], // cubic-bezier mượt
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-title-gradient"
        >
          {t("experience.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-gray-600 dark:text-gray-200 mt-3 text-md"
        >
          {t("experience.description")}
        </motion.p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-4 mb-10 bg-white/80 dark:bg-gray-900 dark:shadow-[0_0_15px_rgba(255,255,255,0.15)] shadow-[0_0_15px_rgba(1,1,1,0.15)] p-2 rounded-full">
        {["work", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-gradient-primary rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span
              className={`relative z-10 ${activeTab === tab
                ? "text-white"
                : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
            >
              {tab === "work" ? t("experience.tabs.work") : t("experience.tabs.education")}
            </span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // 👈 mỗi tab là 1 layout riêng
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((exp) => (
              <motion.div
                key={exp.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 flex flex-col h-full justify-between bg-white/80 dark:bg-gray-900 rounded-lg backdrop-blur-md hover:border hover:border-gradient-primary border border-gray-100 dark:border-gray-800 dark:hover:border-gray-700 shadow-[var(--shadow-glow)] transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {exp.title}
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-200 text-sm mb-3 list-disc pl-4">
                    {exp.description?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

