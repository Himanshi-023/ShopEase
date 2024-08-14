import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services';
import Trusted from '../Components/Trusted';
import FeatureProducts from '../Components/FeatureProducts';

interface HeroSectionProps {
  headingData: {
    name1: string;
    name2: string;
    name3: string;

  };
}

const Home: React.FC = () => {
  const data: HeroSectionProps['headingData'] = {
    name1: "Shop Smart",
    name2: "Shop Easy with",
    name3: "ShopEase",

  };

  return (
    <>
      <HeroSection headingData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    </>
  );
}

export default Home;

