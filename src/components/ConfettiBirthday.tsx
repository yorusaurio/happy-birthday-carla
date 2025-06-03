'use client';

import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

export default function ConfettiBirthday() {
  const [width, height] = useWindowSize();

  const isBirthday = new Date().getDate() === 3 && new Date().getMonth() === 5;

  if (!isBirthday) return null;

  console.log("🎊 Confetti ACTIVADO (hoy es el cumple)");

  return <Confetti width={width} height={height} numberOfPieces={300} recycle={true} />;
}
