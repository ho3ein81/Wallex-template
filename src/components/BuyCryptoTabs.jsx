import React, { useState } from 'react';
import './BuyCryptoTabs.css';

function BuyCryptoTabs() {
  const tabs = [
    {
      icon: 'https://wallex.ir/_next/image?url=%2Fimages%2Fhow_to_signup.webp&w=640&q=60',
      text: 'ثبت نام در والکس در کمتر از ۵ دقیقه.',
    },
    {
      icon: 'https://wallex.ir/_next/image?url=%2Fimages%2Fhow_to_kyc.webp&w=640&q=60',
      text: 'تکمیل مراحل احراز هویت (KYC)',
    },
    {
      icon: 'https://wallex.ir/_next/image?url=%2Fimages%2Fhow_to_exchange.webp&w=640&q=60',
      text: 'ورود به بازار ارزهای دیجیتال و ثبت سفارش خرید و فروش',
    },
    {
      icon: 'https://wallex.ir/_next/image?url=%2Fimages%2Fhow_to_features.webp&w=640&q=60',
      text: 'مدیریت سرمایه با استفاده از امکانات والکس',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="buy-crypto-tabs">
      <div className="tab-content">
        <div className="tab-icon">
          <img src={tabs[activeIndex].icon} alt="icon" />
        </div>
        <h2>چطور ارز دیجیتال بخریم؟</h2>
        <h3>مدیریت سرمایه با استفاده از امکانات والکس</h3>
        <p>{tabs[activeIndex].text}</p>
      </div>

      <div className="tab-buttons">
        {tabs.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default BuyCryptoTabs;
