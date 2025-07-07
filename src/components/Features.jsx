import React from 'react';
import './Features.css';
import { FaChartLine, FaRobot, FaBolt, FaCoins, FaKey } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaChartLine />,
      title: 'بازار حرفه‌ای',
      desc: '۱۳۰+ بازار معاملاتی با پایه تتر و تومان',
    },
    {
      icon: <FaRobot />,
      title: 'بات معامله‌گر',
      desc: 'معامله خودکار با استراتژی‌های متنوع',
    },
    {
      icon: <FaBolt />,
      title: 'خرید و فروش آنی',
      desc: 'انجام معاملات فوری بدون انتظار',
    },
    {
      icon: <FaCoins />,
      title: 'واریز و برداشت سریع',
      desc: 'پشتیبانی از رمزارز و ریال',
    },
    {
      icon: <FaKey />,
      title: 'امنیت پیشرفته',
      desc: ' بهره مندی از تمام امکانات والکس با استفاده از API',
    },
  ];

  return (
    <section className="features">
      <h2>امکانات والکس</h2>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-item" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
