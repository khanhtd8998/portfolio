import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

export default function SmoothScroll() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 30,
  });

  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef < HTMLDivElement > null;

  const y = useTransform(
    smoothProgress,
    [0, 1],
    contentHeight ? [0, -(contentHeight - window.innerHeight)] : [0, 0]
  );

  useLayoutEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className="scrollBody"
        style={{
          y,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          overflowY: "hidden",
        }}
        ref={contentRef}
      >
        <Outlet />
      </motion.div>
    </>
  );
}
