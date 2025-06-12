import React from 'react';
import { User, Mail, Github as GitHub, Linkedin } from 'lucide-react';
import data from '../data/portfolio.json';

const PersonalSection = () => {
  return (
    <section className="w-100 w-screen h-screen flex items-center justify-center bg-gray-900 p-8">
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="w-64 h-64 md:w-96 md:h-96 relative bg-white image-bg">
          <img
            src={data.personal.image}
            alt={data.personal.name}
            className="w-full h-full object-cover rounded-2xl shadow-lg ring-2 ring-blue-400/20"
          />
        </div>
        <div className="max-w-xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {data.personal.name}
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {data.personal.secondName}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-400">
              {data.personal.title}
            </h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {data.personal.description}
          </p>
          <div className="flex gap-4">
            <a href="mailto:verutti.gabriel@gmail.com">
              <button className="p-3 rounded-full bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors">
                <Mail size={24} />
              </button>
            </a>
            <a href='https://github.com/JoseVerutti'>
              <button className="p-3 rounded-full bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors">
                <GitHub size={24} />
              </button>
            </a>
            <a href='https://www.linkedin.com/in/jose-gabriel-verutti-narvaez-559576190/'>
              <button className="p-3 rounded-full bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors">
                <Linkedin size={24} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;