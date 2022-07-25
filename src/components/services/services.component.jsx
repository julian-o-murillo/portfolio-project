import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='services'>
      <h1 className='py-5'>Services</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
              </div>
              <h3>Web Design</h3>
              <p>
                Beautiful websites focusing on the user to ensure a seemless and
                pleasant experience.{' '}
              </p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faFileCode} size='2x' />
              </div>
              <h3>Web Development</h3>
              <p>
                Modular & scalable websites built using proven software
                development technologies, concepts, and practices.{' '}
              </p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon
                  className='icon'
                  icon={faFacebookF}
                  size='2x'
                />
              </div>
              <h3>Facebook Ads SMM</h3>
              <p>
                Your products/ services will have maximum exposure to potential
                clents/ customers on Facebook.{' '}
              </p>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faGoogle} size='2x' />
              </div>
              <h3>Google Ads</h3>
              <p>
                Your products/ services will appear at the top of Google search
                results.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
