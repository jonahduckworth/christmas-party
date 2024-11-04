"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: "1",
      name: "🎅 Party Elf",
      message: "Something spicy and festive coming your way! 🌶️🍸",
      timestamp: new Date(),
    },
    {
      id: "2",
      name: "🦌 Dasher",
      message: "I heard the North Pole has some excellent spirits! ❄️🥃",
      timestamp: new Date(),
    },
  ]);

  const [formData, setFormData] = useState({ name: "", message: "" });

  const addEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert("Please fill in both name and message! 🎅");
      return;
    }

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: formData.name,
      message: formData.message,
      timestamp: new Date(),
    };

    setEntries([newEntry, ...entries]);
    setFormData({ name: "", message: "" });
  };

  return (
    <div className="bg-white/90 border-4 border-[#ffd700] p-5 my-5 max-w-2xl mx-auto text-[#006400]">
      <h2 className="text-2xl font-bold mb-4">✨ Festive Guestbook ✨</h2>
      <p className="mb-4">
        Leave a message about what kind of boozy gift you might bring! (No
        spoilers!)
      </p>

      <form onSubmit={addEntry} className="space-y-4 mb-6">
        <input
          type="text"
          maxLength={20}
          placeholder="Your Party Name"
          className="w-full p-2 border-2 border-red-600 rounded font-comic"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <textarea
          maxLength={100}
          placeholder="Your festive message!"
          className="w-full p-2 border-2 border-red-600 rounded font-comic h-24"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-[#ffd700] border-2 border-[#ffd700] p-2 rounded hover:bg-red-700 transition-colors"
        >
          🎄 Sign Guestbook! 🎄
        </button>
      </form>

      <AnimatePresence>
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/80 border-2 border-dashed border-red-600 m-2 p-4 text-left rounded"
          >
            <strong>{entry.name}</strong>
            <p>{entry.message}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
