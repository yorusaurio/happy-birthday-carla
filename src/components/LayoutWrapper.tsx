// src/components/LayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import type { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const showNavbarFooter = pathname !== '/login';

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {showNavbarFooter && <Footer />}
    </>
  );
}
