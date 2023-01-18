import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ContactArea from './ContactArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="CONTACT ME" subtitle="Contact Us" url="/home" />
      <ContactArea/>
      <FooterTwo/>
    </>
  );
};

export default index;