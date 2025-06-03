// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-sky-100 text-center text-pink-700 py-4 mt-8">
      <p>
        Con mucho amor para Carla 💖 | © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
