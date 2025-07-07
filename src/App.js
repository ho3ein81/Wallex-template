import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/wallex-logo-v-light.svg';
import banner from './images/home-banner.webp';
import Features from './components/Features';
import WhyWallex from './components/WhyWallex';
import CryptoSlider from './components/CryptoSlider';
import InvestmentSection from './components/InvestmentSection';
import BuyCryptoTabs from './components/BuyCryptoTabs';

function App() {
  const [navActive, setNavActive] = useState(false);
  const [showFirstSet, setShowFirstSet] = useState(true);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const itemsSet1 = [
    '+۳ میلیون کاربر',
    'معامله آنی',
    'کارمزد صفر',
    'امنیت بالا'
  ];

  const itemsSet2 = [
    'پشتیبانی ۲۴ ساعته',
    'امنیت کیف پول',
    'تسویه سریع',
    'اپلیکیشن موبایل'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstSet(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = showFirstSet ? itemsSet1 : itemsSet2;

  return (
    <>
      <header>
        <div
          className="menu-toggle"
          id="menu-toggle"
          onClick={toggleNav}
          style={{ cursor: 'pointer' }}
        >
          &#9776;
        </div>

        <a href="">
          <img src={logo} alt="" className="logo" />
        </a>

        <button className="btn-login-register">ورود یا ثبت نام</button>

        <nav className={`nav ${navActive ? 'active' : ''}`} id="nav">
          <ul>
            <li>
              <select className="custom-select">
                <option value="btc">بیت‌کوین</option>
                <option value="eth">اتریوم</option>
                <option value="usdt">تتر</option>
              </select>
            </li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">خدمات</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-image-wrapper">
          <div className="main-body">
            <img className="img-body" src={banner} alt="بنر والکس" />
          </div>
          <div className="hero-text">
            <h1>صرافی ارز دیجیتال والکس</h1>
            <p>رتبه ۱ حجم معاملات بیت کوین</p>
            <div className="main-btn-ctn">
              <input
                className="input-btn"
                type="text"
                placeholder="شماره موبایل خود را وارد کنید"
              />
              <a href="#" className="btn-cta2">ثبت نام</a>
            </div>

            <a href="#" className="btn-cta">ثبت نام</a>
          </div>
        </div>
      </section>

      <div className="wrapper">
        <div className="grid-container slide-up">
          {visibleItems.map((item, index) => (
            <div key={index} className="grid-item ">
              {item}
            </div>
          ))}
        </div>
      </div>


       <Features />
      <WhyWallex />
      <CryptoSlider />
      <InvestmentSection/>
      <BuyCryptoTabs/>
    </>
    
  );
}

export default App;


