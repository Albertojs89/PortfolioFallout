import '../styles/hero.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const text = 'Frontend Developer & Creative Design';
    const element = document.getElementById('typewriter-text');
    let index = 0;

    const interval = setInterval(() => {
      if (element) {
        element.textContent = text.slice(0, index);
        index++;
        if (index > text.length) clearInterval(interval);
      }
    }, 60);
  }, []);

  return (
    <div className="retro-container old-crt-monitor flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-between w-full max-w-6xl px-6">
        
        {/* Bloque de texto */}
        <div className="text-left max-w-md">
          <h1 id="typewriter-text" className="text-5xl font-bold mb-4" />
          
          <p className="py-4 reveal-slow">
            ¡Hola! Mi nombre es Alberto y soy un apasionado del Frontend y la experiencia de usuario.
          </p>

          <Link
            to="/start"
            className="inline-block px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Bloque reservado para el muñeco */}
        <div className="w-72 h-72 flex items-center justify-center">
          {/* Aquí más adelante pondremos tu imagen o GIF */}
          {/* <img src="/ruta/a/tu/imagen.gif" alt="Pitboy" className="w-full h-full object-contain" /> */}
        </div>

      </div>
    </div>
  );
}

export default Hero;
