"use client";

import { motion } from "framer-motion";

export default function PartyTheme() {
  const themeDetails = [
    "Rock your most festive Christmas sweater or holiday outfit! 🎄",
    "Santa hats, elf ears, and reindeer antlers are encouraged 🎅",
    "Crowd favorite wins a special holiday surprise! 🎁",
  ];

  return (
    <div className="party-theme">
      <h2 className="text-lg md:text-2xl font-bold mb-4 text-center">
        🎭 Dress Code 🎭
      </h2>

      <div className="space-y-3">
        {themeDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 bg-white/80 py-2 px-3 rounded-lg border-2 border-dashed border-red-600"
          >
            <span className="text-xl">{"🌟"}</span>
            <span>{detail}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-6 text-center text-red-600 font-bold text-lg"
      >
        ⭐️ Get ready to sleigh the competition! ⭐️
      </motion.div>
    </div>
  );
}
