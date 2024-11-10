import { motion } from "framer-motion";

export default function PartyRules() {
  const rules = [
    "Bring one wrapped alcoholic gift (value $20-30)",
    "Include any mixers/garnishes/snacks that go with your drink!",
    "When you arrive, put your gift under the tree",
    "We'll draw numbers to determine selection order",
    "You can steal a gift up to 2 times!",
    "Whatever you end up with is your drink for the night! 🍻",
  ];

  return (
    <div className="rules-card">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
        🎁 Secret Santa Booze Exchange Rules! 🍺
      </h2>
      <ul className="space-y-2">
        {rules.map((rule, index) => (
          <li key={index} className="flex gap-2">
            <span>{index + 1}.</span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
      <motion.div
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="mt-4 text-center"
      >
        WARNING: Prepare for holiday shenanigans! 🎉
      </motion.div>
    </div>
  );
}
