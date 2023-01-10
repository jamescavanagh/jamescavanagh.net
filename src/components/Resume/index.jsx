import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ResumeArea from './ResumeArea';
import ResumeTabs from './ResumeTabs';
import GetInTouch from './GetInTouch';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="RESUME" subtitle="PDF format" url="/resume-pdf" />
      <ResumeArea/>
      <ResumeTabs/>
      <GetInTouch/>
      <FooterTwo/>
    </>
  );
};

export default index;