'use client';

import { useState } from "react";

const images = Array.from({ length: 16 }, (_, i) => `/galeria/${i + 1}.jpg`);

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-4 sm:p-8 gap-6 md:gap-8">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 md:mb-6">
        📸 Galería de recuerdos 💖
      </h1>
      <p className="text-lg md:text-xl text-pink-700 mb-4 max-w-xl">
        Un pequeño recorrido por nuestros momentos más especiales ✨.
      </p>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl w-full">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(src)}
            className="overflow-hidden rounded-xl shadow-lg border-4 border-pink-200 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={src}
              alt={`Recuerdo ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal de imagen en grande */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Recuerdo grande"
              className="w-full h-auto rounded-xl shadow-lg border-4 border-pink-300"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-pink-300 text-pink-900 px-4 py-2 rounded-full hover:bg-pink-400 transition-all"
            >
              ✖️ Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
