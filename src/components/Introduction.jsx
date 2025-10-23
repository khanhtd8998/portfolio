import Atropos from "atropos/react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// ====== Hiệu ứng typing text ======
const roles = ["Frontend Developer", "React Developer", "Full-stack Developer"];

export default function Introduction() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const handleScrollToProjects = () => {
    const section = document.getElementById("project");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Tạo hiệu ứng gõ chữ
  useEffect(() => {
    if (index === roles.length) return;

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        if (!reverse && subIndex === roles[index].length) {
          setReverse(true);
          setTimeout(() => {}, 1000);
        } else if (reverse && subIndex === 0) {
          setReverse(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      reverse ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <motion.section
      className="min-h-[90vh] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-6 my-2 md:my-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }} // 👈 chạy lại khi scroll tới
    >
      {/* LEFT SIDE */}
      <motion.div variants={container} className="flex-1">
        <motion.h1
          variants={item}
          className="text-4xl lg:text-6xl font-bold text-text-title mb-3"
        >
          Hi, I'm <span className="">Khanh</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-xl font-semibold md:text-2xl text-gray-700 mb-5 h-[30px]"
        >
          {roles[index].substring(0, subIndex)}|
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-600 leading-relaxed text-sm md:text-md mb-6 max-w-xl"
        >
          {/* Hello! I'm Tran Duy Khanh, a passionate Frontend Developer based in
          Vietnam. I specialize in creating beautiful and functional web
          applications using modern technologies like React, Tailwind CSS, and
          more. With a keen eye for design and a commitment to clean code, I
          strive to deliver exceptional user experiences. When I'm not coding,
          you can find me exploring new tech trends or enjoying a good book. */}
          Hello! I'm Tran Duy Khanh, a Frontend Developer from Vietnam
          specializing in modern web technologies like React and Tailwind CSS.
          I’m passionate about crafting clean, user-friendly interfaces and
          delivering great digital experiences.
        </motion.p>

        <motion.div variants={item} className="flex items-center gap-2 mb-6">
          <MapPin className="text-red-500" size={18} />
          <span className="text-gray-700 text-sm md:text-base">
            Cau Giay, Ha Noi
          </span>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center w-full justify-center sm:w-auto sm:justify-start gap-2 bg-gradient-primary text-white px-5 py-2 rounded-full transition-all"
            onClick={handleScrollToProjects}
          >
            View Projects <ArrowRight size={16} />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center w-full justify-center sm:w-auto sm:justify-start gap-2 bg-white border border-gray-300 px-5 py-2 rounded-full shadow-sm transition-all"
          >
            Contact Me <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }} // 👈 cho phép chạy lại mỗi lần vào view
        className="flex-1 flex items-center justify-center p-0 md:p-6 lg:p-12"
      >
        <Atropos
          className="atropos-avatar w-[80%] h-[80%]"
          activeOffset={40}
          shadowScale={1.05}
          highlight={false}
        >
          <div className="p-1.5 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 inline-block">
            <img
              src="./avatar.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full shadow-xl"
            />
          </div>
        </Atropos>
      </motion.div>
    </motion.section>
  );
}

// ====== Animation Variants ======
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
