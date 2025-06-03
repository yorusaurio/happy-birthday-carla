'use client';

export default function HistoriaPage() {
  const historia = [
    { titulo: 'Cómo nos conocimos', texto: 'Nos conocimos en aquel día tan especial, donde yo volvía de comprar mis zapatillas y tú decidiste enviarme una foto de mi papa, yo llegué al parque y comenzamos a conversar tan fluido hasta el día de hoy. No me arrepiento de no haber llevado dinero ese día para comprarme mis zapatiilas.... 💫' },
    { titulo: 'Nuestra primera cita', texto: 'No recuerdo nuestras primeras citas porque hemos ido a un montón de lugares a comer, pero siempre para mí significará muchísimo Clamore. 🍽️' },
    { titulo: 'Primer te amo', texto: 'Cuando te dije el primer te amo, estaba borracho, fin.' },
    { titulo: 'Cuando comenzamos', texto: 'Gracias por seguir aquí, y te prometo que estos son los primeros de los muchos cumpleaños que vamos a celebrar... 🎂🎈' }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-4 sm:p-8 gap-6 md:gap-8">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4 md:mb-6">
        💍 Nuestra historia 💖
      </h1>
      <p className="text-lg md:text-xl text-pink-700 mb-4 max-w-xl">
        Un recorrido por nuestro camino juntos ✨.
      </p>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
        {historia.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 border-4 border-pink-200 rounded-xl shadow-lg p-6 text-pink-700 text-left"
          >
            <h2 className="text-2xl font-bold text-pink-800 mb-2">{item.titulo}</h2>
            <p>{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
