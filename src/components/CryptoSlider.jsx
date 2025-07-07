import React from 'react';
import './CryptoSlider.css';
import {
  SiBitcoin,
  SiEthereum,
  SiTether,
  SiRipple,
  SiLitecoin,
  SiBinance,
  SiCardano,
  SiPolkadot,
  SiDogecoin,
  SiSolana,
} from 'react-icons/si';

const cryptoData = [
  { icon: SiBitcoin, name: 'بیت کوین', color: '#F7931A' },
  { icon: SiEthereum, name: 'اتریوم', color: '#3C3C3D' },
  { icon: SiTether, name: 'تتر', color: '#26A17B' },
  { icon: SiRipple, name: 'ریپل', color: '#00AAE4' },
  { icon: SiLitecoin, name: 'لایت کوین', color: '#B8B8B8' },
  { icon: SiBinance, name: 'بایننس کوین', color: '#F3BA2F' },
  { icon: SiCardano, name: 'کاردانو', color: '#0033AD' },
  { icon: SiPolkadot, name: 'پولکادات', color: '#E6007A' },
  { icon: SiDogecoin, name: 'دوج کوین', color: '#C2A633' },
  { icon: SiSolana, name: 'سولانا', color: '#00FFA3' },
];

function CryptoSlider() {
  return (
    <section className="crypto-slider">
      <h2>خرید و فروش آنی رمزارزها</h2>
      <div className="slider-container">
        {cryptoData.map(({ icon: Icon, name, color }, idx) => (
          <div className="crypto-item" key={idx}>
            <Icon className="crypto-icon" style={{ color }} />
            <div className="crypto-name">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CryptoSlider;
