import React from 'react';
import PersonalHeader from './PersonalHeader';
import SocialLinks from './SocialLinks';
import backgroundImage from '../assets/数字江苏科创园.jpg';

const Slot = ({ name }) => <div data-slot={name} className="hidden" />;

const Home = () => (
    <div className="animate-fade-in">
        <PersonalHeader />
        <Slot name="after-header" />
        <div className="mt-8 mb-16 transform hover:-translate-y-1 transition-transform duration-500">
            <SocialLinks />
        </div>

        {/* 首页底部背景图片 */}
        <div className="mt-16 mb-24">
            <img
                src={backgroundImage}
                alt="Background"
                className="w-full h-full object-cover rounded-lg shadow-lg opacity-95"
            />
        </div>

        <Slot name="home-bottom" />
    </div>
);

export default Home;
