import { motion } from "framer-motion";

export default function Project() {

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
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-title-gradient"
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
          className="text-gray-600 dark:text-gray-200 mt-3 text-md"
        >
          Some of my highlighted works and experiments
        </motion.p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 point600:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {projects.map((proj, index) => (
          <motion.div
            onClick={() => setSelectedProj(proj)}
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
                Featured
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
                    Technologies
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

const projects = [
  {
    title: "Offering",
    description:
      "A blockchain-based platform that connects investors and syndicates, enabling seamless fundraising and allocation trading.",
    technologies: ["Next.js", "TailwindCSS", "Headless UI", "Zustand"],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/offering.png",
    responsibilities: [
      "Build website UI using Next.js and MUI.",
      "Add dark-mode feature.",
      "Connect API data to Home, Detail, Notifications and User pages.",
      "Manage global state with Zustand, responsive with all devices.",
    ],
  },
  {
    title: "Redkite Launchpad",
    description:
      " Red Kite Launchpad – a DeFi/Token sale platform for early-stage Web3 projects",
    technologies: ["React", "MUI", "Redux"],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/redkite.png",
    responsibilities: [
      "Change and update the website UI.",
      "Redesign layouts and improve page structure.",
      "Ensure responsiveness across all devices.",
      "Manage global state with Redux.",
    ],
  },
  {
    title: "Bike Rental Booking Website",
    description: "Car Rental Management System",
    technologies: ["React", "TailwindCSS", "ShadcnUi", "MobX"],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/bestbike.jpg",
    responsibilities: [
      "Build UI for viewing bikes, locations, and current position on the map.",
      "Build UI with Shadcn UI and Tailwind CSS",
      "Connect APIs to sync bike and location data.",
      "Manage state with MobX and responsive with all devices.",
    ],
  },
  {
    title: "Pet Care Appointment Booking Website",
    description:
      "A web application designed for users to easily book pet care services.",
    technologies: ["React", "TailwindCSS", "ShadcnUi", "MobX"],
    live: "#",
    github: "#",
    featured: false,
    image: "/img_project/miapet.png",
    responsibilities: [
      "Develop the user information page, pet care store page, and store review page.",
      "Manage user and pet information within the CMS.",
      "Use ShadCN UI and Tailwind CSS to build UI, connect APIs for data, and manage state with MobX, responsive with all devices",
    ],
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
    image: "/img_project/omikuji.png",
    responsibilities: [
      "Develop a CMS system to manage users and items mark on the map.",
      "Implement Web2Authen and FIDO for secure login.",
      "Use ShadCN UI and Tailwind CSS to build UI, connect APIs for data, and manage state with MobX, responsive with all devices",
    ],
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
    responsibilities: [
      "Develop APIs for main e-commerce features like product, cart, payment, and user management.",
      "Connect to MongoDB to store and get product, order, and user data.",
      "Use JWT for user auth and role access, and add security to protect user data.",
    ],
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
