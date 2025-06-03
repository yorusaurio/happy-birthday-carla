'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-100 via-purple-100 to-sky-100 py-3 px-6 flex flex-wrap justify-between items-center sticky top-0 z-50 shadow-md rounded-b-xl">
      <h1 className="text-xl font-semibold text-pink-700 tracking-wide mb-2 sm:mb-0">
        💖 Carla&apos;s Portal
      </h1>
      <div className="flex flex-wrap gap-2 sm:gap-3 text-pink-700 font-medium items-center justify-center">
        <Link
          href="/"
          className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all text-sm sm:text-base"
        >
          Home
        </Link>
        <Link
          href="/galeria"
          className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all text-sm sm:text-base"
        >
          Galería
        </Link>
        <Link
          href="/cartas"
          className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all text-sm sm:text-base"
        >
          Cartas
        </Link>
        <Link
          href="/musica"
          className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all text-sm sm:text-base"
        >
          Música
        </Link>

        {/* Botón de MÁS */}
        <div className="relative">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all text-sm sm:text-base"
          >
            Más ▾
          </button>

          {showMore && (
            <div className="absolute right-0 mt-2 bg-white border border-pink-200 rounded-lg shadow-lg flex flex-col text-left z-50 w-40">
              <Link
                href="/promesas"
                className="px-4 py-2 hover:bg-pink-100 text-pink-700"
                onClick={() => setShowMore(false)}
              >
                🌟 Promesas
              </Link>
              <Link
                href="/fechas"
                className="px-4 py-2 hover:bg-pink-100 text-pink-700"
                onClick={() => setShowMore(false)}
              >
                🗓️ Fechas
              </Link>
              <Link
                href="/frases"
                className="px-4 py-2 hover:bg-pink-100 text-pink-700"
                onClick={() => setShowMore(false)}
              >
                🌸 Frases
              </Link>
              <Link
                href="/historia"
                className="px-4 py-2 hover:bg-pink-100 text-pink-700"
                onClick={() => setShowMore(false)}
              >
                💍 Historia
              </Link>
              <Link
                href="/sorpresas"
                className="px-4 py-2 hover:bg-pink-100 text-pink-700"
                onClick={() => setShowMore(false)}
              >
                🎁 Sorpresas
              </Link>
            </div>
          )}
        </div>

        {/* Botón cerrar sesión */}
        <button
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = '/login';
          }}
          className="px-4 py-2 bg-pink-200 text-pink-800 rounded-full hover:bg-pink-300 transition-all text-sm sm:text-base"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
