import { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import AboutMe from './components/about-me/about-me.component';
import Services from './components/services/services.component';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import './App.css';

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Fragment>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </Fragment>
  );
}

export default App;
