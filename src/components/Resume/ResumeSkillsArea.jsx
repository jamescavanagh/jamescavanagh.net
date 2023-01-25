import React from 'react';

import resumeSkillsData from "../../data/resume/skillsData.json"

const ResumeSkillsArea = () => {
    return (
      <>
          <div className="about-education__wrap width:90%">
            <div className='row '>
                <div className="row align-items-center">
                  <div className="col-xl-9 ml-40" >
                  <h1 className='experience-title mb-15'><b>Skills</b></h1>
                    <p className='mr-10'>
                      {
                        resumeSkillsData.map(item => item.skillName).join(', ')
                      }
                    </p>
                </div>
            </div>
          </div>
        </div>
      </>
  );
};
export default ResumeSkillsArea;