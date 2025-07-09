import React, {useEffect, useState} from 'react';
import './CryptoSlider.css';
import axios from 'axios';
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
 { id: 'bitcoin', icon: SiBitcoin, name: 'بیت کوین', color: '#F7931A' },
  { id: 'ethereum', icon: SiEthereum, name: 'اتریوم', color: '#3C3C3D' },
  { id: 'tether', icon: SiTether, name: 'تتر', color: '#26A17B' },
  { id: 'ripple', icon: SiRipple, name: 'ریپل', color: '#00AAE4' },
  { id: 'litecoin', icon: SiLitecoin, name: 'لایت کوین', color: '#B8B8B8' },
  { id: 'binancecoin', icon: SiBinance, name: 'بایننس کوین', color: '#F3BA2F' },
  { id: 'cardano', icon: SiCardano, name: 'کاردانو', color: '#0033AD' },
  { id: 'polkadot', icon: SiPolkadot, name: 'پولکادات', color: '#E6007A' },
  { id: 'dogecoin', icon: SiDogecoin, name: 'دوج کوین', color: '#C2A633' },
  { id: 'solana', icon: SiSolana, name: 'سولانا', color: '#00FFA3' },
];

function CryptoSlider() {
const [prices, setPrices] = useState({});

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=' + cryptoData.map(c => c.id).join(',') + '&vs_currencies=usd')
      .then(res => {
        setPrices(res.data);
      })
      .catch(err => console.error('خطا در دریافت قیمت ارزها:', err));
  }, []);

  return (
    <section className="crypto-slider">
      <h2>خرید و فروش آنی رمزارزها</h2>
      <div className="slider-container">
        {cryptoData.map(({ id, icon: Icon, name, color }, idx) => (
          <div className="crypto-item" key={idx}>
            <Icon className="crypto-icon" style={{ color }} />
            <div className="crypto-name">{name}</div>
            <div className="crypto-price">
              {prices[id] ? `$${prices[id].usd}` : '...'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CryptoSlider;
