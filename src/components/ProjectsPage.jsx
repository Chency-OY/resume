import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import { projects } from '../data/projects';
import SectionHeader from './ui/SectionHeader';

const ProjectsPage = () => {
  const { language } = useLanguageStore();

  return (
    <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="研究&项目经历" titleEn="Research & Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#F2F2F2' }}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={project.image}
                      alt={language === 'zh' ? project.title : project.titleEn}
                      className="w-full h-64 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={language === 'zh' ? project.title : project.titleEn}
                    className="w-full h-64 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light mb-2" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#333' }}>
                  {language === 'zh' ? project.title : project.titleEn}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{language === 'zh' ? project.time : project.timeEn}</p>
                {project.instructor && (
                  <p className="text-xs text-gray-600 mb-2">{language === 'zh' ? project.instructor : project.instructorEn}</p>
                )}
                {project.collaboration && (
                  <p className="text-xs text-gray-600 mb-3">{language === 'zh' ? project.collaboration : project.collaborationEn}</p>
                )}
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{language === 'zh' ? project.description : project.descriptionEn}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{language === 'zh' ? project.participation : project.participationEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;