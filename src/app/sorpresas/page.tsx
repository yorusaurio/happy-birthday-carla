'use client';

const sorpresas = [
  { titulo: 'Sorpresa 1', contenido: 'Un picnic que te estoy preparando 🧺' },
  { titulo: 'Sorpresa 2', contenido: 'Un viaje que te quiero regalar ✈️' },
  { titulo: 'Sorpresa 3', contenido: 'Un día de spa contigo 💆‍♀️' },
  { titulo: 'Sorpresa 4', contenido: 'Un álbum de fotos con nuestros mejores recuerdos 📸' },
  { titulo: 'Sorpresa 5', contenido: 'Una playlist personalizada con nuestras canciones favoritas 🎵' },
  { titulo: 'Sorpresa 6', contenido: 'Una carta escrita a mano que te quiero entregar 💌' },
  { titulo: 'Sorpresa 7', contenido: 'Una cena sorpresa en nuestro lugar especial 🍽️' },
  { titulo: 'Sorpresa 8', contenido: 'Un ramo de flores con tus favoritas 🌷' },
  { titulo: 'Sorpresa 9', contenido: 'Una tarde de películas y abrazos contigo 🍿❤️' },
  { titulo: 'Sorpresa 10', contenido: 'Un día completo sin pantallas, solo para estar juntos 👫' },
  { titulo: 'Sorpresa 11', contenido: 'Un video sorpresa hecho por mí 🎥' },
  { titulo: 'Sorpresa 12', contenido: 'Un frasco con "365 razones por las que te amo" 🫙❤️' },
  { titulo: 'Sorpresa 13', contenido: 'Una carta escondida en tu bolso para que encuentres por sorpresa 🎒' },
  { titulo: 'Sorpresa 14', contenido: 'Una tarde cocinando juntos tu postre favorito 🍰' },
  { titulo: 'Sorpresa 15', contenido: 'Un día de paseo en bicicleta por la ciudad 🚲' },
  { titulo: 'Sorpresa 16', contenido: 'Un juego de pistas que te lleva a un regalo escondido 🔍🎁' },
  { titulo: 'Sorpresa 17', contenido: 'Una caja de recuerdos con pequeños objetos que significan mucho para nosotros 📦' },
  { titulo: 'Sorpresa 18', contenido: 'Un collage con todos nuestros mensajes más bonitos 💬' },
  { titulo: 'Sorpresa 19', contenido: 'Una cita sorpresa de noche bajo las estrellas ✨' },
  { titulo: 'Sorpresa 20', contenido: 'Un desayuno sorpresa en la cama 🥐☕' },
  { titulo: 'Sorpresa 21', contenido: 'Un poema que te estoy escribiendo ✍️' },
  { titulo: 'Sorpresa 22', contenido: 'Una llamada sorpresa cantándote nuestra canción 🎤' },
  { titulo: 'Sorpresa 23', contenido: 'Un día en un parque de diversiones 🎡' },
  { titulo: 'Sorpresa 24', contenido: 'Una cápsula del tiempo que abriremos juntos en el futuro 🕰️' },
  { titulo: 'Sorpresa 25', contenido: 'Un masaje relajante preparado por mí 💆‍♂️' },
  { titulo: 'Sorpresa 26', contenido: 'Una lista de lugares que quiero visitar contigo 🗺️' },
  { titulo: 'Sorpresa 27', contenido: 'Un día en un mirador viendo el atardecer 🌇' },
  { titulo: 'Sorpresa 28', contenido: 'Un diario que estoy escribiendo con pensamientos para ti 📖' },
  { titulo: 'Sorpresa 29', contenido: 'Una caja con sobres de "abre cuando..." para momentos especiales ✉️' },
  { titulo: 'Sorpresa 30', contenido: 'Un baile romántico improvisado en casa 💃🕺' }
];

export default function SorpresasPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-8 gap-6">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-2">
        🎁 Sorpresas futuras 💖
      </h1>
      <p className="text-lg md:text-xl text-pink-700 mb-6 max-w-2xl">
        Un pequeño adelanto de las sorpresas que estoy preparando para ti ✨.
      </p>

      {/* Grid profesional */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {sorpresas.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 border-4 border-pink-200 rounded-xl shadow-lg p-6 text-pink-700 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-bold text-pink-800 mb-2">{item.titulo}</h2>
            <p className="text-base leading-relaxed">{item.contenido}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
