'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Countdown from "@/components/Countdown";
import ConfettiBirthday from "@/components/ConfettiBirthday";
import FloatingHearts from "@/components/FloatingHearts";
import MainButtons from "@/components/MainButtons";

export default function Home() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

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

  if (checkingAuth) {
    return null;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-center p-8 overflow-hidden">

      <ConfettiBirthday />

      <h1 className="text-4xl font-bold text-pink-800 mb-6 animate-fade-in">
        🎉 ¡Feliz cumpleaños, Carla! 🎉
      </h1>

      <p className="text-xl text-pink-700 mb-4 max-w-xl">
        Bienvenida a tu portal secreto. Aquí encontrarás sorpresas preparadas con mucho amor 💖.
      </p>

      <Countdown />

      <MainButtons />

      <FloatingHearts />
    </div>
  );
}
