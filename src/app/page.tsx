'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

export default function Home() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  const [width, height] = useWindowSize();

  const isBirthday = new Date().getDate() === 3 && new Date().getMonth() === 5; // 3 de junio

  // 🔐 Validación de sesión
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      console.log("🔒 Usuario no autenticado, redirigiendo a /login");
      router.push("/login");
    } else {
      console.log("✅ Usuario autenticado, mostrando Home");
      setCheckingAuth(false);
    }
  }, [router]);

  // 🎂 Contador regresivo
  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 5, 3, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("¡Hoy es tu cumpleaños! 🎉🎂");
        console.log("🎉 Contador: ES HOY 🎂");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const text = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      setTimeLeft(text);
      console.log("⏳ Cuenta regresiva: ", text);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (checkingAuth) {
    return null;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-8 overflow-hidden">

      {/* 🎉 Confetti SOLO el día de cumpleaños */}
      {isBirthday && (
        <>
          <Confetti width={width} height={height} numberOfPieces={300} recycle={true} />
          {console.log("🎊 Confetti ACTIVADO (hoy es el cumple)")}
        </>
      )}

      <h1 className="text-4xl font-bold text-pink-800 mb-6 animate-fade-in">
        🎉 ¡Feliz cumpleaños, Carla! 🎉
      </h1>

      <p className="text-xl text-pink-700 mb-4 max-w-xl">
        Bienvenida a tu portal secreto. Aquí encontrarás sorpresas preparadas con mucho amor 💖.
      </p>

      {/* ⏳ Cuenta regresiva con animación 💓 */}
      <div className="text-2xl font-semibold text-pink-800 bg-white/80 px-6 py-3 rounded-xl shadow mb-10 animate-pulse">
        ⏳ Cuenta regresiva: {timeLeft}
      </div>

      {/* Botones */}
      <div className="flex flex-col gap-4 z-10">
        <a
          href="/galeria"
          className="bg-white/80 text-pink-700 px-6 py-3 rounded-xl shadow hover:bg-white transition"
        >
          📸 Ver galería de fotos
        </a>
        <a
          href="/cartas"
          className="bg-white/80 text-pink-700 px-6 py-3 rounded-xl shadow hover:bg-white transition"
        >
          💌 Leer cartas especiales
        </a>
        <a
          href="/musica"
          className="bg-white/80 text-pink-700 px-6 py-3 rounded-xl shadow hover:bg-white transition"
        >
          🎵 Escuchar música favorita
        </a>
      </div>

      {/* ❤️ Corazones flotantes */}
      {Array.from({ length: 12 }).map((_, i) => {
        console.log("❤️ Renderizando corazón ", i);
        return (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        );
      })}

    </div>
  );
}
