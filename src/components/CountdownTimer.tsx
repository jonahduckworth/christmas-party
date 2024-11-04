"use client";

import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const partyDate = new Date("December 14, 2024 19:00:00 MST");
      const now = new Date();

      setTimeLeft({
        days: differenceInDays(partyDate, now),
        hours: differenceInHours(partyDate, now) % 24,
        minutes: differenceInMinutes(partyDate, now) % 60,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-2xl my-7 animate-pulse">
      🎄 Only {timeLeft.days} days, {timeLeft.hours} hours, and{" "}
      {timeLeft.minutes} minutes until the boozy festivities! 🎄
    </div>
  );
}
