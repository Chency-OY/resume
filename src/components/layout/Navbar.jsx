import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguageStore } from '../../store/languageStore';

const Navbar = () => {
    const { language, toggleLanguage } = useLanguageStore();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: '首页', nameEn: 'Home', path: '/' },
        { name: '项目', nameEn: 'Projects', path: '/projects' },
        { name: '发表', nameEn: 'Publications', path: '/publications' },
        { name: '获奖', nameEn: 'Awards', path: '/awards' },
        { name: '技能', nameEn: 'Skills', path: '/skills' },
        { name: '名片', nameEn: 'Business Card', path: '/card' },
        { name: '业务', nameEn: 'Service', path: '/business' },
    ];

    const handleNavClick = () => setIsOpen(false);

    const isLinkActive = (path) => {
        if (path === '/') return location.pathname === '/' && !location.hash;
        return location.pathname === path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="text-xl font-light tracking-wider text-[#4A3B32] hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'Helvetica Neue Light', sans-serif" }}>
                        Chenxi Ouyang
                    </Link>

                    {/* 桌面菜单 */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navItems.filter(item => item.path !== '/business').map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-light transition-colors ${isLinkActive(item.path)
                                        ? 'text-[#6FCF97] font-medium'
                                        : 'text-gray-600 hover:text-[#6FCF97]'
                                    }`}
                            >
                                {language === 'zh' ? item.name : item.nameEn}
                            </Link>
                        ))}
                        <div className="h-4 w-px bg-gray-300 mx-2"></div>
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-500 hover:border-[#F2994A] hover:text-[#F2994A] transition-all bg-white"
                        >
                            {language === 'zh' ? 'EN' : '中'}
                        </button>
                        <Link
                            to="/business"
                            className={`ml-4 text-sm font-light transition-colors ${isLinkActive('/business')
                                    ? 'text-[#6FCF97] font-medium'
                                    : 'text-gray-600 hover:text-[#6FCF97]'
                                }`}
                        >
                            {language === 'zh' ? '业务' : 'Service'}
                        </Link>
                    </div>

                    {/* 移动端菜单按钮 */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            className="px-2 py-0.5 rounded border border-gray-200 text-xs text-gray-500 bg-white"
                        >
                            {language === 'zh' ? 'EN' : '中'}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* 移动端菜单抽屉 */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 absolute w-full shadow-lg animate-fade-in">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={handleNavClick}
                                className="block px-3 py-3 rounded-md text-base font-light text-gray-700 hover:text-[#6FCF97] hover:bg-gray-50"
                            >
                                {language === 'zh' ? item.name : item.nameEn}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
