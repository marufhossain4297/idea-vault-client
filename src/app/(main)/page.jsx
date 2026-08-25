import React from 'react';
import NavBar from '../components/sheard/NavBar';
import Banner from '../components/Pages/Banner';
import HowItWork from '../components/Pages/HowItWork';
import NewsLetter from '../components/Pages/NewsLetter';
import TrendingIdeas from '../components/Pages/TrendingIdeas';

const HomePage = () => {
  return (
    <>
      <Banner />
      <TrendingIdeas />
      <HowItWork />
      <NewsLetter />
    </>
  );
};

export default HomePage;