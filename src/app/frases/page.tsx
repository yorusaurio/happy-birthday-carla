'use client';

import { useEffect, useState } from "react";

const frases = [
  "Te mato si me dices la escala de 1-10 🎶",
  "Que gei que eres 💓",
  "No me presiones ❤️",
  "No me caes 🌟",
  "El que llora es gei 🌟",
  "Te amo 3 millones 💓",
];

export default function FrasesPage() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * frases.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(() => Math.floor(Math.random() * frases.length));
    }, 4000);
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
