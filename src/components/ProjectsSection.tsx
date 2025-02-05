import React from 'react';
import data from '../data/portfolio.json';

const ProjectsSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-white mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4 ring-1 ring-white/10 
                        hover:ring-blue-400/50 transition-all hover:scale-[1.02]"
            >
              <div className="w-full h-48 bg-gray-700/50 rounded-lg overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
            
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-blue-400">
                    Imagen del Proyecto
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;