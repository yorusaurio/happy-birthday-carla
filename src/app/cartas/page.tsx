'use client';

const cartas = [
  {
    titulo: 'Carta 1',
    contenido: 'Mi amor, desde que llegaste a mi vida todo es más bonito. Cada instante contigo se ha convertido en un recuerdo que guardo en lo más profundo de mi corazón. Eres mi felicidad diaria, la razón por la que sonrío cada mañana. Gracias por enseñarme que el amor verdadero existe y que a tu lado todo es posible. Te adoro infinitamente 💖.'
  },
  {
    titulo: 'Carta 2',
    contenido: 'Cada día a tu lado es un regalo que el universo me ha dado. Tu risa, tu voz, tus abrazos son el refugio perfecto para mi alma. No hay palabras que puedan describir lo que siento por ti, porque te amo con todo mi corazón y más allá del infinito. Eres mi mejor aventura, mi hogar, y cada día deseo seguir construyendo este hermoso camino contigo ✨.'
  },
  {
    titulo: 'Carta 3',
    contenido: 'Gracias por ser tú, por tu sonrisa que ilumina mis días, por tu ternura que me envuelve en cada abrazo, y por todos los momentos hermosos que compartimos. A tu lado he aprendido lo que es amar sin condiciones, lo que es soñar despierto, lo que es sentirse completo. Eres mi persona favorita, mi confidente, mi amor eterno 💓.'
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

      {/* Grid de cartas responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {cartas.map((carta, index) => (
          <div
            key={index}
            className="bg-white/80 border-4 border-pink-200 rounded-xl shadow-lg p-6 flex flex-col justify-between text-pink-700 hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-bold text-pink-800 mb-4">{carta.titulo}</h2>
            <p className="text-base leading-relaxed">{carta.contenido}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
