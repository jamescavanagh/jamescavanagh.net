import React from 'react';

import certsData from '../../data/resume/certsData.json';
import degreeData from "../../data/resume/degreeData.json"


const EducationArea = () => {
    return (
      <>
          <div className="about-education__wrap">
            <div className="row align-items-center">
              <div className="col-xl-9 ml-40" >
                <h1 className='tab-pane-title mb-40 mt-40'>
                  <b>Education</b>
                </h1>
                <h4 className="tab-pane-title mb-0">
                  <b>{degreeData.institution}</b> ({degreeData.time})
                </h4>
            <p>{degreeData.institutionDescription}</p>
          <div className="about-education">
            <div>
              <h5 className="tab-pane-title mb-5"><b>{degreeData.level} {degreeData.major}</b></h5>
              <p className="mb-20">Minor: {degreeData.minor}</p>
            </div>
            <div>
              <div className='aboutme-feature-list mb-0'>
                {
                degreeData.keyPoints.map(item => (
                      <span> 
                        <ul>
                            <p className='experience-duration mb-0'>
                              <b>-{item} </b>
                            </p>
                        </ul>
                      </span>
                ))
                }
              </div>
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