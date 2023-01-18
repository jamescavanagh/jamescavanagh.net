import React from 'react';
import FooterFour from '../common/Footers/FooterFour';
import Header from '../common/Header';
import BlogArea from './BlogArea';
import BlogHeroArea from './BlogHeroArea';

const index = () => {
  return (
    <>
      <Header/>
      <BlogHeroArea title="Blog" subtitle="Blog" />
      <BlogArea/>
      <FooterFour/>
    </>
  );
};

export default index;