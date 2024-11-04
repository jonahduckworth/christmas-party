import { motion } from "framer-motion";

export default function RsvpButton() {
  return (
    <motion.div
      animate={{ y: [-20, 0] }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <button
        className="rsvp-button"
        onClick={() => alert("AWESOME! Don't forget your boozy gift! 🎁🍸")}
      >
        CLICK HERE TO RSVP!!!
      </button>
    </motion.div>
  );
}
