'use client';

export default function FloatingHearts() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => {
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
    </>
  );
}
