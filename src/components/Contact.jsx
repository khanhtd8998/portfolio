import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-[80vh] max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 py-10 md:py-16"
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
          Let's Connect
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
          Follow me on social media or send me an email. I would love to hear
          from you!
        </motion.p>
      </motion.div>

      {/* Main Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
      >
        {/* Left: Socials */}
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-[var(--shadow-glow)]">
          <h3 className="text-xl font-semibold mb-6">Social Networks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {socials.map((item, idx) => (
              <motion.a
                href={item.url}
                key={idx}
                whileHover={{ scale: 1.05 }}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 border ${item.color} rounded-xl p-3 cursor-pointer hover:shadow-md transition`}
              >
                <div className="text-xl">{item.icon}</div>
                <div className="flex flex-col text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-500 dark:text-gray-200">
                    {item.username}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-[var(--shadow-glow)]">
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
          <form className="flex flex-col gap-4">
            <Input placeholder="Full Name *" required />
            <Input placeholder="Email Address *" type="email" required />
            <Textarea placeholder="Your message..." rows={4} required />

            <motion.div
              whileHover={{
                scale: 1.01,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center w-full justify-center gap-2 bg-gradient-primary px-5 py-2 rounded-lg transition-all"
            >
              <Button
                type="submit"
                className="bg-transparent hover:bg-transparent shadow-none text-center text-white"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    color: "border-blue-400",
    url: "https://www.linkedin.com/in/tr%E1%BA%A7n-duy-kh%C3%A1nh-1a6a18386/",
    username: "Trần Duy Khánh",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    color: "border-gray-400",
    url: "https://github.com/khanhtd8998",
    username: "khanhtd8998",
  },
  {
    name: "Facebook",
    icon: <FaFacebook size={24} />,
    color: "border-blue-500",
    url: "https://facebook.com",
    username: "Trần Duy Khánh",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={24} />,
    color: "border-sky-400",
    url: "https://twitter.com",
    username: "khanhtd8998",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    color: "border-pink-400",
    url: "https://instagram.com",
    username: "traankhanhh",
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={24} />,
    color: "border-red-400",
    url: "https://www.youtube.com/",
    username: "tranduykhanh",
  },
];
