'use client';

export default function MainButtons() {
  return (
    <div className="flex flex-col gap-4 z-10 w-full max-w-md mx-auto">
      <a
        href="/galeria"
        className="bg-white/80 text-pink-700 px-6 py-3 rounded-xl shadow hover:bg-white transition text-center"
      >
        📸 Ver galería de fotos
      </a>
      <a
        href="/cartas"
        className="bg-white/80 text-pink-700 px-6 py-3 rounded-xl shadow hover:bg-white transition text-center"
      >
        💌 Leer cartas especiales
      </a>
      <a
        href="/musica"
        className="bg-white/80 text-pink-700 px-6 py-3 rounded-xl shadow hover:bg-white transition text-center"
      >
        🎵 Escuchar música favorita
      </a>
    </div>
  );
}
