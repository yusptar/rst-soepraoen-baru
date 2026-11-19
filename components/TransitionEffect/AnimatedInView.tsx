import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Variant =
  | "fade-in"
  | "fade-out"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out";

interface AnimatedInViewProps {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  variant?: Variant;
  className?: string;
}

export default function AnimatedInView({
  children,
  delay = 0,
  once = false,
  variant = "fade-up",
  className = "",
}: AnimatedInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "-100px",
  });

  const variants: Record<Variant, any> = {
    "fade-in": { opacity: 0 },
    "fade-out": { opacity: 1 }, // terlihat dulu, lalu menghilang saat keluar dari view
    "fade-up": { opacity: 0, y: 50 },
    "fade-down": { opacity: 0, y: -50 },
    "fade-left": { opacity: 0, x: -50 },
    "fade-right": { opacity: 0, x: 50 },
    "zoom-in": { opacity: 0, scale: 0.8 },
    "zoom-out": { opacity: 0, scale: 1.2 },
  };

  // Target akhir untuk semua animasi (reset ke normal)
  const animateTo = {
    opacity: variant === "fade-out" ? 0 : 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants[variant]}
      animate={isInView ? animateTo : variants[variant]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
