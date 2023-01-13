import React from 'react';

import certsData from '../../data/resume/certsData.json';
import degreeData from "../../data/resume/degreeData.json"


const EducationArea = () => {
    return (
      <>
          <div className="about-education__wrap">
            <h2 className='mb-20 ml-40'><b>Education</b></h2>
            <div className="row align-items-center">
                <div className="col-xl-9 ml-40" >
            <h3 className="tab-pane-title mb-0"><b>{degreeData.institution}</b> ({degreeData.time})</h3>
            <p>{degreeData.institutionDescription}</p>
          <div className="about-education">
            <div>
              <h5 className="tab-pane-title mb20"><b>{degreeData.level} {degreeData.major}</b></h5>
              <p className=" mb50">Minor: {degreeData.minor}</p>
            </div>
            <div>
                {
                degreeData.keyPoints.map(item => (
                    <div>
                        <ul>
                            <h6>-{item}</h6>
                        </ul>
                    </div>
                ))
                }
          </div>

          </div>


          {/* Start Certification Area */}
          
            <div className="row mt-50">
                {
                certsData.map(item => (
                    <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                    <div className="edu-exp-item mb-30">
                        <div className="edu-exp-image mb-10">
                          <img src={item.icon} alt="edu-exp-icon" />
                        </div>
                        <h5 className="edu-exp-title mb-15"><a>{item.title}</a></h5>
                        <p>{item.summary}</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default EducationArea;