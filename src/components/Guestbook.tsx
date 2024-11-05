"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GuestbookEntry {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch("/api/posts");
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      }
    } catch (error) {
      console.error("Failed to fetch entries:", error);
    }
  };

  const addEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert("Please fill in both name and message! 🎅");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: formData.name,
          content: formData.message,
        }),
      });

      if (response.ok) {
        const newEntry = await response.json();
        setEntries([newEntry, ...entries]);
        setFormData({ name: "", message: "" });
      } else {
        const error = await response.json();
        alert(error.error || "Failed to add message");
      }
    } catch (error) {
      console.error("Failed to add entry:", error);
      alert("Failed to add your message. Please try again!");
    } finally {
      setIsLoading(false);
    }
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
          disabled={isLoading}
        />
        <textarea
          maxLength={100}
          placeholder="Your festive message!"
          className="w-full p-2 border-2 border-red-600 rounded font-comic h-24"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          disabled={isLoading}
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-[#ffd700] border-2 border-[#ffd700] p-2 rounded hover:bg-red-700 transition-colors disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? "Posting..." : "🎄 Sign Guestbook! 🎄"}
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
            <strong>{entry.author}</strong>
            <p>{entry.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(entry.createdAt).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
