import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Project() {
  const { t } = useTranslation();
  
  const projects = t("project.list", { returnObjects: true });
  const projectList = Array.isArray(projects) ? projects : [];

  return (
    <motion.section
      className="min-h-[80vh] max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 py-10 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "linear" }}
    >
      <motion.div
        className="text-center mb-6"
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
          {t("project.title")}
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
          {t("project.description")}
        </motion.p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 point600:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {projectList.map((proj, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`relative flex flex-col bg-white/90 dark:bg-gray-900 backdrop-blur-md rounded-3xl border ${
              proj.featured
                ? "border-nimevoli shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
                : "dark:border-gray-800 dark:hover:border-gray-700 shadow-[var(--shadow-glow)]"
            } transition-all overflow-hidden`}
          >
            {/* Featured tag */}
            {proj.featured && (
              <div className="absolute top-3 right-3 bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {t("project.featured")}
              </div>
            )}

            {/* Image */}
            <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 justify-start p-4 md:p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                {proj.description}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/80 dark:bg-gray-600/80 backdrop-blur-sm rounded-xl text-black flex flex-col justify-center items-center px-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-14 h-14 bg-white object-fill rounded-md border border-gray-300 dark:border-b-gray-500"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {proj.title}
                    </h4>
                    {/* <p className="text-sm text-gray-600 dark:text-gray-300">
                      {proj.description}
                    </p> */}
                  </div>
                </div>

                {/* Chi tiết như role / members / tasks */}
                <ul className="text-gray-600 dark:text-gray-200 text-sm mb-3 list-disc pl-4">
                  {proj?.responsibilities?.map((item, index) => (
                    <li className="my-0.5" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies (icon / badges) */}
                <div>
                  <p className="font-semibold dark:text-gray-200 text-sm mb-2">
                    {t("project.technologies")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional: icons row like hình của m */}
                {proj.techIcons && (
                  <div className="flex items-center gap-4 pt-2">
                    {proj.techIcons.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`tech-${i}`}
                        className="w-6 h-6 object-contain"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}


const container = {
  // hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};
