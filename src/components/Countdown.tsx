'use client';

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 5, 3, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("¡Hoy es tu cumpleaños! 🎉🎂");
        console.log("🎉 Contador: ES HOY 🎂");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const text = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      setTimeLeft(text);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-semibold text-pink-800 bg-white/80 px-6 py-3 rounded-xl shadow mb-10 animate-pulse">
      ⏳ Cuenta regresiva: {timeLeft}
    </div>
  );
}
