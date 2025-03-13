import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, Briefcase } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';

function App() {
  const { translations: t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      <LanguageToggle />
      
      {/* Hero Section with animated gradient border */}
      <header className="container mx-auto px-4 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-green-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-green-400 via-purple-500 to-green-400 text-transparent bg-clip-text animate-gradient">
            Juan Machado de Paula
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-12 font-light tracking-wide">{t.hero.role}</p>
          <div className="flex justify-center gap-12">
            <a
              href="https://github.com/XuanDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-all transform hover:scale-110"
            >
              <Github size={48} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-machado-de-paula-7b6507226/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-all transform hover:scale-110"
            >
              <Linkedin size={48} />
            </a>
            <a
              href="mailto:juanmachadodev@outlook.com"
              className="text-green-400 hover:text-green-300 transition-all transform hover:scale-110"
            >
              <Mail size={48} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section with glass effect */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-green-900/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center text-green-400">{t.about.title}</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Developer workspace"
                  className="relative rounded-lg shadow-2xl transform transition duration-500 hover:scale-[1.02] w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-8">
                <p className="text-gray-300 leading-relaxed text-xl">
                  {t.about.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Git', 'Docker', 'Linux'].map((skill) => (
                    <span key={skill} className="px-6 py-3 bg-gradient-to-r from-purple-900/50 to-green-900/50 rounded-full text-green-300 text-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with elegant cards */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center text-green-400">{t.projects.title}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {t.projects.items.map((project, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-black rounded-lg p-10 border border-purple-500/20 hover:border-green-500/40 transition-colors h-full">
                    <div className="flex items-center gap-6 mb-6">
                      <Code2 className="text-green-400" size={32} />
                      <h3 className="text-2xl font-semibold text-purple-300">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <div className="flex gap-8">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 flex items-center gap-3 transition-colors text-lg group"
                      >
                        <Github size={24} className="group-hover:rotate-12 transition-transform" />
                        {t.projects.codeLink}
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 flex items-center gap-3 transition-colors text-lg group"
                      >
                        <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        {t.projects.demoLink}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with timeline effect */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 text-center text-green-400">{t.experience.title}</h2>
            <div className="space-y-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex gap-8 bg-black rounded-lg p-10 border border-purple-500/20 hover:border-green-500/40 transition-colors">
                  <div className="flex-shrink-0">
                    <BookOpen className="text-green-400" size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-purple-300">{t.experience.education.title}</h3>
                    <p className="text-green-400/80 mt-2 text-xl">{t.experience.education.period}</p>
                    <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                      {t.experience.education.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex gap-8 bg-black rounded-lg p-10 border border-purple-500/20 hover:border-green-500/40 transition-colors">
                  <div className="flex-shrink-0">
                    <Briefcase className="text-green-400" size={36} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-purple-300">{t.experience.work.title}</h3>
                    <p className="text-green-400/80 mt-2 text-xl">{t.experience.work.period}</p>
                    <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                      {t.experience.work.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with gradient border */}
      <footer className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative">
          <p className="text-gray-400 text-lg">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;