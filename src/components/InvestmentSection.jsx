import React from 'react';
import './InvestmentSection.css';

function InvestmentSection() {
  return (
    <section className="investment-section">
      <div className="image-container">
        <img 
          src="https://wallex.ir/_next/image?url=%2Fimages%2Finvestment-motivation.webp&w=1200&q=60" 
          alt="سرمایه گذاری روی رمزارزها" 
        />
      </div>

      <div className="text-container">
        <h2>سرمایه‌گذاری روی رمزارزها، سرمایه‌گذاری روی آینده</h2>
        <ul>
          <li>راهی مطمئن برای ورودی مطمئن به بازارهای بدون مرز جهانی</li>
          <li>شفافیت و غیرمتمرکز بودن بازار رمزارزها</li>
          <li>حفظ ارزش دارایی در برابر تورم و بحران‌های اقتصادی</li>
          <li>تراکنش‌های سریع با کمترین کارمزد</li>
        </ul>
      </div>
    </section>
  );
}

export default InvestmentSection;

