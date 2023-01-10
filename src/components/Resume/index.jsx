import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ResumeArea from './ResumeArea';
import EducationTabs from './EducationTabs';
import GetInTouch from './GetInTouch';
import ResumeFolder from "./ResumeFolder";

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="RESUME" subtitle="PDF format" url="/resume-pdf" />
      <ResumeArea/>
      <ResumeFolder/>
      <EducationTabs/>
      <GetInTouch/>
      <FooterTwo/>
    </>
  );
};

export default index;