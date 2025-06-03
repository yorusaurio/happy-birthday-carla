'use client';

import { useEffect, useState } from "react";

const frases = [
  "Te mato si me dices la escala de 1-10 🎶",
  "Que gei que eres 💓",
  "No me presiones ❤️",
  "No me caes 🌟"
];

export default function FrasesPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 4000); // cambia cada 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-8 gap-6">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-800">
        🌸 Frases favoritas 💖
      </h1>
      <p className="text-xl text-pink-700 animate-fade-in">
        {`“${frases[index]}”`}
      </p>
    </div>
  );
}
