import { motion } from "framer-motion";

export default function MarqueeBanner() {
  return (
    <motion.div
      animate={{
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
      }}
      className="marquee-text"
    >
      <motion.span
        style={{ display: "inline-block" }}
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          x: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        Ho Ho Ho! Get Ready for the Most Spirited Christmas Party Ever!!! 🍷🎁
      </motion.span>
    </motion.div>
  );
}
