import React from 'react';
import author from '../../me.jpeg';

const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={author} alt='author...' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>about me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
            nunc non blandit massa enim nec dui nunc mattis. Donec pretium
            vulputate sapien nec sagittis aliquam malesuada. Urna nec tincidunt
            praesent semper feugiat. Est sit amet facilisis magna etiam tempor
            orci. Tellus mauris a diam maecenas sed enim. Mollis aliquam ut
            porttitor leo a diam. Mi tempus imperdiet nulla malesuada
            pellentesque elit. Egestas maecenas pharetra convallis posuere morbi
            leo urna molestie at. Habitant morbi tristique senectus et netus et.
            Volutpat consequat mauris nunc congue nisi vitae. Consectetur purus
            ut faucibus pulvinar elementum integer. Quis hendrerit dolor magna
            eget est lorem ipsum. Eget dolor morbi non arcu risus. Amet dictum
            sit amet justo donec enim diam vulputate ut. Eget velit aliquet
            sagittis id. Ut placerat orci nulla pellentesque dignissim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
