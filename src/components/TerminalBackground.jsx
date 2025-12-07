import { useEffect } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { motion } from "framer-motion";

const TerminalBackground = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent dark:bg-black/95 bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('./bg-terminal.jpg')",
        backgroundSize: "cover",
      }}
    >
      <motion.section
        className="min-h-[100vh] w-full mx-auto flex flex-col md:flex-row items-center justify-evenly gap-6 my-2 px-4 md:my-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Terminal className="shadow-[0_10px_25px_rgba(0,0,0,0.1)] mx-4">
          <TypingAnimation duration={20}>
            &gt; pnpm dlx shadcn@latest portfolio
          </TypingAnimation>
          <AnimatedSpan className="text-green-500">
            ✔ Preflight checks.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Updating Home
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Updating About
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Updating Experience
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Updating Skill
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Updating Contact
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            ✔ Installing dependencies.
          </AnimatedSpan>
          <AnimatedSpan className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>
          <TypingAnimation duration={15} className="text-muted-foreground">
            Success! Project initialization completed.
          </TypingAnimation>
          <TypingAnimation duration={15} className="text-muted-foreground">
            Welcome to khanhtd8998's portfolio!
          </TypingAnimation>
        </Terminal>
      </motion.section>
    </motion.div>
  );
};

export default TerminalBackground;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
