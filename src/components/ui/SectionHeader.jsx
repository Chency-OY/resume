import React from 'react';
import { useLanguageStore } from '../../store/languageStore';

const SectionHeader = ({ title, titleEn, color = '#6FCF97', level = 2, className = '' }) => {
    const { language } = useLanguageStore();

    const baseStyle = {
        fontFamily: "'Helvetica Neue Light', sans-serif",
        fontWeight: 400,
        color
    };

    if (level === 3) {
        return (
            <h3 className={`text-2xl font-light mb-8 ${className}`} style={baseStyle}>
                {language === 'zh' ? title : titleEn}
            </h3>
        );
    }

    return (
        <h2 className={`text-3xl font-light text-center mb-16 ${className}`} style={baseStyle}>
            {language === 'zh' ? title : titleEn}
        </h2>
    );
};

export default SectionHeader;
