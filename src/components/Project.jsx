import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.section
      id="projects"
      className="min-h-[80vh] max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 py-16 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: "linear" }}
    >
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
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-text-title"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-gray-600 mt-3 text-md"
        >
          Some of my highlighted works and experiments
        </motion.p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={container}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`relative flex flex-col bg-white/90 backdrop-blur-md rounded-2xl border ${
              proj.featured
                ? "border-yellow-400 shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
                : "border-gray-200 shadow-sm hover:shadow-md"
            } transition-all overflow-hidden`}
          >
            {/* Featured tag */}
            {proj.featured && (
              <div className="absolute top-3 right-3 bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Featured
              </div>
            )}

            {/* Image */}
            <div className="w-full h-48 bg-gray-100 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 justify-between p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{proj.description}</p>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              {/* <div className="mt-auto flex gap-3">
                <button className="flex-1 bg-black text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition">
                  Live Demo
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition">
                  GitHub
                </button>
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

const projects = [
  {
    title: "Offering",
    description:
      "A blockchain-based platform that connects investors and syndicates, enabling seamless fundraising and allocation trading.",
    technologies: ["Next.js", "TailwindCSS", "Headless UI", "Zustand"],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/offering.PNG",
  },
  {
    title: "Redkite Launchpad",
    description:
      " Red Kite Launchpad – a DeFi/Token sale platform for early-stage Web3 projects",
    technologies: ["React", "MUI", "Redux"],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/redkite.PNG",
  },
  {
    title: "Bike Rental Booking Website",
    description: "Car Rental Management System",
    technologies: ["React", "TailwindCSS", "ShadcnUi", "MobX"],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/bestbike.PNG",
  },
  {
    title: "Pet Care Appointment Booking Website",
    description:
      "A web application designed for users to easily book pet care services.",
    technologies: ["React", "TailwindCSS", "ShadcnUi", "MobX"],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/miapet.PNG",
  },
  {
    title: "Omikuji Webapp",
    description:
      "A web application that allow users to add items on a map or visit specific locations and use a mobile device to collect virtual items.",
    technologies: [
      "React",
      "TailwindCSS",
      "ShadcnUi",
      "MobX",
      "Mapbox",
      "SimpleWebAuthen",
      "FIDO2",
    ],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/omikuji.PNG",
  },
  {
    title: "Building services with Nodejs",
    description:
      "Backend APIs for e-commerce features (product, cart, payment, user)",
    technologies: ["Node.js", "ExpressJS", "MongoDB", "JWT", "Vercel"],
    live: "#",
    github: "https://github.com/khanhtd8998/nodejs_project.git",
    featured: false,
    image: "https://images.viblo.asia/1a93ce50-73b2-4ab6-a71a-b8a29840214a.png",
  },
];

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
