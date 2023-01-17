import React from 'react';
import BrandArea from '../common/BrandArea';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import AboutHome from './AboutHome';
import BlogHome from './BlogHome';
import HeroAreaHome from './HeroAreaHome';
import PortfolioHome from './PortfolioHome';
import ServicesHome from './ServicesHome';
//import VideoAreaHome from './VideoAreaHome';
import HeroAreaTwo from './HeroAreaTwo';


const index = () => {
  return (
    <>
      <Header/>
      <HeroAreaHome/>
      <AboutHome/>
      <ServicesHome/>
      <HeroAreaTwo/>
      <PortfolioHome/>
      <BrandArea homeBrand={true} brand="-2" />
      <BlogHome/>
      <FooterTwo/>
    </>
  );
};

export default index;