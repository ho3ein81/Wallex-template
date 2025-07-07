import React from 'react';
import './WhyWallex.css';
import { FaChartLine, FaRocket, FaWallet, FaShieldAlt, FaCoins, FaHeadset, FaUserCheck } from 'react-icons/fa';

function WhyWallex() {
  const items = [
    {
      icon: <FaChartLine />,
      title: 'امکانات پیشرفته برای معاملات',
      desc: 'ابزارهای مدرن مانند حد سود و ضرر، گزارش سود و زیان، هشدار قیمت و ابزارهای تحلیل بازار در اختیار شماست.',
    },
    {
      icon: <FaRocket/>,
      title: 'عمق بازار و حجم معاملات بالا',
      desc: 'با بیش از ۱ میلیون کاربر فعال، معامله خود را در سریع‌ترین زمان ممکن انجام دهید.',
      special: 'black',  // کلاس مشکی
    },
    {
      icon: <FaWallet />,
      title: 'کیف‌پول اختصاصی',
      desc: 'دارایی‌های شما به صورت سرد نگه‌داری می‌شود و در برابر حمله‌های مختلف امنیت دارد.',
      desc: 'دارایی‌های شما به صورت سرد نگه‌داری می‌شود و در برابر حمله‌های مختلف امنیت دارد. این روش ذخیره‌سازی از نفوذ هکرها جلوگیری کرده و تضمین می‌کند دارایی‌هایتان در شرایط ایمن باقی بمانند.',

    },
    {
      icon: <FaShieldAlt />,
      title: 'سپرهای امنیتی مدرن',
      desc: 'تیم امنیتی والکس با ابزارهای پیشرفته، امنیت دارایی کاربران را تضمین می‌کند. تایید دو عاملی نیز فعال است.',
    },
    {
      icon: <FaCoins />,
      title: 'تنوع کوین و سبد معاملات',
      desc: 'امکان معامله بهترین کوین‌ها در سه بازار مختلف، تنوع و انعطاف را برای شما فراهم می‌کند.',
    },
    {
      icon: <FaHeadset />,
      title: 'پشتیبانی حرفه‌ای',
      desc: 'پشتیبانی آنلاین و تلفنی ۲۴ ساعته، خیال شما را از بابت پاسخ‌گویی راحت می‌کند.',
    },
    {
      icon: <FaUserCheck />,
      title: 'احراز هویت سریع',
      desc: 'در کمتر از پنج دقیقه ثبت‌نام و معامله را آغاز کنید.',
      special: 'blue',   // کلاس آبی
    },
  ];

  return (
    <section className="why-wallex">
      <h2>چرا والکس؟</h2>
      <div className="why-grid">
        {items.map((item, index) => (
          <div className="why-item" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyWallex;
