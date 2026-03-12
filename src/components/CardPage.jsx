import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import avatarImage from '../assets/头像.jpg';
import wechatQRCode from '../../dist/wechat.jpg';

const CardPage = () => {
  const { language } = useLanguageStore();

  return (
    <section className="py-24 px-8" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      <div className="max-w-4xl mx-auto">
        {/* 名片样式 */}
        <div className="p-8 rounded-lg shadow-lg border border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* 左侧信息 */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                {/* 头像 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] to-[#F2994A] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img 
                    src={avatarImage} 
                    alt={language === 'zh' ? '欧阳陈熙' : 'Chenxi Ouyang'}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
                  />
                </div>
                
                {/* 姓名和职位 */}
                <div>
                  <h3 className="text-2xl font-light" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#333' }}>
                    {language === 'zh' ? '欧阳陈熙' : 'Chenxi Ouyang'}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {language === 'zh' ? '南京遥察科技有限公司' : 'Nanjing Yaocha Technology Co., Ltd.'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {language === 'zh' ? '执行董事、法人代表、CEO、CTO' : 'Executive Director, Legal Representative, CEO & CTO'}
                  </p>
                </div>
              </div>
              
              {/* 联系方式 */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600"><span className="font-medium">{language === 'zh' ? '研究方向' : 'Research Focus'}:</span> {language === 'zh' ? 'RNA设计算法，空间转录组相关算法' : 'RNA design algorithms and spatial transcriptomics related algorithms'}</p>
                <p className="text-sm text-gray-600"><span className="font-medium">{language === 'zh' ? '电话' : 'Phone'}:</span> +86 18012818800</p>
                <p className="text-sm text-gray-600"><span className="font-medium">{language === 'zh' ? '邮箱' : 'Email'}:</span> 2712818800@qq.com</p>
                <p className="text-sm text-gray-600"><span className="font-medium">{language === 'zh' ? '邮箱' : 'Email'}:</span> chenxiouyang24@rcsi.com</p>
                <p className="text-sm text-gray-600"><span className="font-medium">{language === 'zh' ? '地址' : 'Address'}:</span> {language === 'zh' ? '苏州市吴江区久泳西路1号，南京市建邺区梦都大街1号3幢10层25室' : 'No. 1 Jiuyong West Road, Wujiang District, Suzhou; Room 25, 10th Floor, Building 3, No. 1 Mengdu Street, Jianye District, Nanjing'}</p>
              </div>
            </div>
            
            {/* 右侧微信二维码 */}
            <img 
              src={wechatQRCode} 
              alt={language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
              className="w-40 h-40 object-contain"
            />
          </div>
          
          {/* 装饰线条 */}
          <div className="w-full h-px bg-gradient-to-r from-[#D4AF37] to-[#F2994A] mt-8 opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default CardPage;