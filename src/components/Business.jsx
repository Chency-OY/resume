import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import wechatQRCode from '../../dist/wechat.jpg';
import { services, consultationServices, educationalServices, technicalServices } from '../data/services';
import ServiceCard from './ui/ServiceCard';
import SectionHeader from './ui/SectionHeader';

const Business = () => {
  const { language } = useLanguageStore();

  const ServiceSection = ({ title, titleEn, items, columns = 3 }) => (
    <>
      <SectionHeader title={title} titleEn={titleEn} level={3} color="#4A3B32" />
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8 mb-16`}>
        {items.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );

  return (
    <section className="py-24 px-8 relative" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      {/* 微信二维码 */}
      <div className="absolute top-8 right-8 z-30 bg-white p-3 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg">

        <img
          src={wechatQRCode}
          alt={language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
          className="w-40 h-40 object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader title="业务" titleEn="Service" />

        <ServiceSection title="科研服务" titleEn="Research Services" items={services} />
        <ServiceSection title="教育咨询" titleEn="Education Consultation" items={consultationServices} columns={2} />
        <ServiceSection title="知识普及" titleEn="Knowledge Popularization" items={educationalServices} columns={2} />
        <ServiceSection title="技术服务" titleEn="Technical Services" items={technicalServices} />
      </div>
    </section>
  );
};

export default Business;