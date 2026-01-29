import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import wechatQRCode from '../assets/微信.jpg';

const Business = () => {
  const { language } = useLanguageStore();

  const services = [
    {
      id: 1,
      title: '线性RNA设计优化',
      titleEn: 'Linear RNA Design Optimization',
      description: '利用先进的算法和生物学知识，优化线性RNA分子的设计，提高其稳定性、翻译效率和靶向性。',
      descriptionEn: 'Using advanced algorithms and biological knowledge to optimize the design of linear RNA molecules, improving their stability, translation efficiency, and targeting ability.'
    },
    {
      id: 2,
      title: '环状RNA序列优化',
      titleEn: 'Circular RNA Sequence Optimization',
      description: '专注于环状RNA(circRNA)的序列设计与优化，利用专有算法提高circRNA的稳定性、表达效率和功能特性。',
      descriptionEn: 'Specializing in circular RNA (circRNA) sequence design and optimization, utilizing proprietary algorithms to enhance the stability, expression efficiency, and functional properties of circRNA.'
    },
    {
      id: 3,
      title: '分子动力学模拟',
      titleEn: 'Molecular Dynamics Simulation',
      description: '通过计算机模拟技术，研究生物分子的动态行为和相互作用，为药物设计和蛋白质工程提供理论基础。',
      descriptionEn: 'Using computer simulation techniques to study the dynamic behavior and interactions of biomolecules, providing theoretical basis for drug design and protein engineering.'
    },
    {
      id: 4,
      title: '蛋白质对接',
      titleEn: 'Protein Docking',
      description: '预测蛋白质与配体或其他蛋白质的结合模式和亲和力，助力药物开发和蛋白质功能研究。',
      descriptionEn: 'Predicting the binding modes and affinities between proteins and ligands or other proteins, assisting in drug development and protein function research.'
    }
  ];

  const consultationServices = [
    {
      id: 1,
      title: '留学咨询',
      titleEn: 'Study Abroad Consultation',
      description: '提供专业的留学规划和申请指导，包括院校选择、材料准备、签证办理等全方位服务。',
      descriptionEn: 'Providing professional study abroad planning and application guidance, including university selection, document preparation, visa application and other comprehensive services.'
    },
    {
      id: 2,
      title: '高考志愿填报',
      titleEn: 'College Entrance Examination Application',
      description: '基于学生的兴趣、能力和成绩，提供科学的高考志愿填报建议，帮助学生选择合适的院校和专业。',
      descriptionEn: 'Based on students\' interests, abilities and grades, providing scientific college entrance examination application suggestions to help students choose suitable universities and majors.'
    },
    {
      id: 3,
      title: '初高中生生物辅导',
      titleEn: 'Biology Tutoring for Middle and High School Students',
      description: '为初高中生提供专业的生物学科辅导，包括课程讲解、实验指导、习题训练等，帮助学生提高生物成绩和学习兴趣。',
      descriptionEn: 'Providing professional biology tutoring for middle and high school students, including course explanation, experiment guidance, exercise training, etc., to help students improve their biology grades and learning interest.'
    }
  ];

  const educationalServices = [
    {
      id: 1,
      title: 'Python入门教学',
      titleEn: 'Python Beginner Teaching',
      description: '为初学者提供Python编程入门课程，包括基础语法、数据结构、函数编程等内容，培养编程思维和解决问题的能力。',
      descriptionEn: 'Providing Python programming introductory courses for beginners, including basic syntax, data structures, functional programming, etc., to cultivate programming thinking and problem-solving abilities.'
    },
    {
      id: 2,
      title: '理财常识科普',
      titleEn: 'Financial Literacy Popularization',
      description: '普及个人理财基础知识，包括储蓄、投资、保险、退休规划等内容，帮助个人建立正确的理财观念和习惯。',
      descriptionEn: 'Popularizing personal financial basic knowledge, including savings, investment, insurance, retirement planning, etc., to help individuals establish correct financial concepts and habits.'
    }
  ];

  const technicalServices = [
    {
      id: 1,
      title: '个人主页制作',
      titleEn: 'Personal Homepage Creation',
      description: '根据个人需求和风格偏好，设计制作各种风格的个人主页，展示个人信息、作品集、技能等内容。',
      descriptionEn: 'Design and create personal homepages in various styles based on individual needs and style preferences, showcasing personal information, portfolios, skills, etc.'
    },
    {
      id: 2,
      title: '公司宣传网站制作',
      titleEn: 'Company Promotion Website Creation',
      description: '为企业设计制作专业的宣传网站，展示公司形象、产品服务、企业文化等内容，提升企业品牌知名度。',
      descriptionEn: 'Design and create professional promotional websites for enterprises, showcasing company image, products and services, corporate culture, etc., to enhance corporate brand awareness.'
    },
    {
      id: 3,
      title: '软著申请',
      titleEn: 'Software Copyright Application',
      description: '提供软件著作权申请服务，包括材料准备、申请流程指导、文件提交等全流程支持，确保申请顺利通过。',
      descriptionEn: 'Providing software copyright application services, including material preparation, application process guidance, document submission and other full-process support to ensure smooth application approval.'
    }
  ];

  return (
    <section className="py-24 px-8 relative" style={{ fontFamily: "'Noto Sans CJK Thin', sans-serif", fontWeight: 300 }}>
      {/* 微信二维码 */}
      <div className="fixed bottom-8 right-8 z-30 bg-white p-3 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg">
        <div className="text-center mb-2 text-sm font-light text-gray-600">
          {language === 'zh' ? '扫码联系' : 'Scan to contact'}
        </div>
        <img 
          src={wechatQRCode} 
          alt={language === 'zh' ? '微信二维码' : 'WeChat QR Code'} 
          className="w-32 h-32 object-contain"
        />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#6FCF97' }}>
          {language === 'zh' ? '业务' : 'Service'}
        </h2>
        <h3 className="text-2xl font-light mb-8" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#4A3B32' }}>
          {language === 'zh' ? '科研服务' : 'Research Services'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-light mb-4" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#F2994A' }}>
                {language === 'zh' ? service.title : service.titleEn}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {language === 'zh' ? service.description : service.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-light mb-8" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#4A3B32' }}>
          {language === 'zh' ? '教育咨询' : 'Education Consultation'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {consultationServices.map((service) => (
            <div key={service.id} className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-light mb-4" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#F2994A' }}>
                {language === 'zh' ? service.title : service.titleEn}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {language === 'zh' ? service.description : service.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-light mb-8" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#4A3B32' }}>
          {language === 'zh' ? '知识普及' : 'Knowledge Popularization'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationalServices.map((service) => (
            <div key={service.id} className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-light mb-4" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#F2994A' }}>
                {language === 'zh' ? service.title : service.titleEn}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {language === 'zh' ? service.description : service.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-light mb-8" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#4A3B32' }}>
          {language === 'zh' ? '技术服务' : 'Technical Services'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technicalServices.map((service) => (
            <div key={service.id} className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-xl font-light mb-4" style={{ fontFamily: "'Helvetica Neue Light', sans-serif", fontWeight: 400, color: '#F2994A' }}>
                {language === 'zh' ? service.title : service.titleEn}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {language === 'zh' ? service.description : service.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;