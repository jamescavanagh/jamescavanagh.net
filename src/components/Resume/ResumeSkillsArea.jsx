import React from 'react';

const resumeSkillsData = [
    {
        id:1,
        skillName:'Python'
    },
    {
        id:1,
        skillName:"Data Analysis"
    },
    {
        id:1,
        skillName:"Data Visualization"
    },
    {
        id:1,
        skillName:"Presentation"
    },
    {
        id:1,
        skillName:"ReactJS"
    },
    {
        id:1,
        skillName:"Linux"
    },
    {
        id:1,
        skillName:"Vim"
    },
    {
        id:1,
        skillName:"Git"
    },
    {
        id:1,
        skillName:"Hardware Prototyping"
    },
    {
        id:1,
        skillName:"IoT Systems Integration"
    },
]


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