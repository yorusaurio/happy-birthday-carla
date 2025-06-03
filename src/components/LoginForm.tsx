'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'Cocker14' && password === 'Carla032420') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } else {
      setError('Usuario o contraseña incorrectos 🥺');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-800">
          🔐 Ingreso secreto de Carla
        </h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-pink-900 placeholder-pink-400"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-pink-900 placeholder-pink-400"
        />

        <button
          type="submit"
          className="w-full bg-pink-300 text-pink-900 font-semibold p-3 rounded-lg hover:bg-pink-400 transition-colors"
        >
          Entrar 💖
        </button>
      </form>
    </div>
  );
}
