import React from 'react';
import PersonalSection from './components/PersonalSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SpaceSection from './components/SpaceSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col w-full">
        <section className="min-h-screen w-full">
          <PersonalSection />
        </section>
        <section className="min-h-screen w-full">
          <ExperienceSection />
        </section>
        <section className="min-h-screen w-full">
          <ProjectsSection />
        </section>
        <section className="min-h-screen w-full">
          <SpaceSection />
        </section>
      </div>
    </div>
  );
}

export default App;