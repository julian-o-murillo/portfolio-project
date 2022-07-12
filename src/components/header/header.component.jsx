import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>web development website and promotions</h1>
        <h2>
          <Typed
            className='typed-text'
            strings={[
              'Web Design',
              'Web Development',
              'Facebook Ads SMM',
              'Google Ads',
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </h2>
        <a href='#' className='btn-main-offer'>
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
