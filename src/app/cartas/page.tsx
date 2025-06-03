'use client';

import React from 'react';

const cartas = [
  {
    titulo: 'Carta 1',
    contenido: 'Mi amor, desde que llegaste a mi vida todo es más bonito. Eres mi felicidad diaria 💖.'
  },
  {
    titulo: 'Carta 2',
    contenido: 'Cada día a tu lado es un regalo. Te amo con todo mi corazón y más allá del infinito ✨.'
  },
  {
    titulo: 'Carta 3',
    contenido: 'Gracias por ser tú, por tu sonrisa, tu ternura y por todos los momentos hermosos que compartimos 💓.'
  }
];

export default function CartasPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-4 sm:p-8 gap-6 md:gap-8">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 md:mb-6">
        💌 Cartas para ti 💖
      </h1>
      <p className="text-lg md:text-xl text-pink-700 mb-4 max-w-xl">
        Palabras que quiero dedicarte con todo mi amor ✨.
      </p>

      {/* Grid de cartas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {cartas.map((carta, index) => (
          <div
            key={index}
            className="group [perspective:1000px] cursor-pointer"
          >
            <div className="relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Cara frontal */}
              <div className="absolute inset-0 bg-white/80 border-4 border-pink-200 rounded-xl shadow-lg flex items-center justify-center text-pink-800 text-2xl font-bold">
                {carta.titulo}
              </div>

              {/* Cara trasera */}
              <div className="absolute inset-0 bg-white/90 border-4 border-pink-300 rounded-xl shadow-lg p-4 text-pink-700 text-base leading-relaxed [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                {carta.contenido}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
