import React from 'react';

const SpaceSection = () => {
  return (
    <section className="w-100 w-screen h-screen flex items-center justify-center bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <svg
          className="w-full h-[80vh]"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fondo espacial */}
          <rect width="100%" height="100%" fill="#1a1b2b" />

          {/* Path cuadrado de referencia */}
          <path
            d="M 100 100 H 1100 V 700 H 100 Z"
            stroke="#60a5fa"
            strokeWidth="4"
            fill="none"
            strokeDasharray="20,10"
            opacity="0.3"
          />

          {/* Estrellas pequeñas */}
          {Array.from({ length: 100 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={Math.random() * 2}
              fill="#ffffff"
              style={{
                animation: `twinkle ${Math.random() * 2 + 1}s infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Nebulosas */}
          <circle cx="300" cy="400" r="200" fill="url(#gradientBlue)" opacity="0.3" />
          <circle cx="900" cy="300" r="250" fill="url(#gradientPurple)" opacity="0.2" />

          {/* Gradientes */}
          <defs>
            <radialGradient id="gradientBlue">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#1a1b2b" />
            </radialGradient>
            <radialGradient id="gradientPurple">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#1a1b2b" />
            </radialGradient>
          </defs>

          {/* Líneas de conexión */}
          <path
            d="M 100 100 Q 300 300 500 200 T 900 300"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M 200 600 Q 400 400 600 500 T 1000 400"
            stroke="#818cf8"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>



      {/* Contenido superpuesto */}
      <div className="relative z-10 text-center">
        <div className='icon-container'>
          <svg className="tec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" width="64" height="64">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white">TS</text>
          </svg>

          <svg className="tec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" width="64" height="64">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white">JS</text>
          </svg>

          <svg className="tec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="40 40 54 54" width="64" height="64" preserveAspectRatio="xMidYMid meet">
            <ellipse cx="64" cy="64" rx="20" ry="8" transform="rotate(30 64 64)" fill="none" stroke="white" stroke-width="2" />
            <ellipse cx="64" cy="64" rx="20" ry="8" transform="rotate(90 64 64)" fill="none" stroke="white" stroke-width="2" />
            <ellipse cx="64" cy="64" rx="20" ry="8" transform="rotate(150 64 64)" fill="none" stroke="white" stroke-width="2" />
            <circle cx="64" cy="64" r="4" fill="white" />
            <circle cx="104" cy="64" r="2" fill="white" />
            <circle cx="64" cy="104" r="2" fill="white" />
            <circle cx="24" cy="64" r="2" fill="white" />
            <circle cx="64" cy="24" r="2" fill="white" />
          </svg>

          <svg className="tec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64">
            <defs>
              <linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="white" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="white" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
            <g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)">
              <path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)" />
              <path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)" />
              <path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff" />
            </g>
          </svg>

          <svg className="tec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
            <path fill="#fff" d="M2.3 43.843q-.958 0-1.63-.639Q0 42.55 0 41.65q0-.918.67-1.572.672-.655 1.63-.655.975 0 1.645.655.687.654.687 1.572 0 .9-.687 1.555-.671.639-1.645.639m25.54-.361h-4.154l-10.94-17.26a7.7 7.7 0 0 1-.687-1.36h-.096q.129.754.128 3.227v15.393H8.418V20h4.424l10.573 16.85q.671 1.05.862 1.442h.064q-.16-.934-.16-3.16V20h3.658zm17.888 0H32.87V20h12.346v3.308h-8.545v6.648h7.874v3.292h-7.874v6.943h9.056zM64 23.308h-6.58v20.175h-3.802V23.308h-6.564V20H64z" />
          </svg>

          <svg className="tec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64" height="64">
            <polygon points="213.57 256 298.42 256 255.99 166.64 213.57 256" fill="white" />
            <path d="M256,32,32,112,78.12,384,256,480l177.75-96L480,112Zm88,320-26.59-56H194.58L168,352H128L256,72,384,352Z" fill="white" />
          </svg>

        </div>

        <h2 className="text-5xl font-bold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          List of Technologies
          </span>
        </h2>
      </div>
    </section>
  );
};

export default SpaceSection;