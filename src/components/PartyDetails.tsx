import { motion, useAnimation, Variants } from "framer-motion";
import { useCallback } from "react";

export default function PartyDetails() {
  const controls = useAnimation();

  const handleClick = useCallback(() => {
    controls.start("clicked");
  }, [controls]);

  const containerVariants: Variants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    hovered: {
      rotate: [0, 7, -7, 0],
      transition: {
        duration: 0.2,
        repeat: 2,
        ease: "easeInOut",
      },
    },
    clicked: {
      rotate: [0, 367, -45, 0],
      scale: [1, 0.5, 1],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="party-card"
      variants={containerVariants}
      initial="initial"
      animate={controls}
      whileHover="hovered"
      onClick={handleClick}
    >
      <h2 className="text-xl font-bold mb-4">
        🎅 Join us for Holiday Cheer! 🎅
      </h2>
      <div className="space-y-2">
        <p>Date: December 14th</p>
        <p>Time: 7:00 PM</p>
        <p>Location: Sam & Jonah&apos;s House</p>
      </div>
    </motion.div>
  );
}
