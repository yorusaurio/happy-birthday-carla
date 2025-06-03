// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import LayoutWrapper from '@/components/LayoutWrapper';
  
export const metadata = {
  title: 'Portal de cumpleaños de Carla 🎂',
  description: 'Un portal secreto y especial 💖',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-50 text-gray-800">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
