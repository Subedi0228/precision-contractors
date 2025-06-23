import React from 'react';
import Navbar from './navbar/Navbar';
import Carousel from './carousel/Carousel';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <Carousel />
    </section>
  );
};

export default Hero;