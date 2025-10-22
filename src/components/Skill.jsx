import React from "react";
import { IconCloud } from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  // "flutter",
  // "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  // "prisma",
  // "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  // "jest",
  // "cypress",
  "docker",
  "git",
  // "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  // "androidstudio",
  // "sonarqube",
  "figma",
];

const Skill = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <>
      <section className="min-h-[80vh] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-10 px-6 md:px-10 overflow-hidden">
        <IconCloud images={images} />
      </section>
    </>
  );
};

export default Skill;
