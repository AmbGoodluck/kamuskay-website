"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
