import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import { skillCategories } from '../data/skills';
import SectionHeader from './ui/SectionHeader';

const SkillsPage = () => {
  const { language } = useLanguageStore();

  return (
    <div className="animate-fade-in py-8">
      <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="技能" titleEn="Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((skillCategory, index) => (
              <div key={index} className="p-6 rounded-lg shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="text-lg font-medium mb-4" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", color: '#F2994A' }}>
                  {language === 'zh' ? skillCategory.category : skillCategory.categoryEn}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(language === 'zh' ? skillCategory.items : skillCategory.itemsEn).map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ backgroundColor: '#F2F2F2', color: '#333' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;