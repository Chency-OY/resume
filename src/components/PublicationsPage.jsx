import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import { publications } from '../data/publications';
import SectionHeader from './ui/SectionHeader';

const PublicationsPage = () => {
  const { language } = useLanguageStore();

  return (
    <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="发表文章" titleEn="Publications" />

        <div className="space-y-8">
          {publications.map((publication) => (
            <div key={publication.id} className="p-8 rounded-lg shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
              <h3 className="text-2xl font-light mb-6 pb-3 border-b" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#F2994A', borderColor: '#F2F2F2' }}>
                {language === 'zh' ? publication.category : publication.categoryEn}
              </h3>

              {publication.showTable ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '作者' : 'Author'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '标题' : 'Title'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '期刊' : 'Journal'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '期刊/会议评级&影响因子' : 'Journal/Conference Rating & Impact Factor'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          {language === 'zh' ? '发表日期' : 'Publication Date'}
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700">
                          DOI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {publication.papers.map((paper, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.author : paper.authorEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.title : paper.titleEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.journal : paper.journalEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.rating : paper.ratingEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {language === 'zh' ? paper.date : paper.dateEn}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-800">
                            {paper.doi}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="space-y-4">
                  {publication.items.map((item, index) => (
                    <div key={index} className="relative pl-6">
                      <div className="absolute left-0 top-3 w-3 h-3 rounded-full" style={{ backgroundColor: '#6FCF97' }}></div>
                      <div className="flex flex-col space-y-2">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium"
                            style={{ fontFamily: "'Helvetica Neue Light', sans-serif", color: '#333' }}
                          >
                            {language === 'zh' ? item.title : item.titleEn}
                          </a>
                        ) : (
                          <h4 className="text-lg font-medium" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", color: '#333' }}>
                            {language === 'zh' ? item.title : item.titleEn}
                          </h4>
                        )}
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {language === 'zh' ? item.details : item.detailsEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default PublicationsPage;