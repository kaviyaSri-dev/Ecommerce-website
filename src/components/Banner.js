import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-products">
        <div className="product-card">
          <h3 className='head'>HMT Kolam Rice</h3>
          <s className='strike'>900</s>
          <div>
          <p className='element'> ₹630</p>
          </div>
          <p>------------------------------------------------------------</p>
          <h3 className='head'>Toor / Arhar Dal</h3>
          <s className='strike'>₹399</s> 
          <div>
          <p className='element'> ₹289</p>
          </div>
          <p>------------------------------------------------------------</p>
          <h3 className='head'>Cashew / Kaju</h3>
            <s className='strike'>1000</s>
            <div>
           <p className='element'> ₹540</p>
           </div>
        </div>
      </div>
      <div className="banner-image">
        <img src= "/images/banner2.jpg"alt="Products Banner" />
      </div>
    </div>
  );
}

export default Banner;
