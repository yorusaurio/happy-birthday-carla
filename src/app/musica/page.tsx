'use client';

import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";

export default function MusicaPage() {
  const [play, setPlay] = useState(false);

  const frases = [
    "Eres la melodía que alegra mis días 💖",
    "Cada nota me recuerda a ti 🎶",
    "Esta canción es nuestro pequeño secreto 💓",
    "Tu sonrisa es mi canción favorita ✨"
  ];

  const frase = frases[Math.floor(Math.random() * frases.length)];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-4 sm:p-8 gap-6 md:gap-8 overflow-hidden">

      {/* Efecto de luces suaves */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-200 via-purple-200 to-sky-200 opacity-30 blur-3xl z-0"></div>

      <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 md:mb-6 z-10">
        🎵 Música especial para ti 💖
      </h1>

      <p className="text-lg md:text-xl text-pink-700 mb-4 max-w-xl z-10">
        Disfruta de esta canción que me hace pensar en ti 💓.
      </p>

      {/* Embed de YouTube */}
      <div className="w-full max-w-xl aspect-video rounded-xl shadow-lg overflow-hidden border-4 border-pink-200 z-10">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/MldGX_mbS-o?autoplay=${play ? 1 : 0}&modestbranding=1&rel=0`}
          title="Milo J - M.A.I"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Botón de play sorpresa */}
      <button
        onClick={() => setPlay(true)}
        className="mt-4 bg-pink-300 text-pink-900 px-6 py-2 rounded-full hover:bg-pink-400 transition-all z-10"
      >
        ▶️ Reproducir canción especial
      </button>

      {/* Letra animada */}
      <p className="text-pink-700 text-base md:text-lg leading-relaxed max-w-2xl mt-6 animate-fade-in">
  <em>
    "Temo a caer y que no estés conmigo" <br />
    "Te ofrezco amor real de un corazón sincero" <br />
    "Y quemar la llave que abrió el laberinto" 🎶
  </em>
</p>



      {/* Frase romántica aleatoria */}
      <p className="text-pink-600 italic mt-4 animate-fade-in z-10">
        {frase}
      </p>

      {/* Corazones flotantes */}
      <FloatingHearts />
    </div>
  );
}
