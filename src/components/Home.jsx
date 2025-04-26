import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { icon: '🛠', label: 'Skills' },
    { icon: '📁', label: 'Projects' },
    { icon: '👤', label: 'About' },
    { icon: '📞', label: 'Contact' }
  ];

  return (
    <div className="flex min-h-screen p-6 retro-container old-crt-monitor text-[var(--primary-color)] relative">
      
      {/* Menú lateral */}
      <div className="w-1/4 pr-6 reveal-slow">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        {sections.map((section) => (
          <button
            key={section.label}
            onClick={() => setActiveSection(section.label)}
            className={`w-full text-left px-4 py-2 mb-2 border-2 rounded transition-colors duration-300 button-hover
              ${
                activeSection === section.label
                  ? 'bg-[var(--primary-color)] text-[var(--background-color)]'
                  : 'bg-transparent text-[var(--primary-color)] border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]'
              }`}
          >
            <span className="retro-icon mr-2">{section.icon}</span> {section.label}
          </button>

        ))}
      </div>

      {/* Contenido derecho */}
      <div className="w-3/4 border-l border-[var(--primary-color)] pl-6">
        {activeSection === 'Skills' && <p>Aquí irán tus habilidades.</p>}
        {activeSection === 'Projects' && <p>Aquí mostrarás tus proyectos.</p>}
        {activeSection === 'About' && <p>Sobre ti, biografía y enfoque.</p>}
        {activeSection === 'Contact' && <p>Formulario o redes de contacto.</p>}
      </div>

      {/* Botón de volver */}
      <div className="absolute bottom-6 left-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition-colors duration-300"
        >
          ← Volver al inicio
        </Link>
      </div>

    </div>
  );
}

export default Home;
