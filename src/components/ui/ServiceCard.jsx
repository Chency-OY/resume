import React from 'react';
import { useLanguageStore } from '../../store/languageStore';

const ServiceCard = ({ item }) => {
    const { language } = useLanguageStore();

    return (
        <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="text-xl font-light mb-4" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#F2994A' }}>
                {language === 'zh' ? item.title : item.titleEn}
            </h4>
            <p className="text-gray-600 leading-relaxed">
                {language === 'zh' ? item.description : item.descriptionEn}
            </p>
        </div>
    );
};

export default ServiceCard;
