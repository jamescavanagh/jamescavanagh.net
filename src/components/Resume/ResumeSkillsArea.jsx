import React from 'react';

import resumeSkillsData from "../../data/resume/skillsData.json"

const ResumeSkillsArea = () => {
    return (
      <>
          <div className="about-education__wrap width:90%">
            <div className='row '>
            <h2 className='mb-15 ml-40'><b>Skills</b></h2>
                <div className="row align-items-center">
                <div className="col-xl-9 ml-40" >
                <p className='mr-10'>{resumeSkillsData.map(item => item.skillName).join(', ')}</p>
                </div>
            </div>
          </div>
        </div>
      </>
  );
};
export default ResumeSkillsArea;