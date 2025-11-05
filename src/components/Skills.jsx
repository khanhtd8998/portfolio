import React from "react";
import Atropos from "atropos/react";
import "atropos/css";
import { motion } from "framer-motion";

const skills = [
  { name: "React", slug: "react", isCdn: true },
  { name: "HTML", slug: "./img_techstack/html.png", isCdn: false },
  { name: "CSS", slug: "./img_techstack/css.png", isCdn: false },
  { name: "JavaScript", slug: "./img_techstack/js.png", isCdn: false },
  { name: "Node.js", slug: "nodedotjs", isCdn: true },
  { name: "TypeScript", slug: "typescript", isCdn: true },
  { name: "Next.js", slug: "nextdotjs", isCdn: true },
  { name: "ShadcnUI", slug: "shadcnui", isCdn: true },
  { name: "MongoDB", slug: "mongodb", isCdn: true },
  { name: "Vercel", slug: "vercel", isCdn: true },
  { name: "Git", slug: "git", isCdn: true },
  { name: "Github", slug: "github", isCdn: true },
  { name: "Gitlab", slug: "gitlab", isCdn: true },
  { name: "Docker", slug: "docker", isCdn: true },
  { name: "Postman", slug: "postman", isCdn: true },
  { name: "MobX", slug: "mobx", isCdn: true },
  { name: "TailwindCSS", slug: "tailwindcss", isCdn: true },
  { name: "Mui", slug: "mui", isCdn: true },
  { name: "Ant Design", slug: "antdesign", isCdn: true },

  { name: "Vite", slug: "./img_techstack/vite.png", isCdn: false },
  { name: "VS Code", slug: "./img_techstack/vsc.png", isCdn: false },
];

const Skills = () => {
  return (
    <motion.section
      className="min-h-[70vh] max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "linear" }}
    >
      {/* Header */}
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
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-title-gradient"
        >
          My Tech Stack
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
          Technologies I use to craft beautiful, efficient, and scalable web
          apps.
        </motion.p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-5 w-full"
      >
        {skills.map(({ name, slug, isCdn }, i) => (
          <Atropos
            key={i}
            activeOffset={40}
            shadowScale={1.05}
            className="atropos-avatar w-[84px] h-[84px] md:w-[96px] md:h-[96px] lg:w-[120px] lg:h-[120px] xl:w-[144px] xl:h-[144px] animate-fade-in-up mx-auto"
          >
            <div
              className="group relative w-full h-full rounded-2xl 
              bg-white/80 backdrop-blur-md border border-white/50 
              shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center 
              transition-all duration-700 hover:-translate-y-2 
              hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
            >
              {/* vòng sáng gradient chuyển động */}
              <div
                className="absolute inset-0 rounded-2xl border-[2px] border-transparent 
                bg-[length:400%_400%] 
                animate-gradient-border 
                bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 
                opacity-0 group-hover:opacity-100 transition-all duration-700"
              ></div>

              {/* icon */}
              <img
                // src={"./img_techstack/docker.png"}
                src={
                  isCdn ? `https://cdn.simpleicons.org/${slug}/${slug}` : slug
                }
                alt={name}
                className="relative w-[45%] h-[45%] object-contain mb-2 
                transition-transform duration-500 group-hover:scale-110"
              />

              {/* text */}
              <span className="text-sm font-medium text-neutral-700 dark:text-black/90 group-hover:text-indigo-600 transition-colors duration-300 relative z-10">
                {name}
              </span>
            </div>
          </Atropos>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
