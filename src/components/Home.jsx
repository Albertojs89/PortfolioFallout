import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaFigma, FaGithub, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';



function Home() {
  const [activeSection, setActiveSection] = useState(null);

  //Proyectos---------------------------------------------------
  const projects = [
  {
    id: 1,
    title: 'Xavi Valverde || Make up Artist & Stylist',
    description: 'Xavi Valverde es una artista de maquillaje y estilista con un enfoque en la belleza y la moda. Ha trabajado en una variedad de proyectos, desde editoriales hasta pasarelas.',
    image: '/xaviValverde.jpg',
    url: 'https://xavi-valverde.vercel.app/'
  },
  {
    id: 2,
    title: 'My Self || Portfolio',
    description: 'Este es un portfolio, donde muestro mis habilidades y proyectos a traves de una experiencia narrativa e interactiva.',
    image: '/myself.jpg',
    url: 'https://portfolio-bite.vercel.app/'
    
  },
  {
    id: 3,
    title: 'Bitepixe|PortalGames',
    description: 'Una de una de mis pasiones, los videojuegos, un rincón de noticias y opiniones sobre el mundo de los videojuegos.',
    image: '/project1.jpg',
    url: 'https://albertojs89.alwaysdata.net/BITEPIXE/index.php'
  },
  
];

  const sections = [
    { icon: '🛠', label: 'Skills' },
    { icon: '📁', label: 'Projects' },
    { icon: '👤', label: 'About' },
    { icon: '📞', label: 'Contact' }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6 retro-container old-crt-monitor text-[var(--primary-color)] relative">

      
      {/* Menú lateral */}
      <div className="w-full md:w-1/4 pr-6 reveal-slow">

        <h2 className="text-xl font-bold mb-4 glitch-tooltip">Menu</h2>
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
      <div className="w-full md:w-3/4 border-t md:border-t-0 md:border-l border-[var(--primary-color)] pl-6 overflow-y-auto max-h-[80vh]">

    {/* SKILLS */}
        {activeSection === 'Skills' && (
          <div className="flex flex-col items-center">

            {/* GIF principal */}
            <div className="w-48 h-48 mb-6 glitch-tooltip">
              <img src="/skills2.png" alt="Skills Animation" className="w-full h-full object-contain" />
            </div>

            {/* Iconos de habilidades */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-[var(--primary-color)] pb-10">

              
              {/* HTML */}
              <div className="relative group">
                <FaHtml5 className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  HTML
                </span>
              </div>

              {/* CSS */}
              <div className="relative group">
                <FaCss3Alt className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CSS
                </span>
              </div>

              {/* JavaScript */}
              <div className="relative group">
                <FaJsSquare className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  JavaScript
                </span>
              </div>

              {/* React */}
              <div className="relative group">
                <FaReact className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  React
                </span>
              </div>

              {/* Bootstrap */}
              <div className="relative group">
                <FaBootstrap className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bootstrap
                </span>
              </div>

              {/* Tailwind */}
              <div className="relative group">
                <SiTailwindcss className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tailwind
                </span>
              </div>

              {/* Vite */}
              <div className="relative group">
                <SiVite className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Vite
                </span>
              </div>

              {/* Photoshop */}
              <div className="relative group">
                <SiAdobephotoshop className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Photoshop
                </span>
              </div>

              {/* Illustrator */}
              <div className="relative group">
                <SiAdobeillustrator className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Illustrator
                </span>
              </div>

              {/* Figma */}
              <div className="relative group">
                <FaFigma className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Figma
                </span>
              </div>

              {/* GitHub */}
              <div className="relative group">
                <FaGithub className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GitHub
                </span>
              </div>

              {/* PHP */}
              <div className="relative group">
                <FaPhp className="w-12 h-12 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-[var(--primary-color)] text-[var(--background-color)] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  PHP
                </span>
              </div>

            </div>

          </div>
        )}


      
    {/* PROJECTS */}

     {activeSection === 'Projects' && (
        <div className="space-y-16 overflow-y-auto max-h-screen pr-4 custom-scroll">
          
          {/* GIF principal centrado */}
          <div className="flex justify-center">
            <div className="w-48 h-48 mb-0 glitch-tooltip">
              <img
                src="/projects.png"
                alt="Projects Animation"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center group transition-transform duration-700 ease-in-out"
            >
              {/* Imagen o vídeo clicable */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md aspect-video overflow-hidden border-2 border-[var(--primary-color)] group-hover:shadow-[0_0_20px_var(--primary-color)] transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover glitch-tooltip"
                />
              </a>

              {/* Título y descripción */}
              <h3 className="mt-4 text-xl font-bold text-[var(--primary-color)]">{project.title}</h3>
              <p className="mt-2 text-center max-w-md text-[var(--primary-color)] reveal-from-bottom">
                {project.description}
              </p>
              <hr className="w-1/2 border-t border-[var(--primary-color)] opacity-30 my-8" />
            </div>
          ))}

        </div>
      )}

    {/* FIN PROJECTS */}

    {/* ABOUT */}

      {activeSection === 'About' && (
        <div className="flex flex-col items-center space-y-6 reveal-from-bottom">

          {/* GIF de cabecera */}
          <div className="w-38 h-40 glitch-tooltip">
            <img
              src="/about.png" // ← Cambia esto si el GIF se llama distinto
              alt="About Animation"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Texto descriptivo con efecto */}
          <p className="max-w-2xl text-center text-[var(--primary-color)] opacity-0 animate-fadeInUp leading-relaxed">
            Me llamo Alberto, soy desarrollador frontend con pasión por el diseño visual y la experiencia de usuario. 
            Disfruto combinando código con creatividad para dar vida a ideas, y me encanta crear interfaces intuitivas que conecten con las personas.
            Actualmente estoy enfocado en seguir creciendo como profesional combinando React, animaciones, diseño visual y mucho mimo por el detalle.
          </p>


        </div>
      )}


    {/* FIN ABOUT */}


    {/* CONTACT */}

      {activeSection === 'Contact' && <p>Formulario o redes de contacto.</p>}

    {/* FIN CONTACT */}
      

      </div>

      {/* Botón de volver */}
      <div className="absolute bottom-6 left-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition-colors duration-300"
        >
          ← Back
        </Link>
      </div>

    </div>
  );
}

export default Home;
