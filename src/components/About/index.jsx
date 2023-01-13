import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import AboutQuotes from './AboutQuotes';
import AboutArea from './AboutArea';
import AboutCounter from './AboutCounter';
import CtaImages from './CtaImages';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="About me" subtitle="link" url="/home" />
      <AboutArea/>
      <AboutCounter/>
      <CtaImages/>
      <FooterTwo/>
    </>
  );
};

export default index;