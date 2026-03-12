import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import { awards, financeData } from '../data/awards';
import SectionHeader from './ui/SectionHeader';

const AwardsPage = () => {
  const { language } = useLanguageStore();

  const parseTime = (timeStr) => {
    const parts = timeStr.split('.');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) || 1;
    const day = parseInt(parts[2]) || 1;
    return new Date(year, month - 1, day);
  };

  const sortedAwards = [...awards].sort((a, b) => parseTime(b.time) - parseTime(a.time));

  return (
    <div className="animate-fade-in py-8">
      <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="获奖&证书" titleEn="Awards & Certificates" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedAwards.map((award) => (
              <div
                key={award.id}
                className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="flex items-start mb-3">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: '#F2994A' }}></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light mb-2 leading-relaxed" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#333' }}>
                      {language === 'zh' ? award.name : award.nameEn}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">{language === 'zh' ? award.time : award.timeEn}</p>
                      {award.organizer && (
                        <p className="text-xs text-gray-600 leading-relaxed">{language === 'zh' ? award.organizer : award.organizerEn}</p>
                      )}
                      {award.level && (
                        <span
                          className="inline-block px-2 py-1 text-xs rounded-full mt-2"
                          style={{ backgroundColor: '#F2F2F2', color: '#F2994A' }}
                        >
                          {language === 'zh' ? award.level : award.levelEn}
                        </span>
                      )}
                    </div>
                    {award.desc && award.desc.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {(language === 'zh' ? award.desc : award.descEn).map((item, index) => (
                          <li key={index} className="text-sm text-gray-600 pl-4 relative">
                            <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: '#6FCF97' }}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {award.image && (
                      <div className="mt-4 rounded-lg shadow-sm">
                        <img
                          src={award.image}
                          alt={language === 'zh' ? award.name : award.nameEn}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeader title="金融" titleEn="Finance" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {financeData.map((item, index) => (
                <div key={index} className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300" style={{ backgroundColor: '#FFFFFF' }}>
                  <h4 className="text-xl font-light mb-4" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#F2994A' }}>
                    {item.year}
                  </h4>
                  <div className={`${item.year === '2026' ? 'aspect-video bg-gray-100' : ''} rounded-lg flex items-center justify-center`}>
                    <img
                      src={item.image}
                      alt={language === 'zh' ? item.altZh : item.altEn}
                      className={`${item.year === '2026' ? 'w-full h-full' : 'w-full h-auto'} object-contain`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;