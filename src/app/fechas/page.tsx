'use client';

export default function FechasPage() {
  const fechas = [
    { fecha: '21/12/2023', evento: 'Nos conocimos ❤️' },
    { fecha: '20/01/2023', evento: 'Primer beso 💋' },
    { fecha: '17/12/2024', evento: 'Cuando comenzamos 💖' },
    { fecha: '03/06', evento: 'Cumpleaños de Carla 🎂' }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-4 sm:p-8 gap-6 md:gap-8">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 md:mb-6">
        🗓️ Fechas importantes 💖
      </h1>
      <p className="text-lg md:text-xl text-pink-700 mb-4 max-w-xl">
        Nuestros momentos más especiales para recordar siempre ✨.
      </p>

      <div className="flex flex-col gap-4 max-w-xl mx-auto w-full">
        {fechas.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 border-4 border-pink-200 rounded-xl shadow-lg p-4 text-pink-700 text-left"
          >
            <p className="font-bold text-pink-800 text-xl">{item.fecha}</p>
            <p className="mt-1">{item.evento}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
