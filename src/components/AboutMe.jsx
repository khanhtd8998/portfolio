import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Briefcase,
  Contact,
  Download,
  Mail,
  MapPin,
  User
} from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const infoList = [
    { icon: <User className="w-4 h-4" />, label: t("about_me.info.name"), value: "Khanh Tran" },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: t("about_me.info.location"),
      value: t("about_me.info.location_value"),
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: t("about_me.info.email"),
      value: "trankhanhhy199x@gmail.com",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: t("about_me.info.profession"),
      value: t("about_me.info.profession_value"),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // viewport={{ once: true }}

      className="min-h-[70vh] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 py-10"
    >
      {/* Ảnh avatar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-shrink-0 hidden md:block"
      >
        <img
          src="./avatar.jpg"
          alt="Profile"
          className="w-72 h-72 md:w-80 md:h-80 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] object-cover"
        />
      </motion.div>

      {/* Phần nội dung */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        // viewport={{ once: true }}

        className="flex-1 space-y-6 text-center md:text-left"
      >
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-title-gradient">
            {t("about_me.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
            {t("about_me.description")}
          </p>
        </div>

        {/* Grid thông tin */}
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {infoList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            // viewport={{ once: true }}
            >
              <Card className="border border-gray-200 dark:border-gray-700 dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <CardContent className="flex items-center gap-3 py-3">
                  <div className="text-gray-600 dark:text-gray-200">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-200 uppercase">
                      {item.label}
                    </p>
                    <p className="font-medium break-all text-sm">
                      {item.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center w-full justify-center sm:w-auto sm:justify-start gap-2 bg-gradient-primary text-white px-5 py-2 rounded-lg transition-all"
          >
            <a
              href="https://s3.topcv.vn/data-cvs/topcv-cv-uploads/b3ab80a05be744e35667aaa727ef5e2e.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=s3-tp-topcv%2F20260609%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260609T160251Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=5e6d684f25d921ae464bf7420f360f84ca049968bedd16e80a10d88bc6c2b74a"
              download
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about_me.button.view_cv")} <Download size={16} />
            </a>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            className="dark:text-black flex items-center w-full justify-center sm:w-auto sm:justify-start gap-2 bg-white border border-gray-300 px-5 py-2 rounded-lg shadow-sm transition-all"
            onClick={handleScrollToContact}
          >
            {t("button.contact_me")} <Contact size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
