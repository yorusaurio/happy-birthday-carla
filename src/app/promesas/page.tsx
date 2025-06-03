'use client';

export default function PromesasPage() {
  const promesas = [
    "Prometo cuidarte siempre 💖",
    "Prometo hacerte reír cada día 😂",
    "Prometo apoyarte en todos tus sueños ✨",
    "Prometo caminar a tu lado en cada etapa de la vida 🚶‍♂️🚶‍♀️",
    "Prometo decirte cuánto te amo cada día ❤️"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-4 sm:p-8 gap-6 md:gap-8">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 md:mb-6">
        🌟 Promesas para ti 💖
      </h1>
      <p className="text-lg md:text-xl text-pink-700 mb-4 max-w-xl">
        Palabras que quiero dedicarte desde el corazón ✨.
      </p>

      {/* Grid de promesas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {promesas.map((texto, index) => (
          <div
            key={index}
            className="group [perspective:1000px] cursor-pointer"
          >
            <div className="relative h-48 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Cara frontal */}
              <div className="absolute inset-0 bg-white/80 border-4 border-pink-200 rounded-xl shadow-lg flex items-center justify-center text-pink-800 text-xl font-bold">
                Promesa {index + 1}
              </div>
              {/* Cara trasera */}
              <div className="absolute inset-0 bg-white/90 border-4 border-pink-300 rounded-xl shadow-lg p-4 text-pink-700 text-base leading-relaxed [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                {texto}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
