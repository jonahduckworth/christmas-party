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
      className="party-card rounded-lg shadow-lg text-center"
      variants={containerVariants}
      initial="initial"
      animate={controls}
      whileHover="hovered"
      onClick={handleClick}
    >
      <h2 className="text-2xl font-bold mb-8">
        🎅 Join us for Holiday Cheer! 🎅
      </h2>

      <div className="space-y-8">
        <div className="text-lg">
          <p>
            <strong>Date:</strong> December 14th
          </p>
          <p>
            <strong>Time:</strong> 7:00 PM
          </p>
          <p>
            <strong>Location:</strong> Sam & Jonah&apos;s House
          </p>
        </div>

        <div>
          <strong className="text-lg">What to bring:</strong>
          <ul className="mt-2 space-y-2">
            <li>• Festive Holiday Attire</li>
            <li>• Secret Santa gift</li>
            <li>• Sharable food item</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
