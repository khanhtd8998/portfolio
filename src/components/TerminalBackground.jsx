import { useEffect } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TerminalBackground = ({ onComplete }) => {
  const { t } = useTranslation();

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
            {t("terminal.command")}
          </TypingAnimation>
          <AnimatedSpan className="text-green-500">
            {t("terminal.preflight")}
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            {t("terminal.updating_home")}
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            {t("terminal.updating_about")}
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            {t("terminal.updating_experience")}
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            {t("terminal.updating_skill")}
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            {t("terminal.updating_contact")}
          </AnimatedSpan>
          <AnimatedSpan className="text-green-500">
            {t("terminal.installing")}
          </AnimatedSpan>
          <AnimatedSpan className="text-blue-500">
            <span>{t("terminal.updated_file")}</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>
          <TypingAnimation duration={15} className="text-muted-foreground">
            {t("terminal.success")}
          </TypingAnimation>
          <TypingAnimation duration={15} className="text-muted-foreground">
            {t("terminal.welcome")}
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
