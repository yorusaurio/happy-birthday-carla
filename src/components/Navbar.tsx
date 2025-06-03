// src/components/Navbar.tsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pink-100 via-purple-100 to-sky-100 py-3 px-6 flex justify-between items-center sticky top-0 z-50 shadow-md rounded-b-xl">
      <h1 className="text-xl font-semibold text-pink-700 tracking-wide">
        💖 Carla&apos;s Portal
      </h1>
      <div className="flex gap-3 text-pink-700 font-medium items-center">
        <Link
          href="/"
          className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all"
        >
          Home
        </Link>
        <Link
          href="/galeria"
          className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all"
        >
          Galería
        </Link>
        <Link
          href="/cartas"
          className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all"
        >
          Cartas
        </Link>
        <Link
          href="/musica"
          className="px-4 py-2 bg-white/70 rounded-full hover:bg-white hover:text-pink-900 transition-all"
        >
          Música
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = '/login';
          }}
          className="px-4 py-2 bg-pink-200 text-pink-800 rounded-full hover:bg-pink-300 transition-all"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
