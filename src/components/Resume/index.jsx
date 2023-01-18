import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ResumeArea from './ResumeArea';
import EducationArea from './EducationArea';
import ExperienceArea from "./ExperienceArea";
import ResumeProjectsArea from './ResumeProjectsArea';
import ResumeSkillsArea from './ResumeSkillsArea';

const index = () => {
  return (
    <>
      <Header/>
      <ResumeArea/>
      <ExperienceArea/>
      <ResumeProjectsArea/>
      <EducationArea/>
      <ResumeSkillsArea/>
      <FooterTwo/>
    </>
  );
};

export default index;