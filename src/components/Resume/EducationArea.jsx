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
          <hr/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default EducationArea