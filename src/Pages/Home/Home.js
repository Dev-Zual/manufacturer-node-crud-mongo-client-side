import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Buniness from './Buniness';
import Tools from './Tools';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Buniness></Buniness>
      <Footer></Footer>
    </div>
  );
};

export default Home;
